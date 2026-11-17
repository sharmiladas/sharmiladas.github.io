import io
import json
import threading
import unittest
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen
from pathlib import Path
from docgate import make_server, review
from claude_review import ReviewError, review_with_claude

ROOT = Path(__file__).resolve().parents[1]


class RuleTests(unittest.TestCase):
    def test_before_and_after(self):
        self.assertEqual(review((ROOT/'examples/quickstart-before.md').read_text())['finding_count'], 4)
        self.assertEqual(review((ROOT/'examples/quickstart-after.md').read_text())['finding_count'], 0)

    def test_fenced_headings_are_not_page_structure(self):
        r = review('```bash\n# Fake title\n## Prerequisites\n## Expected result\n```')
        self.assertEqual(r['finding_count'], 3)

    def test_unclosed_fence(self):
        self.assertIn('unclosed_fence', [f['rule'] for f in review('# Title\n```')['findings']])

    def test_line_numbers_and_unicode(self):
        r = review('# Café\nJust connect.')
        self.assertEqual(next(f for f in r['findings'] if f['rule']=='minimizing_language')['line'], 2)


class HTTPTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.server = make_server(0)
        cls.thread = threading.Thread(target=cls.server.serve_forever, daemon=True)
        cls.thread.start()
        cls.base = f'http://127.0.0.1:{cls.server.server_port}'

    @classmethod
    def tearDownClass(cls):
        cls.server.shutdown()
        cls.server.server_close()
        cls.thread.join()

    def call(self, body=None, path='/v1/reviews', content_type='application/json', method='POST', headers=None):
        h = {'Content-Type': content_type}
        h.update(headers or {})
        request = Request(self.base+path, data=body, method=method, headers=h)
        try:
            response = urlopen(request, timeout=3)
        except HTTPError as exc:
            response = exc
        with response:
            return response.status, json.load(response)

    def test_health(self):
        self.assertEqual(self.call(path='/health', method='GET'), (200, {'status':'ok'}))

    def test_success(self):
        status, data = self.call(json.dumps({'markdown':'# Café'}).encode())
        self.assertEqual(status, 200)
        self.assertTrue(data['human_review_required'])
        self.assertTrue(data['request_id'])

    def test_malformed_and_non_utf8(self):
        for body in (b'{', b'\xff'):
            with self.subTest(body=body):
                status, data = self.call(body)
                self.assertEqual(status, 400)
                self.assertEqual(data['error']['code'], 'invalid_json')

    def test_invalid_document(self):
        for value in (' ', 42, None, 'a'*12001):
            with self.subTest(value_type=type(value)):
                self.assertEqual(self.call(json.dumps({'markdown':value}).encode())[0], 422)

    def test_invalid_fields(self):
        for value in ([], {}, {'markdown':'x','mode':'claude'}):
            self.assertEqual(self.call(json.dumps(value).encode())[0], 422)

    def test_exact_character_limit(self):
        self.assertEqual(self.call(json.dumps({'markdown':'a'*12000}).encode())[0], 200)

    def test_oversized_body(self):
        self.assertEqual(self.call(b'x'*65537)[0], 413)

    def test_content_type(self):
        self.assertEqual(self.call(b'{}', content_type='text/plain')[0], 415)

    def test_unknown_route(self):
        self.assertEqual(self.call(b'{}', path='/missing')[0], 404)

    def test_wrong_method(self):
        self.assertEqual(self.call(method='GET')[0], 405)

    def test_invalid_length(self):
        self.assertEqual(self.call(b'', headers={'Content-Length':'-1'})[0], 400)

    def test_chunked_is_rejected(self):
        self.assertEqual(self.call(b'', headers={'Transfer-Encoding':'chunked'})[0], 400)


class FakeResponse(io.BytesIO):
    def __init__(self, data):
        super().__init__(json.dumps(data).encode())
        self.headers = {'request-id':'fixture-request'}


class ClaudeClientTests(unittest.TestCase):
    def test_request_contract_and_mixed_blocks(self):
        def opener(req, timeout):
            self.assertEqual(req.full_url, 'https://api.anthropic.com/v1/messages')
            self.assertEqual(timeout, 30)
            self.assertEqual(req.get_header('Authorization'), 'Bearer test-key')
            self.assertEqual(req.get_header('Anthropic-version'), '2026-10-21')
            payload = json.loads(req.data)
            self.assertEqual(payload['messages'][0]['content'], '# Test')
            self.assertEqual(payload['model'], 'fixture-model')
            return FakeResponse({'content':[{'type':'thinking'}, {'type':'text','text':'Add prerequisites.'}], 'stop_reason':'end_turn'})
        result = review_with_claude('# Test', 'test-key', 'fixture-model', opener)
        self.assertEqual(result['review'], 'Add prerequisites.')
        self.assertEqual(result['upstream_request_id'], 'fixture-request')
        self.assertFalse(result['truncated'])

    def test_missing_config(self):
        with self.assertRaises(ReviewError):
            review_with_claude('x', None, None)

    def test_provider_errors_redact_body(self):
        for status in (400,401,403,404,429,500,529):
            def opener(*_, **__):
                raise HTTPError('https://api.anthropic.com', status, 'error', {'request-id':'fixture'}, io.BytesIO(b'PRIVATE DOCUMENT'))
            with self.subTest(status=status), self.assertRaises(ReviewError) as ctx:
                review_with_claude('x', 'key', 'model', opener)
            self.assertIn(str(status), str(ctx.exception))
            self.assertNotIn('PRIVATE DOCUMENT', str(ctx.exception))

    def test_network_errors(self):
        for error in (TimeoutError(), URLError('offline')):
            def opener(*_, **__):
                raise error
            with self.assertRaises(ReviewError):
                review_with_claude('x', 'key', 'model', opener)

    def test_invalid_response_shape(self):
        for response in ([], {}, {'content':[]}, {'content':[{'type':'text','text':42}]}):
            with self.assertRaises(ReviewError):
                review_with_claude('x', 'key', 'model', lambda *a, **k: FakeResponse(response))

    def test_truncation(self):
        result = review_with_claude('x','key','model', lambda *a,**k: FakeResponse({'content':[{'type':'text','text':'Partial'}],'stop_reason':'max_tokens'}))
        self.assertTrue(result['truncated'])


if __name__ == '__main__':
    unittest.main()
