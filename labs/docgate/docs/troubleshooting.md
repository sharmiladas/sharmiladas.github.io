# Troubleshoot a review request

Use the response status and `error.code` to identify the next action. A completed
review with findings is HTTP 200; it does not need a retry.

| Symptom | Likely cause | Action |
| --- | --- | --- |
| Connection refused | The server is stopped or the port differs | Run `python3 docgate.py`; use port 8787 |
| Address already in use | Another process uses 8787 | Stop that process or run `python3 docgate.py --port 8788` and change your request URL |
| HTTP 400 | Invalid JSON or request framing | Use the Python file client to avoid shell escaping errors |
| HTTP 413 | The encoded JSON exceeds 64 KiB | Submit a smaller excerpt; retain enough context for review |
| HTTP 415 | Content-Type is missing or wrong | Add `-H 'Content-Type: application/json'` |
| HTTP 422 | Wrong fields, blank text, or text too long | Provide only a nonblank markdown string of at most 12000 characters |
| Missing-section findings despite headings | Heading format differs | Use level-two English headings with the documented names |
| Zero findings on an inaccurate page | Structural checks cannot verify facts | Run the instructions and have a technical reviewer inspect the result |
| Claude configuration error | Key or model is absent | Follow the optional integration guide; the local API needs neither |

## Example validation failure

With the local server running:

```bash
curl -sS -i http://127.0.0.1:8787/v1/reviews \
  -H 'Content-Type: application/json' -d '{"markdown":" "}'
```

Expect HTTP 422 and `error.code: invalid_markdown`. Replace the blank text and
resubmit. The server does not store a failed review.
