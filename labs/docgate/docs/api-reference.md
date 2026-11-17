# DocGate API reference

Base URL: `http://127.0.0.1:8787`. The local demo requires no authentication.
It does not call Claude; use the separate [Claude client](claude-integration.md).
The machine-readable contract is [openapi.json](../openapi.json).

## Check service health

`GET /health` returns HTTP 200 with `{"status":"ok"}`. It checks local liveness,
not Claude availability or document quality.

## Review a document

`POST /v1/reviews` requires `Content-Type: application/json` and a Content-Length
header. curl and the Python client calculate Content-Length. Chunked requests are unsupported.
The request must be a UTF-8 JSON object containing only `markdown`.

| Field | Type | Constraint |
| --- | --- | --- |
| `markdown` | string | 1–12000 Unicode characters; cannot be blank |

The encoded JSON body must not exceed 65536 bytes. Escapes and non-ASCII encoding
can make the body larger than the decoded text. Both limits apply.

```json
{"markdown":"# Connect your app"}
```

HTTP 200 returns a synchronous review, with no stored review resource.

| Field | Meaning |
| --- | --- |
| `ruleset` | Rule semantics identifier, currently `quickstart-structure-v1` |
| `finding_count` | Number of findings, not a percentage or ATS-style score |
| `findings` | Ordered list of `{rule, line, message}` objects |
| `line` | One-based line of matching text, or null for a missing element |
| `human_review_required` | Always true in this version |
| `request_id` | Server-generated UUID for this request |

## Rules

| Rule | Trigger |
| --- | --- |
| `title_missing` | No level-one heading outside triple-backtick fences |
| `prerequisites_missing` | No `## Prerequisites` heading outside fences |
| `expected_result_missing` | No `## Expected result` heading outside fences |
| `minimizing_language` | A prose line contains simply, obviously, or just, ignoring case |
| `unclosed_fence` | An odd number of lines start with triple backticks after whitespace |

Section-heading matches ignore case and allow trailing whitespace, but not inline
formatting or alternate wording. They do not check whether the section contains
useful text. Multiple minimizing words on one line produce one finding.

## Errors

Application errors on the documented GET/POST routes use this shape:

```json
{"error":{"code":"invalid_markdown","message":"markdown must contain 1 to 12000 characters and cannot be blank."},"request_id":"<generated UUID>"}
```

| Status | Code | What to do |
| --- | --- | --- |
| 400 | `invalid_json` | Fix JSON syntax or UTF-8 encoding |
| 400 | `invalid_content_length` | Supply a nonnegative length |
| 400 | `unsupported_transfer_encoding` | Send a fixed-length request |
| 404 | `not_found` | Check the route; query strings and trailing slashes do not match |
| 405 | `method_not_allowed` | Use POST instead of GET on `/v1/reviews` |
| 408 | `request_timeout` | Send the complete body within the five-second read timeout |
| 413 | `body_too_large` | Reduce encoded JSON to at most 65536 bytes |
| 415 | `unsupported_media_type` | Set Content-Type to application/json |
| 422 | `invalid_fields` | Provide an object containing only markdown |
| 422 | `invalid_markdown` | Fix the text type, length, or blank value |

Other HTTP methods use Python's default 501 HTML response and are outside this
demo's JSON contract. Parser-level HTTP errors may also use Python's default
response. This is a local learning service, not an internet-facing API gateway.

## Versioning

The route is versioned as `/v1`. Clients should branch on `rule`, not message text.
No persistence, pagination, streaming, idempotency keys, or rate limits are implemented.
