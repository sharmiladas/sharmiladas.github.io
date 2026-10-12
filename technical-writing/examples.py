"""Small, deterministic demonstrations. Not a production service."""
import hashlib
import json
import re
import sqlite3
import unittest


def database():
    db = sqlite3.connect(':memory:')
    db.executescript('''
        CREATE TABLE requests (
            tenant TEXT, key TEXT, digest TEXT NOT NULL,
            response TEXT NOT NULL, PRIMARY KEY (tenant, key));
        CREATE TABLE jobs (id INTEGER PRIMARY KEY, payload TEXT NOT NULL);
    ''')
    return db


def create_job(db, tenant, key, payload, fail=False):
    serialized = json.dumps(payload, sort_keys=True, separators=(',', ':'))
    digest = hashlib.sha256(serialized.encode()).hexdigest()
    # A single connection, serial execution; not a concurrency benchmark.
    with db:
        prior = db.execute(
            'SELECT digest, response FROM requests WHERE tenant=? AND key=?',
            (tenant, key)).fetchone()
        if prior:
            if prior[0] != digest:
                raise ValueError('key reused with a different payload')
            return json.loads(prior[1])
        cursor = db.execute('INSERT INTO jobs(payload) VALUES (?)', (serialized,))
        response = {'job_id': cursor.lastrowid}
        db.execute('INSERT INTO requests VALUES (?, ?, ?, ?)',
                   (tenant, key, digest, json.dumps(response)))
        if fail:
            raise RuntimeError('simulated failure before commit')
        return response


DOCS = [
    {'id': 'v1', 'version': '1', 'text': 'Retry upload requests without a key.'},
    {'id': 'v2', 'version': '2', 'text': 'Retry upload requests with an idempotency key.'},
]


def retrieve(question, version=None):
    # Lexical baseline, deliberately not embedding search or a real RAG model.
    terms = set(re.findall(r'\w+', question.lower()))
    candidates = [d for d in DOCS if version is None or d['version'] == version]
    ranked = sorted(candidates, key=lambda d: -len(
        terms & set(re.findall(r'\w+', d['text'].lower()))))
    return ranked[0] if ranked else None


def compile_graph(graph):
    """Return a stable topological order or reject cycles/missing references."""
    order, visiting, visited = [], set(), set()

    def visit(node):
        if node not in graph:
            raise ValueError('missing dependency: ' + node)
        if node in visiting:
            raise ValueError('cycle: ' + node)
        if node in visited:
            return
        visiting.add(node)
        for dependency in sorted(graph[node]):
            visit(dependency)
        visiting.remove(node)
        visited.add(node)
        order.append(node)

    for node in sorted(graph):
        visit(node)
    return order


class PortfolioTests(unittest.TestCase):
    def test_retry_creates_one_job(self):
        db = database()
        first = create_job(db, 'a', 'k', {'task': 'index'})
        self.assertEqual(first, create_job(db, 'a', 'k', {'task': 'index'}))
        self.assertEqual(db.execute('SELECT COUNT(*) FROM jobs').fetchone()[0], 1)

    def test_changed_payload_rejected(self):
        db = database()
        create_job(db, 'a', 'k', {'task': 'index'})
        with self.assertRaises(ValueError):
            create_job(db, 'a', 'k', {'task': 'delete'})

    def test_tenant_scoping(self):
        db = database()
        self.assertNotEqual(create_job(db, 'a', 'k', {}), create_job(db, 'b', 'k', {}))

    def test_rollback(self):
        db = database()
        with self.assertRaises(RuntimeError):
            create_job(db, 'a', 'k', {}, fail=True)
        self.assertEqual(db.execute('SELECT COUNT(*) FROM jobs').fetchone()[0], 0)
        self.assertEqual(db.execute('SELECT COUNT(*) FROM requests').fetchone()[0], 0)
        self.assertEqual(create_job(db, 'a', 'k', {})['job_id'], 1)

    def test_unfiltered_retrieval_selects_old_version(self):
        self.assertEqual(retrieve('Retry upload requests')['id'], 'v1')

    def test_filter_preserves_required_condition(self):
        result = retrieve('Retry upload requests', version='2')
        self.assertEqual(result['id'], 'v2')
        self.assertIn('with an idempotency key', result['text'])

    def test_unknown_version_has_no_evidence(self):
        self.assertIsNone(retrieve('Retry upload requests', version='3'))

    def test_graph_order(self):
        self.assertEqual(compile_graph({'publish': ['test'], 'test': ['build'], 'build': []}),
                         ['build', 'test', 'publish'])

    def test_cycle_rejected(self):
        with self.assertRaises(ValueError):
            compile_graph({'a': ['b'], 'b': ['a']})

    def test_missing_dependency_rejected(self):
        with self.assertRaises(ValueError):
            compile_graph({'build': ['missing']})

    def test_shared_dependency_once(self):
        order = compile_graph({'a': ['base'], 'b': ['base'], 'base': []})
        self.assertEqual(order.count('base'), 1)
        self.assertLess(order.index('base'), order.index('a'))
        self.assertLess(order.index('base'), order.index('b'))


if __name__ == '__main__':
    unittest.main(verbosity=2)
