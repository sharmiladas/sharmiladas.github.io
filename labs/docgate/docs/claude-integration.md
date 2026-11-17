# Review a page with Claude

Use the optional client to request editorial feedback through the Claude Messages
API. This is separate from DocGate's deterministic HTTP service. It sends the
file contents to Anthropic and can incur API charges.

## Prerequisites

- Python 3.11 or later.
- A Claude API account with available credits and a usable model.
- An API key and a model identifier from your Claude Console.
- Public or synthetic Markdown that you are authorized to send.

Local tests use response fixtures. They do not establish live model access,
credential validity, response quality, or provider latency.

## Configure and run

Set `ANTHROPIC_API_KEY` using your shell or secret manager; do not put a key in
source files. Set `ANTHROPIC_MODEL` to an exact model ID available to your account.
The placeholder below must be replaced. No model is silently selected.

```bash
export ANTHROPIC_MODEL='replace-with-your-available-model-id'
python3 claude_review.py examples/quickstart-before.md
```

The client calls `POST https://api.anthropic.com/v1/messages` with an Authorization
Bearer header and `anthropic-version: 2026-10-21`. The body includes your model,
a 1200-token output limit, a review instruction, and the document as a user message.
There is no tool access or code execution. Prompt instructions to treat text as
data reduce ambiguity but do not guarantee immunity to prompt injection.

## Expected result

On a successful live call, stdout contains JSON with `review`, `stop_reason`,
`truncated`, `upstream_request_id`, and `human_review_required`. Editorial text
varies by model and request. If `truncated` is true, do not treat the review as complete.
The program exits 1 on a configuration, file, network, provider, or response-shape error.

## Handle failures

| Failure | Client behavior | Your next step |
| --- | --- | --- |
| Missing key or model | Stops before a network request | Set both environment variables |
| HTTP 401 or 403 | Prints status and recovery hint | Check credentials and access |
| HTTP 404 | Prints a model hint | Confirm the model ID |
| HTTP 429 | Returns an error; no automatic retry | Wait and inspect rate limits |
| HTTP 529 or 5xx | Returns an error; no automatic retry | Check provider status before retrying |
| Timeout or connection error | Stops after the network failure | Check connectivity; avoid blind repeated requests |
| Non-text or malformed response | Rejects unusable output | Inspect configuration and provider behavior |

The client does not echo upstream error bodies or secrets. It makes a single
attempt with a 30-second network timeout. A timeout does not prove the provider
did not process the request; a retry can incur another charge.

## Record a live verification

After you run the sample, record the date, exact model, stop reason, sanitized
request ID, one finding you accepted or rejected, and your reasoning. Keep keys
and private text out of the record. Until then, describe this as a fixture-tested
integration rather than a live-verified Claude application.

## Sources

Contract reviewed 17 November 2026 against primary documentation:

- [Create a Message](https://platform.claude.com/docs/en/api/messages/create)
- [API version migration](https://platform.claude.com/docs/en/api/migration-2026-10-21)
- [API errors](https://platform.claude.com/docs/en/api/errors)

Provider APIs evolve. Recheck these pages before changing the pinned API version.
