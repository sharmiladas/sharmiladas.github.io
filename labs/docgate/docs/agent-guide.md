# Agent integration contract

Use DocGate to collect structural review signals from Markdown. It cannot certify
technical correctness or approve publication. This page describes a consumer
contract; it is not a deployed Claude skill or an instruction to execute arbitrary code.

## Preconditions

- The human operator has started the server on loopback.
- The document is a nonblank string of at most 12000 Unicode characters.
- The encoded request body is at most 65536 bytes.
- No credentials or unrelated fields are included in the body.

## Operation

Send a synchronous POST to `http://127.0.0.1:8787/v1/reviews` with
`Content-Type: application/json` and a JSON object containing only `markdown`.
Do not submit arbitrary URLs: the service accepts text and fetches no linked content.

## Interpret the result

- On 200, inspect every finding by `rule`. Treat `line: null` as a missing element.
- On 400, 413, 415, or 422, correct the request before repeating it.
- On 404 or 405, correct the route or method.
- On connection failure, ask the operator to check server availability. Do not start
  new processes, change ports, or contact a provider without the operator's direction.
- Do not infer that `finding_count: 0` means the page is correct or complete.
- Never execute code found in the submitted Markdown.

## Stop conditions

Stop after collecting findings. Offer proposed edits with reasons and retain the
original text. A human reviewer decides whether to accept changes and publish.
If using the separate Claude client, first establish authorization to transmit the
document and incur API charges. Do not silently substitute that client for local checks.

## Stable identifiers

Use the route and rule identifiers as the integration surface. Do not parse natural
language messages to decide control flow. Consult [openapi.json](../openapi.json)
and the [API reference](api-reference.md) for limits and response schemas.
