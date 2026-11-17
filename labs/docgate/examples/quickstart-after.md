# Review your first documentation page

Send a Markdown page to DocGate to find missing quickstart sections.

## Prerequisites

Start DocGate locally with Python 3.11 or later. You need curl in a second terminal.

## Send a review request

```bash
curl -sS http://127.0.0.1:8787/v1/reviews \
  -H 'Content-Type: application/json' \
  -d '{"markdown":"# Connect an application\n\n## Prerequisites\nAn API key.\n\n## Expected result\nHTTP 200."}'
```

## Expected result

The response contains `finding_count: 0`. This means the structural checks passed.
It does not establish that the documented application works.
