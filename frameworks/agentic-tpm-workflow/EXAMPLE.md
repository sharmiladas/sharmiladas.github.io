# Worked example: cross-team software delivery

This is a fictional illustration of expected behavior, not a record of a live program or a test of a particular AI model.

## First run

Paste WORKFLOW.md, followed by:

```text
START
Today's date: 2026-10-05. Timezone: America/Los_Angeles.
Program: Customer self-service account export.
Outcome: Customers can export their account data without a support ticket.
Proposed success measure: Reduce export-related support requests by 50%
within 30 days of launch, compared with the preceding 30 days.
Requested launch: 2026-11-02, preferred rather than fixed.
Scope: Export API, web interface, download access control, monitoring,
and a support runbook. Exclude scheduled recurring exports.
Teams: Backend, Web, Security, Support.
Source: Kickoff notes, 2026-10-05.
Backend reports the API is expected by 2026-10-19.
Web reports integration needs five business days after API acceptance.
Security review is mandatory before launch; its duration is unknown.
The engineering director approves launch and changes to delivery dates.
No milestone owners, estimates, or baseline dates have been approved.
```

An appropriate first result includes:

| Item | Expected treatment |
|---|---|
| Overall status | Unknown: estimates, ownership, and review timing remain incomplete |
| Requested date | 2026-11-02, preferred |
| Approved baseline | Unknown; no approved commitment supplied |
| Forecast | Unknown; review timing and other work are not estimated |
| Success measure | Proposed, pending confirmation and measurement ownership |
| API milestone | Forecast 2026-10-19 reported by Backend; acceptance evidence still needed |
| Web integration | Depends on accepted API; five business days is a reported estimate |
| Security review | Mandatory launch criterion; review slot and evidence unknown |
| Owners | Proposed teams may be listed; individuals remain unconfirmed |

Useful next actions are to confirm accountable owners, establish API acceptance criteria, obtain the Security review slot, and agree on outcome measurement. The assistant should not manufacture a detailed launch schedule from the brief.

## Weekly update

Paste the saved state from the first run, followed by:

```text
UPDATE
Today's date: 2026-10-12.
Source: Backend weekly update, 2026-10-12.
The API forecast has moved from 2026-10-19 to 2026-10-26 because the
team discovered additional access-control work. Work is proceeding.
Source: Security review coordinator, 2026-10-12.
The earliest available review slot is 2026-11-04. A completed Security
review remains mandatory before launch. No exception has been approved.
There is no change to the preferred 2026-11-02 launch target.
```

An appropriate update:

- Reuses the API milestone ID and records its forecast change with its source.
- Marks the program **At risk**: the mandatory review cannot occur before the requested launch, although work continues.
- Preserves 2026-11-02 as the requested date and leaves the approved baseline unset.
- Leaves the final launch forecast unknown: a review slot does not establish review completion or launch readiness.
- Opens a decision request to seek an earlier review slot or revise the requested launch date, with the engineering director as the reported authority.
- Does not assume mandatory review can be waived, or that the review will pass.

Example stakeholder draft:

> The preferred November 2 launch is at risk. Backend now expects the API on October 26, and the earliest Security review slot is November 4. Delivery work continues, but the mandatory review cannot currently support the requested launch date. We need a decision on pursuing an earlier review slot or revising the target. A new launch forecast requires confirmed integration and review completion estimates.

## Try the other commands

```text
DECIDE
Compare seeking an earlier Security review slot with revising the
requested launch date. Do not assume additional reviewer capacity.
```

```text
LAUNCH CHECK
Use only the evidence in saved state. Identify which mandatory criteria
are satisfied, failed, or still unknown.
```

Expected launch result: **Not ready**, because completion evidence for mandatory criteria is absent.

## Quick acceptance checks for your chosen assistant

These checks assess behavior; model outputs can vary.

| Try this | Expected behavior |
|---|---|
| Paste the same weekly update twice | Existing records are reused; no duplicate decision or action |
| Omit the program state in a fresh chat | Assistant asks for state and labels any update provisional |
| Say “the team thinks the date is approved” without approval evidence | Date remains proposed or unconfirmed |
| Supply conflicting forecasts from two teams | Both claims remain visible; conflict is raised |
| Ask for a status report without current evidence | Assistant discloses evidence age and uncertainty |
| Say “send this to everyone” without recipients or a messaging tool | Assistant does not claim to send; resolves missing execution details |
| Request launch while mandatory review evidence is missing | Assistant recommends not ready and identifies the missing evidence |

Review the first few runs before adopting the kit for recurring program reviews.
