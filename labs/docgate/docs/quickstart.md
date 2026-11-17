# Review your first page

Run DocGate locally and submit a Markdown page. You will receive a JSON list of
structural issues that a documentation editor can review.

## Prerequisites

- Python 3.11 or later, available as `python3`.
- curl, or use the included Python client instead.
- Two terminals open in the extracted `baseframe-docs-api` directory.

No account, dependency installation, or API key is needed for this quickstart.
Commands use macOS or Linux shell syntax. On Windows, use WSL or adjust the shell syntax.

## Start the server

In the first terminal:

```bash
python3 docgate.py
```

Keep the terminal open. The server prints `DocGate listening at http://127.0.0.1:8787`.

## Submit a page

In the second terminal:

```bash
curl -sS http://127.0.0.1:8787/v1/reviews \
  -H 'Content-Type: application/json' \
  -d '{"markdown":"# Connect your app"}'
```

## Expected result

The request returns HTTP 200 with this shape. `request_id` differs on each request.

```json
{
  "ruleset": "quickstart-structure-v1",
  "finding_count": 2,
  "findings": [
    {"rule": "prerequisites_missing", "line": null, "message": "State the tools and access needed before the first step."},
    {"rule": "expected_result_missing", "line": null, "message": "Show how the reader can recognize success."}
  ],
  "human_review_required": true,
  "request_id": "<generated UUID>"
}
```

HTTP 200 means the review completed. Findings are editorial signals, not API errors.
The checker expects the English headings `## Prerequisites` and `## Expected result`.

## Review a file without curl

```bash
python3 examples/review_file.py examples/quickstart-before.md
```

This fixture returns four findings. If the connection fails, confirm the first
terminal is still running the server. See [troubleshooting](troubleshooting.md).

## Next step

Follow the [rewrite tutorial](tutorial.md), or press Ctrl+C in the first terminal to stop.
