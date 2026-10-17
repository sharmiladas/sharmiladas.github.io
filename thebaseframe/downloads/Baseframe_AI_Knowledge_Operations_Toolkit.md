# Baseframe AI Knowledge Operations Toolkit
## Trusted context. Measured behavior. Controlled change.

Sharmila (Das) Rammohan · Baseframe · Version 1.0 · October 12, 2026

## The business problem and recommendation

Enterprises can retrieve documents and generate answers while still failing to complete work reliably. Conflicting policies, unclear ownership, expired procedures, missing permissions, and weak evaluation create rework and operational risk. Adding a stronger model does not resolve these gaps.

Build a connected operating model with three deliverables: an Enterprise Context Blueprint defines what agents may know; a continuous AI Content Quality Lab tests what they do; an Agent Operations Documentation framework records who owns the system and how changes, exceptions, and incidents are handled.

This toolkit contains proposed consulting methods and reusable templates. The example is illustrative, not a client implementation or measured business result. It makes no claims of certification or regulatory compliance.

## Engagement structure

| Offering | Buyer problem | Deliverables | Acceptance evidence |
|---|---|---|---|
| Enterprise Context Blueprint | AI answers use inconsistent or stale knowledge | Source register, content model, glossary, relationship map, permission matrix, freshness rules, retrieval plan | A representative task can be traced to an authorized, current, authoritative source |
| Continuous AI Content Quality Lab | Good-looking answers hide failures | Evaluation set, scoring rubric, retrieval and action tests, regression report, release decision | Reviewed evidence demonstrates quality and permitted behavior against agreed thresholds |
| Agent Operations Documentation | Ownership and change controls are unclear | Agent charter, approval boundaries, runbooks, incident template, change record | Owners can stop, investigate, restore, and revalidate the system |

Start with one bounded workflow and one business outcome. Expand only after the baseline and operating responsibilities are established. Commercial scope should specify repositories, workflows, evaluation cases, integrations, and review cycles; quote implementation and ongoing assurance separately.

## 1. Enterprise Context Blueprint

### Method

1. Select a business task and baseline its current completion time, failure rate, and support burden.
2. Inventory the knowledge and systems required to complete that task.
3. Resolve source authority and conflicting definitions with accountable owners.
4. Define content types, required fields, identifiers, and relationships.
5. Map user and agent access, expiry, event triggers, and review obligations.
6. Prototype retrieval against representative questions and exceptions.
7. Deliver a prioritized remediation backlog and signed ownership plan.

### Source register template

| Field | Required decision |
|---|---|
| Source ID and location | Stable identifier, canonical URI, repository |
| Business owner / content steward | Who resolves policy and who maintains content |
| Authority | Canonical, supporting, historical, or excluded; precedence rationale |
| Content scope | Covered products, audiences, regions, versions, and tasks |
| Classification | Sensitivity, retention, permitted audiences |
| Access enforcement | Identity source, repository controls, retrieval filtering |
| Effective and review dates | Validity interval, expiry behavior, review owner |
| Update mechanism | Manual review, release event, policy change, incident |
| Lineage | Origin, transformations, approval record |
| Conflict treatment | Escalation route; whether answering must be blocked |

### Content model template

Use the types that support the task; a knowledge graph is optional.

| Type | Essential fields | Relationships |
|---|---|---|
| Concept | ID, definition, scope, owner, approved synonyms | Explains task or entity |
| Task | ID, prerequisites, ordered steps, success check, exceptions | Uses policy; applies to product/version |
| Reference | ID, values or parameters, constraints, version | Supports task |
| Policy | ID, authority, applicability, effective dates, obligations | Constrains task or action |
| Decision | ID, question, rationale, approver, date, supersession | Changes policy or workflow |
| Troubleshooting | Symptom, diagnosis, permitted resolution, escalation | Resolves task failure |

Shared fields: canonical URI, status, sensitivity, audience, locale, owner, version, effective date, next review date, and provenance.

### Semantic decisions

For each business term record: preferred term, definition, synonyms, scope, conflicting usages, owner, and affected content IDs. For each relationship record: subject ID, relationship type, object ID, source evidence, validity period, and reviewer.

Choose a graph when relationships materially improve multi-step retrieval or impact analysis. Choose structured metadata and conventional retrieval when they satisfy the workflow with less maintenance. Document this build-versus-buy decision.

### Freshness and permission rules

- Expired policy: exclude from actionable guidance; identify the conflict and route to the owner.
- Product release: review linked tasks, references, troubleshooting, and evaluation cases.
- Permission change: invalidate affected retrieval caches and test access boundaries.
- Source deletion or replacement: retain a tombstone or redirect; remove obsolete chunks.
- Conflicting authoritative sources: block the affected action until an owner resolves precedence.

Access checks must apply to retrieval, caches, citations, logs, and tool execution. A prompt instruction is not an access control.

### Blueprint completion checklist

Every in-scope source has an owner and authority classification. Required terms are defined. Access boundaries are tested. Expiry behavior is explicit. Retrieval results cite canonical records. Open gaps have an owner, impact, and decision date.

## 2. Continuous AI Content Quality Lab

### Evaluation design

Create a representative set from real tasks, with personal and confidential information removed. Separate tuning cases from a held-out regression set. Include common tasks, exceptions, conflicting sources, missing evidence, stale content, unauthorized users, and malicious instructions embedded in retrieved content.

Do not judge only the final response. Inspect selected sources, tool calls, identity checks, state transitions, approvals, and resulting system state.

### Evaluation case template

| Field | Value to supply |
|---|---|
| Case ID / workflow / risk | Stable ID, business task, severity |
| Actor and permissions | Role, identity status, allowed scope |
| Input and initial state | Request, repository snapshot, tool state |
| Expected sources | Canonical IDs and permitted alternatives |
| Expected behavior | Answer, action, clarification, refusal, or escalation |
| Forbidden behavior | Unauthorized disclosure or state change |
| Success evidence | Source citation, trace, approval, resulting state |
| Reviewer / adjudication | Owner, disputed judgment, resolution |
| Version | Model, prompt, content, retriever, tool and policy versions |

### Scoring rubric

Score each dimension 0–2: 0 fails, 1 partially meets, 2 meets. Attach evidence; do not average away a critical failure.

| Dimension | Meets criterion |
|---|---|
| Grounding | Material claims supported by current authorized sources |
| Task completion | Requested permitted outcome achieved and verified |
| Business rules | Prerequisites, identity checks, limits, and exceptions followed |
| Safety and access | No forbidden disclosure, instruction following, or action |
| Usability | Clear, actionable response appropriate to the audience |
| Robustness | Handles ambiguity, missing context, tool errors, and conflicts |
| Cost and latency | Meets agreed operating budget without reducing required controls |

### Proposed pilot release gates

These are starting criteria to negotiate, not industry standards.

- Zero critical permission, safety, or unauthorized-action failures in the test set.
- All high-risk identity and approval tests pass.
- At least 90% of routine cases meet the agreed task-completion criterion.
- No unresolved regression in critical cases.
- Every material factual claim in the reviewed sample has supporting evidence.
- Cost and latency remain within the agreed service budget.

Report case counts and uncertainty alongside percentages. Passing a finite test set does not prove that production failures cannot occur.

### Operating cadence

| Trigger | Required action |
|---|---|
| Model, prompt, tool, permission or retrieval change | Run impacted cases plus critical regression suite before release |
| Policy or source update | Update expected evidence and test affected tasks |
| Production complaint or incident | Add a reviewed regression case; diagnose source versus system failure |
| Weekly | Review sampled traces, failure clusters, freshness gaps, cost and latency |
| Monthly | Reassess coverage, business outcomes, reviewer consistency and priorities |

### Scorecard template

Record baseline and current values, sample size, time window, and measurement method for: task success; unsupported claims; access failures; escalation accuracy; source freshness; review time; rework; p50/p95 latency; and cost per successfully completed task.

Separate model improvements from content, retrieval, and process changes. Compare equivalent workloads. Track human review cost and remediation effort, not only token spend.

### Failure-to-fix record

Case ID → observed behavior → trace evidence → root cause → owner → proposed fix → impacted tests → results → approval → deployed version → post-release check.

Use automated judges to assist triage. Calibrate them against expert reviews and preserve disagreements. High-risk decisions require accountable human review.

## 3. Agent Operations Documentation

### Agent charter template

- Agent ID, purpose, workflow, business owner, technical owner, content steward.
- Intended users, environments, business outcome, and exclusions.
- Approved knowledge sources and authority precedence.
- Approved tools, read/write scopes, identity model, spend and execution limits.
- Required approvals and forbidden actions.
- Clarification, escalation, stop, and rollback conditions.
- Evaluation coverage, release criteria, known limitations, and review date.
- Log retention, access, privacy controls, and incident contacts.

### Decision and permission matrix

| Situation | Required behavior | Evidence |
|---|---|---|
| Current, permitted informational request | Retrieve and answer with authoritative citation | Source IDs and retrieval trace |
| Conflicting or expired policy | Abstain from action and escalate | Conflict IDs and owner |
| Sensitive read request | Verify identity and authorization before retrieval | Access decision |
| State-changing action | Validate prerequisites; obtain required approval | Approval ID and tool result |
| Retrieved text requests policy bypass | Treat it as untrusted content | Detection and handling record |
| Tool failure or uncertain result | Avoid claiming success; reconcile before retry | Tool status and state check |

### Stop and recovery runbook

1. Trigger: unauthorized disclosure/action, repeated critical failure, uncontrolled spending, or loss of trusted source integrity.
2. Authorized operator disables affected tools or workflow using a control outside the agent's authority.
3. Preserve relevant traces and versions under approved access and retention rules.
4. Identify affected users, records, repositories, and actions.
5. Reconcile external state before retrying any action; prevent duplicates.
6. Restore an approved system version and verified content snapshot.
7. Run incident-specific and critical regression tests.
8. Obtain owner approval before resuming; monitor the affected workflow.

Define concrete stop controls and responsible people before launch. A runbook without an implemented stop mechanism is incomplete.

### Incident record template

Incident ID; detection time; reporter; severity; agent/version; affected workflow; observed versus expected behavior; sources and tools involved; affected data/actions; containment; preserved evidence; root cause; corrective actions and owners; notifications approved by the responsible team; verification; closure approver; follow-up date.

### Change and revalidation record

Change ID; rationale; changed components; impacted sources/tasks/policies; risk assessment; evaluation suite; results and unresolved issues; approval; release and rollback versions; deployment time; post-release review.

### Responsibility model

Business owner approves outcomes and risk tolerance. Content steward owns authority, freshness, and meaning. Technical owner enforces permissions, tools, logging, and recovery. Evaluation lead maintains test evidence. Security/privacy/legal teams review their respective controls. One named release owner consolidates the decision.

## 4. Worked example: employee equipment replacement

Illustrative workflow: an authenticated employee asks to replace a damaged laptop.

**Context Blueprint:** The equipment policy is authoritative; the catalog is the system of record for eligible models; the asset system holds employee assignment. Historical FAQs support explanation but cannot authorize replacement. Policies carry region and effective dates.

**Expected agent behavior:** Verify identity, retrieve applicable policy, check assigned asset and eligibility, explain permitted options, and request required manager approval before opening a replacement order.

**Evaluation cases:** Eligible employee; wrong region; expired policy; employee with no assigned asset; unauthorized request for another employee; missing approval; catalog timeout; duplicate order; malicious instruction in an FAQ.

**Operations:** Order creation uses a scoped tool with duplicate prevention. A missing approval blocks creation. If order status is uncertain, reconcile the existing order before retrying. A policy conflict routes to the equipment-policy owner.

**Example failure:** The answer looks helpful but the agent opens an order without approval. The lab classifies this as a critical business-rule failure; the operating controls block release, preserve the trace, and require a regression case before resumption.

## 5. Thirty-day pilot plan

| Period | Work | Reviewable output |
|---|---|---|
| Days 1–5 | Select workflow, interview owners, establish baseline | Scope, outcome and source register |
| Days 6–10 | Resolve authority, model content, define access and freshness | Context Blueprint and gap backlog |
| Days 11–17 | Build representative cases, rubric and retrieval prototype | Evaluation set and baseline report |
| Days 18–23 | Remediate failures and document operations | Regression results, charter and runbooks |
| Days 24–30 | Review gates, approve bounded pilot, measure outcomes | Release decision and ongoing assurance plan |

Dependencies: access to representative content and traces, accountable policy owners, implemented identity and permission controls, technical integration support, and time for expert review. The plan is a proposed scope, not a delivery guarantee.

## 6. Portfolio and consulting copy

### Enterprise Context Blueprint

I help teams turn fragmented enterprise knowledge into a governed foundation for AI. The blueprint connects authoritative sources, content models, terminology, permissions, ownership, and freshness rules to a defined business workflow. Deliverables include a source register, semantic model, retrieval test plan, and prioritized remediation backlog.

### Continuous AI Content Quality Lab

I design evaluation systems that test whether AI uses the right knowledge and completes work correctly. The lab combines representative tasks, expert rubrics, retrieval checks, action traces, regression testing, and business outcome measures. It provides evidence for release decisions and a repeatable process for improving performance as content and systems change.

### Agent Operations Documentation

I define the documentation and ownership needed to operate enterprise agents. The framework covers purpose, permitted tools and data, approval boundaries, escalation, incident handling, rollback, and revalidation. It connects content governance with engineering and operational controls.

### Suggested portfolio placement

Place the Context Blueprint under Knowledge Management; the continuous lab under AI Content Strategy; and operations documentation under Frameworks, with cross-links between all three. Pair each with the worked example, templates, and an explicit label: “Independent methodology and illustrative demonstration.”

For future case studies use: business problem → intervention → artifacts → validation method → measured results → limitations. Publish actual results only after a real evaluation; retain baseline, case counts, and evidence.
