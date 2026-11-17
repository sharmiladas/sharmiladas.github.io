"""Local documentation review API. Python 3.11+, standard library only."""
import argparse
import json
import re
import uuid
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

MAX_BODY = 65536
MAX_TEXT = 12000


def review(markdown):
    """Return structural signals, never a factual-correctness verdict."""
    lines = markdown.splitlines()
    # Exclude fenced examples so code comments do not count as page headings.
    prose, fenced = [], False
    for number, line in enumerate(lines, 1):
        if line.strip().startswith('```'):
            fenced = not fenced
            continue
        if not fenced:
            prose.append((number, line))
    findings = []
    if not any(re.match(r'^#\s+\S', line) for _, line in prose):
        findings.append({'rule': 'title_missing', 'line': None,
                         'message': 'Add a level-one heading that names the task.'})
    if not any(re.match(r'^##\s+Prerequisites\s*$', line, re.I) for _, line in prose):
        findings.append({'rule': 'prerequisites_missing', 'line': None,
                         'message': 'State the tools and access needed before the first step.'})
    if not any(re.match(r'^##\s+Expected result\s*$', line, re.I) for _, line in prose):
        findings.append({'rule': 'expected_result_missing', 'line': None,
                         'message': 'Show how the reader can recognize success.'})
    for number, line in prose:
        if re.search(r'\b(simply|obviously|just)\b', line, re.I):
            findings.append({'rule': 'minimizing_language', 'line': number,
                             'message': 'Check whether this wording hides a prerequisite or difficult step.'})
    if fenced:
        findings.append({'rule': 'unclosed_fence', 'line': None,
                         'message': 'Close the triple-backtick code fence.'})
    return {'ruleset': 'quickstart-structure-v1', 'finding_count': len(findings),
            'findings': findings, 'human_review_required': True}


class Handler(BaseHTTPRequestHandler):
    def setup(self):
        super().setup()
        self.connection.settimeout(5)

    def log_message(self, *_):
        pass  # Do not log submitted documents or request headers.

    def reply(self, status, data):
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', str(len(body)))
        self.send_header('Cache-Control', 'no-store')
        self.send_header('Connection', 'close')
        self.end_headers()
        self.wfile.write(body)
        self.close_connection = True

    def error(self, status, code, message):
        self.reply(status, {'error': {'code': code, 'message': message},
                            'request_id': self.request_id})

    def do_GET(self):
        self.request_id = str(uuid.uuid4())
        if self.path == '/health':
            self.reply(200, {'status': 'ok'})
        elif self.path == '/v1/reviews':
            self.error(405, 'method_not_allowed', 'Use POST for /v1/reviews.')
        else:
            self.error(404, 'not_found', 'No route matches this path.')

    def do_POST(self):
        self.request_id = str(uuid.uuid4())
        if self.path != '/v1/reviews':
            self.error(404, 'not_found', 'No route matches this path.')
            return
        if self.headers.get('Transfer-Encoding'):
            self.error(400, 'unsupported_transfer_encoding', 'Send a Content-Length header; chunked requests are unsupported.')
            return
        if self.headers.get('Content-Type', '').split(';')[0].strip().lower() != 'application/json':
            self.error(415, 'unsupported_media_type', 'Send Content-Type: application/json.')
            return
        try:
            length = int(self.headers.get('Content-Length', ''))
            if length < 0:
                raise ValueError
        except ValueError:
            self.error(400, 'invalid_content_length', 'Send a nonnegative Content-Length integer.')
            return
        if length > MAX_BODY:
            self.error(413, 'body_too_large', 'JSON body exceeds 65536 bytes.')
            return
        try:
            raw = self.rfile.read(length)
            if len(raw) != length:
                raise ValueError
            data = json.loads(raw.decode('utf-8'))
        except TimeoutError:
            self.error(408, 'request_timeout', 'Body was not received within the read timeout.')
            return
        except (ValueError, UnicodeDecodeError):
            self.error(400, 'invalid_json', 'Send a complete UTF-8 JSON object.')
            return
        if not isinstance(data, dict) or set(data) != {'markdown'}:
            self.error(422, 'invalid_fields', 'Provide only the markdown field.')
            return
        markdown = data['markdown']
        if not isinstance(markdown, str) or not markdown.strip() or len(markdown) > MAX_TEXT:
            self.error(422, 'invalid_markdown', 'markdown must contain 1 to 12000 characters and cannot be blank.')
            return
        self.reply(200, dict(review(markdown), request_id=self.request_id))


def make_server(port=8787):
    return ThreadingHTTPServer(('127.0.0.1', port), Handler)


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8787)
    args = parser.parse_args()
    with make_server(args.port) as server:
        print(f'DocGate listening at http://127.0.0.1:{server.server_port}', flush=True)
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            pass
