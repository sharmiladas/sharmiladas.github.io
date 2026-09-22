# Agentic technical program management

A reusable workflow for turning a program brief into a delivery plan, keeping that plan current, and preparing decisions for the people accountable for delivery.

## Run it in five minutes

1. Open an AI assistant your organization allows you to use for project information.
2. Paste the entire contents of `WORKFLOW.md` into a new conversation.
3. Fill in the intake below and paste it into the same conversation. Leave unknown fields blank.
4. Say **START**. Review the proposed charter, ownership, and plan before adopting them.
5. Save the returned program state. For the next run, paste the workflow, saved state, and new updates, then say **UPDATE**.

No code, integrations, or autonomous background process is required. One assistant plays the specialist roles sequentially. If your assistant cannot open files, copy and paste their text. “Agentic” here means the assistant chooses the next useful step, maintains explicit state, checks its own work, and escalates decisions it cannot make.

## Intake: copy and fill in

```text
Command: START
Program name:
Business outcome and how success will be measured:
Why now:
Target date and whether it is fixed or preferred:
In scope:
Out of scope:
Teams and proposed accountable owners:
Known milestones, constraints, and dependencies:
Current facts, with source names and dates:
Decisions already made, by whom, and when:
Links or pasted source excerpts:
Who may approve scope, dates, resources, and launch:
Today's date and timezone:
```

Do not wait for a perfect brief. The first run identifies missing information and produces the useful parts of the plan.

## What you get

- A charter with scope, measurable outcomes, and decision authority.
- Milestones with acceptance evidence, dependencies, and proposed or confirmed owners.
- Risks, issues, actions, decisions, and dependencies with stable IDs.
- A concise stakeholder update and concrete decision requests.
- A portable state block you can save and reuse with a different assistant.

## Commands

| Command | When to use it | Result |
|---|---|---|
| START | New program | Draft charter, plan, registers, open questions |
| UPDATE | New facts or a weekly review | Reconciled state, changed items, status report |
| DECIDE | A tradeoff needs a decision | Options, evidence, consequences, recommendation |
| REPLAN | Scope, capacity, or a date changes | Impact analysis and proposed baseline changes |
| LAUNCH CHECK | Delivery is approaching | Evidence-based readiness assessment |
| CLOSE | Delivery or cancellation is confirmed | Outcome assessment, handoff, lessons, open obligations |

## A practical operating rhythm

Before a weekly review, paste team updates and the saved state, then run UPDATE. Discuss only the decisions, dependencies, and exceptions that need people. Record the resulting decisions and rerun UPDATE. Before release, run LAUNCH CHECK. After handoff, run CLOSE.

This kit does not schedule runs, fetch live updates, send messages, or change tickets on its own. Those capabilities require a connected execution environment and explicit authorization. Review every proposed external action before adopting it.

See `EXAMPLE.md` for a fictional first run and an update that exposes a delivery risk.
