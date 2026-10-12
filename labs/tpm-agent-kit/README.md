# Baseframe TPM Agent Kit
Version 0.1 — a file-based agent operating kit by Sharmila Das.

Turn program documents, meeting notes, and delivery updates into a coherent execution system: outcomes, owners, dependencies, risks, decisions, release gates, and concise leadership updates.

Start with [START-HERE.md](START-HERE.md). Try the fictional example before using work data.

## What is implemented
- Agent instructions and eight repeatable workflows.
- Markdown templates and a persistent program workspace.
- A Python setup utility that creates a new workspace without overwriting existing files.
- A complete fictional 12-workstream knowledge-platform example and expected outputs.
- An evaluation checklist for judging agent responses.

This is a usable prompt-and-workspace kit, not a hosted application or independently running service. An AI assistant performs the reasoning. No model API, MCP server, calendar access, scheduled jobs, or project-tracker integration is bundled. Live integrations require tools already available to your chosen assistant.

## Commands to type into your assistant
- Start my program day.
- Build a program charter from these documents.
- Process this meeting into decisions, actions, risks, and dependencies.
- Review dependencies and identify the next milestone at risk.
- Draft my weekly leadership update.
- Prepare the launch readiness review.
- Evaluate this scope change.
- Run a program retrospective.

## Design
Capture → reconcile evidence → identify delivery impact → recommend action → maintain the authorized workspace → draft stakeholder communication.

Each operational item has a stable ID, owner, status, source, and last verified date. All example names, dates, metrics, and commitments are fictional.

## Build approach
The kit combines an original system prompt, structured program records, repeatable delivery workflows, and a Python workspace utility. The templates and fictional example make the behavior inspectable and adaptable.
