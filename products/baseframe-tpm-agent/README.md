# Baseframe TPM Agent

[Product page](https://sharmiladas.github.io/products/baseframe-tpm-agent.html) · [Full kit README](../../labs/tpm-agent-kit/README.md)


[Product overview](https://sharmiladas.github.io/frameworks/baseframe-tpm-agent.html) · [GitHub source](https://github.com/sharmiladas/sharmiladas.github.io/tree/main/labs/tpm-agent-kit) · [Start here](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/labs/tpm-agent-kit/START-HERE.md) · [Product brief](https://github.com/sharmiladas/sharmiladas.github.io/blob/main/labs/tpm-agent-kit/docs/PRODUCT-BRIEF.md)

### How it was built

A file-based agent operating kit connects program outcomes, workstreams, milestones, dependencies, risks, decisions, and acceptance evidence. It combines agent instructions, eight workflow prompts, twelve record templates, a workspace setup utility, a fictional example, and acceptance scenarios. An AI assistant performs reasoning using the supplied evidence. The kit itself is not an autonomous service or hosted application.

### Run

Fork the portfolio repository or copy only `labs/tpm-agent-kit` into your own repository. To try the published example locally:

```bash
git clone https://github.com/sharmiladas/sharmiladas.github.io.git
cd sharmiladas.github.io/labs/tpm-agent-kit
python3 scripts/setup.py --workspace ./my-program
```

Python 3.10+ is required; no third-party packages are needed. The setup utility creates a new directory and refuses to overwrite an existing one. Open the new workspace in an assistant with authorized file access, and explicitly ask it to read `AGENTS.md` and `context/program-profile.md`. A fork uses your own repository URL in the clone command.

Alternatively, upload `system-prompt.md`, `context/program-profile.md`, the workflow you need, and the fictional example source files to an approved assistant. Follow `START-HERE.md` and compare the output with `expected-weekly-update.md`. This upload workflow does not require running Python.

### Customize

- Fill in `context/program-profile.md` with your program's goals, scope, milestones, owners, source hierarchy, review date, and timezone.
- Choose or adapt a prompt in `workflows/` for planning, meetings, dependency reviews, updates, launch readiness, scope changes, or retrospectives.
- Adapt `templates/` to your program's records while preserving stable IDs, source evidence, verification dates, and proposed-versus-confirmed distinctions.
- Supply current source notes and tracker exports. Replace fictional demo facts with real authorized evidence; retain unknowns when evidence is missing.
- Evaluate the adapted kit with `evals/ACCEPTANCE.md` and your own representative program cases.

The kit does not configure live trackers, background jobs, credentials, or messaging. Integration guidance lives in `docs/INTEGRATIONS.md`.

