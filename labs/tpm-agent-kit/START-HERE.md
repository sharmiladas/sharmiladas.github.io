# Start here

## Fastest path: upload files to an AI conversation
1. Upload `system-prompt.md`, `context/program-profile.md`, and the workflow you need. Ask the assistant to follow them within its own platform rules.
2. For a demo, also upload `examples/knowledge-platform/source-notes.md` and `examples/knowledge-platform/program.json`.
3. Type: “Using only these example files, draft my weekly leadership update as of 2026-10-11. Explain milestone risk and the next decision. Treat every example as fictional.”
4. Compare the answer with `examples/knowledge-platform/expected-weekly-update.md`.
5. For your real program, replace the profile with your objective, scope, milestones, named owners, and source-of-truth rules; upload current source documents. Do not carry demo facts into your work.

If your assistant cannot persist files, download the updated registers and supply them in the next session. Chat history alone is not durable program state.

## Local workspace option
Requires Python 3.10 or newer; no third-party packages.

From the extracted kit directory run:
```bash
python3 scripts/setup.py --workspace ./my-program
```
Open that workspace in an assistant with authorized file access. Ask it to read `AGENTS.md` and `context/program-profile.md`. Do not assume every assistant automatically loads AGENTS.md. The generated CLAUDE.md points Claude Code to the same instructions; it must also be read.

The utility refuses to overwrite an existing destination. Use a new directory per program, or edit an existing workspace manually.

## First real prompt
“Read the program profile and supplied sources. List what is known, missing, or conflicting. Create a draft charter, milestone plan, and registers. Mark unconfirmed owners and dates as proposed. Identify the three decisions needed to establish a credible plan.”

## Daily use
Use the daily workflow each morning and the weekly workflow before leadership review. Provide the review date and timezone. Supply new notes or tracker exports when connections are unavailable.

## What this does not enable automatically
No subscriptions, tool installation, credentials, background automation, messages, or external tracker changes are configured by extraction or setup. Connection guidance is in `docs/INTEGRATIONS.md`.
