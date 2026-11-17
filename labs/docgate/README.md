# Baseframe DocGate

A small Python API and documentation sample for reviewing developer quickstarts.
Send Markdown to a local endpoint, inspect structural findings, and revise the page.
An optional client sends a document to the Claude Messages API for an editorial review.

This is a new, AI-assisted portfolio sample prepared for Sharmila Rammohan in November
2026. It contains synthetic documents, not employer material. Local HTTP behavior is
tested; the Claude integration is tested with fixtures and has not been live-verified.
Source code and documentation were developed with AI assistance.

## Start here

1. [Run the quickstart](docs/quickstart.md).
2. [Improve a page in the tutorial](docs/tutorial.md).
3. [Look up the API contract](docs/api-reference.md).
4. [Try the optional Claude review](docs/claude-integration.md).

## Documentation samples

| Sample | What it demonstrates |
| --- | --- |
| [Quickstart](docs/quickstart.md) | Prerequisites, first request, expected output, next step |
| [Tutorial](docs/tutorial.md) | A complete before-and-after task with runnable examples |
| [API reference](docs/api-reference.md) | Input constraints, response semantics, status codes |
| [Troubleshooting](docs/troubleshooting.md) | Symptom, cause, corrective action |
| [Rewrite rationale](docs/rewrite-rationale.md) | Editorial decisions tied to reader needs |
| [Agent guide](docs/agent-guide.md) | Machine-oriented contract, constraints, stop conditions |
| [Design decisions](docs/design.md) | Scope, tradeoffs, API evolution and human judgment |
| [Test report](docs/test-report.md) | Executed tests, observed findings, limits |

## Run the checks

Requires Python 3.11 or later. No third-party packages or API keys are needed.

```bash
python3 -m unittest discover -s tests -v
```

## Scope

The service binds to `127.0.0.1`, has no authentication, and stores no documents.
Use it as a local demo. A zero-finding review is not a quality certification.
This narrow line-based checker supports triple-backtick fences; it is not a full
Markdown parser. It does not validate links, run submitted code, or verify claims.

## Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md). Source and documentation are MIT-licensed.
The source and documentation are published in the portfolio repository. The API runs locally; this website does not host a running Python service.
