# Test report

Executed 17 November 2026 with Python 3.12.14 on Linux. These are local execution
results, not user research or production performance measurements.

## Automated tests

Command: `python3 -m unittest discover -s tests -v`

Result: 22 tests passed. Tests cover the deterministic rules, actual loopback HTTP
requests, and the optional Claude client with injected response fixtures.

| Area | Observed result |
| --- | --- |
| Original and revised page | Four findings before; zero after |
| Headings inside fenced code | Do not satisfy page-heading checks |
| Unicode prose | Accepted and reviewed with one-based line numbers |
| Malformed JSON and invalid UTF-8 | HTTP 400 |
| Blank, non-string, null, or overlength Markdown | HTTP 422 |
| Exactly 12000 text characters | Accepted when the encoded body fits |
| Encoded body above 65536 bytes | HTTP 413 |
| Wrong content type | HTTP 415 |
| Unknown route and GET on review route | HTTP 404 and 405 respectively |
| Negative Content-Length and chunked framing | HTTP 400 |
| Claude authentication and version headers | Match the checked request contract in a fixture test |
| Claude 400, 401, 403, 404, 429, 500, 529 | Converted into controlled errors without echoing response bodies |
| Network failure and timeout | Returned as controlled client errors |
| Missing or non-text response content | Rejected |
| Output token limit | Marked as truncated |

## Documented client commands

Four additional requests were executed against a running server on port 8787:
the Python file client for both rewrite fixtures, the quickstart curl request,
and the blank-document troubleshooting request. Results matched the documented
finding counts and status codes. Sanitized, actual responses are saved in
[recorded-local-results.json](../examples/recorded-local-results.json).

## What testing revealed

Code examples can contain heading-like lines. Counting those as document structure
would produce false negatives, so the implementation excludes triple-backtick
fences and includes a regression case. A request's UTF-8 JSON size is different
from its decoded character count, so the API enforces and documents both limits.
Provider responses can mix text and other blocks, so the client extracts text
blocks and rejects responses without usable text. These are verified behaviors,
not claims that a defect was discovered in a prior employer system.

## Unverified behavior

No live Claude call was made. Fixture tests verify client handling, not actual
provider compatibility, model quality, or billing. Python 3.11 and 3.13 are configured
in the included CI workflow but were not executed here. Slow-body timeout recovery,
concurrent load, and full CommonMark compatibility were not exercised. The code is
a local sample, with no production deployment, durability, or authentication claim.
