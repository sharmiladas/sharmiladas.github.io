"""Send a local UTF-8 Markdown file to a running DocGate server."""
import json
import sys
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

try:
    body = json.dumps({'markdown': Path(sys.argv[1]).read_text(encoding='utf-8')}).encode()
    request = Request('http://127.0.0.1:8787/v1/reviews', data=body,
                      headers={'Content-Type': 'application/json'})
    with urlopen(request, timeout=10) as response:
        print(json.dumps(json.load(response), indent=2))
except HTTPError as exc:
    print(exc.read().decode(), file=sys.stderr)
    raise SystemExit(1)
except (OSError, UnicodeError, URLError, IndexError) as exc:
    print(f'Request failed: {exc}. Usage: python3 examples/review_file.py FILE', file=sys.stderr)
    raise SystemExit(1)
