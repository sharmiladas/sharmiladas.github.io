# Enterprise Knowledge Strategy

Sharmila (Das) Rammohan

## Problem statement

Knowledge about the same task is maintained across teams, repositories, and channels without consistent ownership or rules for identifying the approved answer. Users can encounter conflicting instructions, outdated guidance, or information that does not apply to their circumstances. They must then reconcile answers themselves or ask a specialist for help.

Teams also lack a reliable way to propagate corrections across reused content and translations, resolve source conflicts, and measure whether guidance helps people complete the task. This creates repeated investigation and maintenance work. AI-assisted search and drafting can carry those unresolved conflicts into additional answers unless authority and applicability are preserved.

The organization needs a shared approach to source authority, maintenance, and delivery that domain teams can sustain. The first priority is to test that approach on a task with documented failures or repeated requests for help.

## Recommendation: pilot a federated knowledge function

Create a knowledge function that sets shared standards while domain teams remain responsible for accuracy. Technology partners support publishing and retrieval. Pilot the model on one task that users repeatedly struggle to complete. Expand only after the pilot demonstrates that people can complete the task and the organization can maintain the guidance.

The pilot should establish:

1. **Trustworthy answers.** Define source authority, content ownership, reusable structure, and review rules.
2. **Usable delivery.** Connect approved information to search, portals, service responses, learning, and AI-assisted experiences.
3. **Accountable improvement.** Use task evidence, operating measures, and explicit decision rights to direct investment.

Approve a 90-day pilot with an executive sponsor, a domain owner, named stewards, and committed technology and measurement support. Use the pilot results to decide whether further investment is justified.

## Priority 1: make the applicable answer trustworthy

### Establish authority before optimizing presentation

For the pilot journey, identify the governing sources and name the person who resolves conflicting interpretations. Record audience, effective date, location, version, and other conditions that change the answer. Include relevant material outside the main platform.

An unresolved source conflict is a decision for the domain authority. Rewriting the competing explanations does not settle which instruction users should follow. Keep the conflict visible until it is resolved, restricted, or explicitly accepted by the responsible owner.

### Reuse information that teams can maintain

Use a small set of information types appropriate to the task: policy, explanation, procedure, troubleshooting guidance, FAQ, response template, or specialist work instruction. Procedures should include prerequisites, actions, exceptions, and verification. Keep a stable identifier, source relationship, owner, applicability, and review state attached to each item.

Maintain shared information once where feasible. Keep separately approved versions when policy, jurisdiction, audience, language, or product version changes the answer. Each variant needs an owner and a relationship to its source so updates reach the affected publications.

Test the vocabulary against user language. A person should be able to recognize the applicable result without knowing the organization’s reporting structure. For machine retrieval, preserve warnings and exceptions with the instruction they qualify.

### Make maintenance part of the workflow

Assign publication and correction rights according to the action and its consequence. A steward may correct a title within an approved standard; changing policy interpretation requires domain approval. Review content when its underlying source changes, not only when a calendar reminder arrives.

Track verification separately from modification. A recent wording edit does not show that a procedure has been tested against the current process.

**Pilot test:** Ask a reviewer to identify the approved source and responsible owner for each priority item, then submit a correction to verify that it reaches resolution.

## Priority 2: make knowledge usable where work happens

### Design around the task and its context

Choose a task with recorded failures or repeated requests for help. Map the user’s question, required information, delivery surface, next action, and escalation route. Distinguish employee-facing explanations from restricted specialist instructions even when they concern the same process.

Place approved guidance in the portal, service response, or other channel used to complete the task. A portal, contextual prompt, service response, and learning module can share source information while adapting presentation. Define which content can change by channel and which meaning must remain consistent.

For localization, prioritize by demand, task importance, user impact, and review capacity. Track source changes that invalidate translations. Regional policy differences require approved variants rather than translation alone.

### Let the knowledge model determine platform requirements

Evaluate authoring, versioning, permissions, indexing, localization, integrations, and analytics against representative tasks. A shared model can span repositories. Consolidation is justified when it improves delivery or maintenance enough to cover migration and operating costs.

If migration is necessary, decide what to retain, revise, merge, archive, or retire. Test access, redirects, attachments, and task completion. Define how source changes and post-cutover edits will be reconciled before switching systems.

### Add AI assistance through a controlled workflow

Test AI assistance for identifying missing guidance or preparing first drafts, and measure how much correction the suggestions require. Require evidence for the gap, preserve supporting sources, and keep generated material in draft state until the designated reviewers finalize it.

| Control | Required behavior |
| --- | --- |
| Source selection | Enforce permissions and retain authority, version, and applicability |
| Draft generation | Reference supporting material and identify unresolved claims |
| Quality checks | Flag unsupported assertions, sensitive information, structural gaps, and tone issues |
| Review routing | Send the draft to the steward and domain reviewer responsible for its subject |
| Publication | Record approval and source version; apply normal release requirements |
| Monitoring | Route failures to owners and provide a restriction or rollback path |

Evaluate retrieval and generated answers separately. A well-written answer based on an inapplicable source still fails the task. When the evidence cannot establish applicability, provide a useful handoff rather than infer an individual’s eligibility or circumstances.

**Pilot test:** Observe users attempting the task. Check that they select the applicable guidance and can get help when it does not resolve their situation.

## Priority 3: make improvement and expansion accountable

### Use the scorecard to decide what changes next

Establish the baseline before changing the experience. Define denominators, observation windows, audience segments, and limitations for every measure. Use activity trends to diagnose behavior; assess value through task outcomes and quality evidence.

| Outcome or operating concern | Evidence | Decision supported |
| --- | --- | --- |
| Users find applicable guidance | Failed queries, reformulation, correct result selection | Change labels, indexing, navigation, or coverage |
| Users understand and complete the task | Task observation, verified completion, repeat contacts | Correct steps, explanation, presentation, or handoff |
| Guidance remains trustworthy | Source conflicts, owner coverage, overdue verification | Resolve authority, reassign, restrict, or retire |
| Maintenance effort is proportionate | Review time, maintained reuse, translation rework | Simplify workflow or change automation |
| Contributors can sustain the model | Contribution patterns and steward feedback | Improve tools, coaching, capacity, or responsibilities |
| AI assistance supports the task | Supported claims, applicability, access failures, latency | Correct sources, retrieval controls, or generation workflow |

A click alone does not establish search success. A help visit without a ticket can indicate resolution or abandonment. Faster case closure may conceal an unfinished task. Interpret measures together and account for concurrent product, policy, staffing, and service changes.

Set outcome targets after collecting the baseline. Keep publication counts as diagnostic measures; quotas can encourage unnecessary content.

### Give cross-team decisions a defined route

Use a working queue for routine corrections and a cross-domain forum for source conflicts, standards exceptions, readiness, and investment choices. Each escalation should state the options, user impact, accountable decision-maker, and required decision date.

| Role | Primary accountability |
| --- | --- |
| Executive sponsor | Resolve priority and adoption conflicts beyond the knowledge lead’s authority |
| Knowledge lead | Own shared standards, portfolio priorities, scorecard, and decision process |
| Domain owner | Confirm meaning, authority, applicability, and acceptable domain risk |
| Content steward | Maintain guidance, triage feedback, and coordinate corrections and reviews |
| Editor or content designer | Improve clarity and structure while preserving approved meaning |
| Technology partner | Operate permissions, publishing, indexing, integrations, and system reliability |
| Research or analytics partner | Define measures and assess user and operating evidence |

Negotiate adoption with practical examples, templates, and a documented exception process. Diagnose whether resistance reflects tooling, capacity, authority, or a legitimate domain difference before escalating it.

### Expand only when ownership and delivery are sustainable

Onboard new domains through the same authority, model, access, and task tests. Record justified differences as extensions to the shared model. Require committed stewards and ongoing maintenance before migration.

Use the backlog to identify the staffing constraint. Drafts waiting for restructuring may justify an editor; unassigned corrections require steward capacity. Estimate the recurring workload before adding roles, including architecture or analytics support.

**Pilot test:** Trace issues from the health review to verified corrections. Before adding a domain, confirm its owners can maintain the shared fields and document any necessary exceptions.

## Strategic choices and boundaries

| Choice | Rationale | Tradeoff to manage |
| --- | --- | --- |
| Federated ownership with shared standards | Keep subject expertise and accuracy decisions with domains | Adoption requires negotiation, sponsor support, and steward capacity |
| A journey-based pilot before expansion | Test user value and maintenance together | Initial coverage is limited; urgent gaps elsewhere still need triage |
| Reusable sources with governed variants | Reduce repeated maintenance without erasing legitimate differences | Variant relationships and change notifications require discipline |
| Capability-based platform investment | Buy or build against tested requirements | Some repository friction remains until investment is justified |
| AI drafts with accountable review | Reduce drafting effort while preserving authority | Review capacity and false-positive checks can limit throughput |
| Task-outcome measurement | Direct effort toward completed work and usable guidance | Outcomes are harder to measure and attribution may remain uncertain |

The initial scope covers one journey, its supporting sources, necessary delivery surfaces, and the operating controls required to maintain them. Enterprise-wide replatforming and autonomous publication are outside the pilot. Record proposed scope additions with their benefit, cost, dependencies, and accountable owner.

## Execution: use the first 90 days to make an expansion decision

| Period | Work | Exit evidence |
| --- | --- | --- |
| Days 1–30 | Select the journey, confirm source authority, inventory content, baseline the task, and agree decision rights | Pilot charter, named owners, source register, measures, and resource commitments |
| Days 31–60 | Populate the model, enable stewards, connect delivery surfaces, and test correction and access workflows | Representative task results, working permissions, review evidence, and an assigned issue queue |
| Days 61–90 | Compare results with the baseline, resolve material failures, and assess maintenance and capacity | Expansion recommendation with benefits, remaining risks, costs, and accountable owners |

The knowledge lead maintains an integrated plan connecting content, domain review, technology, localization, and measurement dependencies. Adjust the schedule for approval and engineering dependencies. Advance when the exit evidence is available.

Expand when the pilot shows usable guidance, sustainable maintenance, acceptable risk, and a credible plan for the next domain. Revise when the task remains valid but the model or delivery needs repair. Stop when the intervention fails to address the chosen problem or its cost cannot be justified.

## Risks that could change the recommendation

| Risk | Response | Accountable role |
| --- | --- | --- |
| No agreement on the authoritative source | Resolve interpretation before publication; restrict disputed guidance where appropriate | Domain owner |
| Stewards lack time to maintain content | Reduce scope or commit capacity before launch | Domain owner with sponsor |
| Platform delivery is delayed | Use approved existing surfaces for the pilot where workable; retain required access controls | Technology partner and knowledge lead |
| Metrics reward closure or visits without completion | Combine task evidence, repeat contacts, and user feedback | Analytics partner |
| Reuse removes a necessary exception | Test variants and preserve applicability with shared components | Domain owner and steward |
| AI produces unsupported or restricted material | Keep drafts under review, enforce access, and test failures before release | Technology partner and domain reviewer |

## Illustration: resolve conflicting onboarding instructions

In a hypothetical organization, a portal, team checklist, and service response give different instructions for the same onboarding step. The pilot establishes the approved source and applicable audience, then gives a steward responsibility for its maintenance.

The domain owner confirms the requirements. The steward structures prerequisites, actions, exceptions, and verification; the delivery team connects the portal and response template to the maintained source. Restricted specialist instructions stay in the authorized workflow.

Task tests establish whether employees can finish the step. Repeat contacts and observed failures guide corrections. A second onboarding task enters the roadmap only after the pilot demonstrates that updates propagate and accountable owners can sustain the work.

## Decision requested

Approve the pilot’s sponsor, domain owner, steward capacity, and technology and measurement commitments. Require a baseline and documented source authority before delivery begins. At the 90-day review, bring a costed recommendation for the next phase, supported by task results and the remaining maintenance and risk issues.

