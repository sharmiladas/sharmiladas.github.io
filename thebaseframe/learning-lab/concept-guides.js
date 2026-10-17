window.CONCEPT_GUIDES = {
  "AI-assisted technical writing": {
    plain: "Think of AI as a drafting and analysis assistant inside a controlled publishing process—not as the author of record.",
    why: "This keeps speed gains from weakening accountability: people still decide scope, verify claims, and approve release.",
    use: "Choose one bounded task, provide approved evidence, define what the model must not infer, and review the output against that evidence."
  },
  "Large language model (LLM)": {
    plain: "An LLM is a prediction system for language. It produces likely text, not a database lookup or a product test.",
    why: "Knowing what the model actually does explains why fluent answers can still contain invented details.",
    use: "Use it for pattern-rich work such as outlining, summarizing, and transforming; use sources and checks for factual claims."
  },
  "Prompt": {
    plain: "A prompt is a work order: it tells the model the job, boundaries, inputs, and expected output.",
    why: "A precise work order makes results easier to inspect and compare, but it cannot repair missing or unreliable evidence.",
    use: "State the reader, task, allowed sources, constraints, output structure, and required treatment of unknowns."
  },
  "Context and tokens": {
    plain: "Context is the model's temporary working packet; tokens are the pieces used to measure and process that packet.",
    why: "The model can only use what fits in the packet, and irrelevant material can compete with the facts that matter.",
    use: "Assemble the smallest complete evidence packet, remove obsolete versions, and keep critical constraints close to the task."
  },
  "Retrieval-augmented generation (RAG)": {
    plain: "RAG finds relevant external material first and then asks a model to answer from that material.",
    why: "Separating retrieval from generation makes failures diagnosable: the system may find the wrong evidence or misuse the right evidence.",
    use: "Filter for permission, status, and version; retrieve evidence; assemble context; generate; then verify claim support."
  },
  "Agent and workflow": {
    plain: "A workflow follows a known sequence; an agent can choose among permitted actions while pursuing a goal.",
    why: "More choice creates more ways to help—and more ways to take an unsafe or incorrect action.",
    use: "Start with a fixed workflow, grant the minimum tools and permissions, and add agent decisions only where they create measurable value."
  },
  "Audience": {
    plain: "Audience means what the reader already knows, can access, and needs to accomplish—not a decorative persona.",
    why: "These facts determine prerequisites, vocabulary, examples, and how much explanation a task requires.",
    use: "Record role, prior knowledge, environment, permissions, immediate goal, and likely failure points before outlining."
  },
  "Task success": {
    plain: "Task success is the observable state that proves the reader reached the intended outcome.",
    why: "Without a visible result, a document can look complete while leaving the reader unsure whether anything worked.",
    use: "Define the starting state, action, expected output, verification method, and safe recovery path."
  },
  "Tutorial": {
    plain: "A tutorial teaches through a guided experience, usually by choosing one clear path through the subject.",
    why: "Its purpose is learning, so it may simplify choices that full reference documentation must expose.",
    use: "Select a safe example, explain unfamiliar ideas as they appear, show results, and link to deeper reference."
  },
  "Reference": {
    plain: "Reference is an accurate, scannable description of a system that readers consult while working.",
    why: "Readers need completeness and precision here; a story-like flow can hide constraints they are trying to find.",
    use: "Organize by the system's structure, use consistent fields, expose constraints, and keep terminology exact."
  },
  "Provenance": {
    plain: "Provenance is the chain connecting a claim to its source, version, and decision history.",
    why: "It lets reviewers distinguish verified behavior from assumptions and resolve conflicts without guessing.",
    use: "Attach consequential claims to authoritative evidence and record scope, date, owner, and unresolved conflicts."
  },
  "Technical review": {
    plain: "Technical review checks whether the documented behavior is correct, complete, and valid in the stated conditions.",
    why: "Clear wording cannot compensate for a wrong endpoint, missing prerequisite, or unsafe recovery step.",
    use: "Route claims to a qualified reviewer, test examples where possible, record corrections, and block unresolved critical errors."
  },
  "Content model": {
    plain: "A content model defines the meaningful parts of each content type and the rules those parts follow.",
    why: "Structure makes required information visible and testable instead of burying it in free-form prose.",
    use: "Model real examples, require only fields that support decisions, and validate the model against common and edge cases."
  },
  "Component reuse": {
    plain: "Component reuse means maintaining one owned knowledge unit and presenting it in multiple valid contexts.",
    why: "A single maintained source reduces contradictory copies, but only when its scope fits every place it appears.",
    use: "Give the unit a stable ID, define applicability, track dependents, and review each context when the source changes."
  },
  "Taxonomy": {
    plain: "A taxonomy is an agreed set of categories and relationships used to classify content consistently.",
    why: "Shared categories improve navigation, filtering, reporting, and retrieval across teams.",
    use: "Start from user and operational decisions, define each term, govern synonyms, and test classification with real content."
  },
  "Metadata": {
    plain: "Metadata is decision-making context attached to content, such as version, owner, status, audience, or access level.",
    why: "It helps systems decide not just what is relevant, but what is current, permitted, and appropriate.",
    use: "Define controlled values, validation rules, ownership, and how metadata survives chunking, export, and reuse."
  },
  "Applicability": {
    plain: "Applicability states the exact product, version, environment, role, or condition in which guidance is valid.",
    why: "Correct advice used in the wrong situation becomes incorrect advice.",
    use: "Record applicability explicitly, preserve it through reuse and retrieval, and make unsupported combinations ineligible."
  },
  "Dependency": {
    plain: "A dependency records that one knowledge asset may need review when another thing changes.",
    why: "It turns change impact from memory and guesswork into an inspectable review list.",
    use: "Link capabilities, fields, examples, topics, and evaluations; assign owners; and refresh links as systems evolve."
  },
  "Source contract": {
    plain: "A source contract is the approved evidence boundary and rule set for a drafting task.",
    why: "It prevents a model or writer from silently blending versions, assumptions, and unsupported product behavior.",
    use: "Name allowed sources, version scope, fixed facts, unknowns, prohibited inference, and the required review path."
  },
  "Grounding": {
    plain: "Grounding means making a claim depend on evidence that actually supports it in the relevant context.",
    why: "A source link looks trustworthy even when the source is unrelated, outdated, or too weak for the claim.",
    use: "Check support claim by claim, confirm applicability, and keep unknowns visible instead of filling them with plausible text."
  },
  "Semantic drift": {
    plain: "Semantic drift is an unintended change in meaning introduced while wording, format, or audience changes.",
    why: "Small edits can widen scope, remove conditions, or turn uncertainty into a guarantee.",
    use: "List meaning invariants before editing, compare source and output by claim, and review changed conditions explicitly."
  },
  "Immutable fact": {
    plain: "An immutable fact is a sourced detail that must survive every approved adaptation unchanged in meaning.",
    why: "Naming these facts gives editors and automation a concrete boundary around safe transformation.",
    use: "Mark exact identifiers, requiredness, values, warnings, scope, and uncertainty; then test every output against the list."
  },
  "Acceptance criterion": {
    plain: "An acceptance criterion is a testable condition that separates an acceptable output from a rejected one.",
    why: "It replaces impressions such as “looks good” with evidence that variants and tools can be compared fairly.",
    use: "Define the condition before testing, include blocking failures, and record the evidence used to score it."
  },
  "Build versus buy": {
    plain: "Build versus buy compares the full operating model, not merely custom code against a subscription price.",
    why: "Integration, control, privacy, review effort, vendor change, and maintenance often outweigh the demo experience.",
    use: "Compare required capabilities, constraints, total effort, exit options, and performance on the same evaluation set."
  },
  "Quickstart": {
    plain: "A quickstart is the shortest safe route from a known starting point to one useful, verified result.",
    why: "It gives new users momentum while revealing the prerequisites and core product loop.",
    use: "Choose one path, minimize options, mark placeholders, show expected output, test with a fresh reader, and link onward."
  },
  "Expected result": {
    plain: "An expected result tells the reader what they should observe after an action and how to interpret it.",
    why: "Without it, readers cannot distinguish success, a delayed state, and a silent failure.",
    use: "Show representative output, name meaningful fields or states, and explain the next action for each important outcome."
  },
  "API contract": {
    plain: "An API contract defines the requests, responses, constraints, and meanings an interface promises.",
    why: "It is the factual spine of reference content and enables repeatable generation and validation.",
    use: "Treat the authoritative contract as source, preserve requiredness and enums, and resolve gaps instead of inferring behavior."
  },
  "Schema validation": {
    plain: "Schema validation checks whether structured data matches declared types, required fields, and constraints.",
    why: "It catches repeatable structural errors quickly, leaving reviewers more time for meaning and usability.",
    use: "Validate contracts and examples in automation, report exact failures, and keep semantic review as a separate gate."
  },
  "Troubleshooting": {
    plain: "Troubleshooting is a decision path from an observed symptom to evidence, likely cause, safe action, and verification.",
    why: "Starting from evidence prevents a plausible fix from being applied to the wrong cause.",
    use: "Name the symptom, collect discriminating signals, branch by cause, give reversible actions, verify recovery, and escalate safely."
  },
  "Release note": {
    plain: "A release note explains a verified change in terms of user impact and required action.",
    why: "Users need to decide whether to adopt, test, migrate, or ignore a change—not read an internal activity log.",
    use: "State what changed, affected audience and versions, action required, effective date, and links to detailed guidance."
  },
  "Chunk": {
    plain: "A chunk is the unit of content a retrieval system can select and send into a downstream task.",
    why: "Chunk boundaries determine whether a retrieved passage carries enough context to be useful and safe.",
    use: "Keep related instructions and warnings together, retain source identity and metadata, and test several query types."
  },
  "RAG": {
    plain: "RAG is a pipeline that retrieves external evidence and supplies selected context to a generative model.",
    why: "It can improve currency and traceability, but it adds retrieval, eligibility, and context-assembly failure modes.",
    use: "Evaluate filtering, retrieval, context quality, claim support, citations, and refusal behavior as separate stages."
  },
  "Evaluation set": {
    plain: "An evaluation set is a versioned collection of representative cases with expected evidence and scoring rules.",
    why: "It turns quality claims into repeatable tests and preserves important failures as regression cases.",
    use: "Include normal, boundary, stale-version, insufficient-evidence, and access-sensitive cases; assign expected behavior to each."
  },
  "Entailment": {
    plain: "Entailment asks whether the evidence is strong enough to support the exact claim being made.",
    why: "Topical similarity is not proof: a passage can mention the subject without supporting the answer.",
    use: "Break the answer into claims, identify supporting passages, check scope and certainty, and reject unsupported claims."
  },
  "Quality gate": {
    plain: "A quality gate is a named checkpoint with a criterion, evidence, owner, and consequence for failure.",
    why: "It prevents serious defects from moving forward merely because the rest of the work scores well.",
    use: "Place gates near the work they check, automate deterministic rules, and define which failures block or escalate."
  },
  "Risk-based review": {
    plain: "Risk-based review applies more scrutiny where an error would cause greater harm or be harder to detect.",
    why: "Review capacity is limited, and not every wording change deserves the same evidence or approver.",
    use: "Rate consequence and detectability, map risk levels to reviewers and tests, and revisit the rating when scope changes."
  },
  "Docs-as-code": {
    plain: "Docs-as-code manages documentation through versioned source, reviewable changes, automated checks, and repeatable builds.",
    why: "It makes documentation changes traceable and lets teams test them before release.",
    use: "Keep source in version control, make focused changes, review diffs and rendered output, run checks, and release reproducibly."
  },
  "Release candidate": {
    plain: "A release candidate is the exact documentation version proposed for publication after required checks.",
    why: "Reviewing one build and publishing another breaks the evidence chain.",
    use: "Freeze the candidate, record its source revision and test results, obtain approvals, and publish that same artifact."
  },
  "Lifecycle": {
    plain: "A content lifecycle defines how knowledge is created, approved, maintained, superseded, and retired.",
    why: "Accurate content decays when products, owners, policies, and user tasks change.",
    use: "Assign states and owners, connect change triggers to reviews, set retirement rules, and preserve history only when it remains useful."
  },
  "Feedback loop": {
    plain: "A feedback loop converts observed user or system failures into owned changes at the correct layer.",
    why: "Collecting comments without routing, evidence, and closure creates a backlog rather than learning.",
    use: "Capture the signal, classify its cause, assign an owner, correct the source or process, verify, and report closure."
  },
  "Capstone": {
    plain: "A capstone is an integrated project that demonstrates both the artifact and the reasoning used to create it.",
    why: "A polished final page alone cannot prove source control, testing, review, or responsible use of AI.",
    use: "Package the brief, evidence, model, drafts, corrections, evaluation, release decision, and maintenance plan."
  },
  "Verification limit": {
    plain: "A verification limit states what the available evidence proves—and what it does not.",
    why: "Honest boundaries keep simulations, small tests, and portfolio exercises from becoming inflated production claims.",
    use: "Name the environment, sample, evidence, checks, unresolved conditions, and additional validation needed."
  },
  "Entity": {
    plain: "An entity is a distinct thing the system must identify consistently, even when its name or description changes.",
    why: "Stable identity prevents records with similar labels from being merged and lets relationships remain dependable.",
    use: "Choose domain-relevant entity types, assign durable IDs, and define rules for resolving duplicates."
  },
  "Relationship": {
    plain: "A relationship is a named, directional fact connecting two identified entities.",
    why: "The relationship type carries the meaning needed for traversal, impact analysis, and explanation.",
    use: "Name the relation precisely, define source and target types, record direction, and attach evidence."
  },
  "Property and provenance": {
    plain: "Properties describe a graph record; provenance explains where an assertion came from and how it was approved.",
    why: "Together they provide context and trust signals without confusing an attribute with proof.",
    use: "Store only decision-relevant properties and link important assertions to supporting passages, reviewers, and status."
  },
  "Traversal": {
    plain: "Traversal follows an allowed sequence of relationships from a starting entity to connected answers.",
    why: "It answers multi-step questions explicitly instead of asking a model to reconstruct connections from prose.",
    use: "Start with a business question, specify the path and filters, run it, and interpret empty results cautiously."
  },
  "Change-impact analysis": {
    plain: "Change-impact analysis finds the people, content, tests, and systems that may be affected by a change.",
    why: "It reduces missed updates and gives teams a defensible review scope.",
    use: "Begin at the changed entity, follow dependency relationships, filter by applicability, and send the candidate set to owners."
  },
  "Taxonomy and metadata": {
    plain: "Taxonomy supplies consistent categories; metadata records the contextual values assigned to an item.",
    why: "The vocabulary makes classification comparable, while metadata makes each record filterable and governable.",
    use: "Define controlled terms first, apply required fields consistently, and validate values during ingestion."
  },
  "Ontology and schema": {
    plain: "A schema defines valid shapes; an ontology defines the domain meanings and rules those shapes express.",
    why: "Separating syntax from meaning prevents technically valid records from encoding ambiguous domain logic.",
    use: "Start with entity and relationship constraints, document meanings, and add richer semantics only when a use case requires them."
  },
  "Vector search and graph retrieval": {
    plain: "Vector search finds semantically similar content; graph retrieval follows relationships that the system explicitly knows.",
    why: "Similarity is useful for discovery, while graph paths are useful for dependencies, ownership, and other precise connections.",
    use: "Use similarity to find candidates, graph and metadata rules to establish context, and evidence checks before generation."
  },
  "Stable identity": {
    plain: "Stable identity is a durable identifier that survives renaming, movement, and presentation changes.",
    why: "Without it, imports create duplicates and relationships silently point to the wrong thing.",
    use: "Define an ID policy, preserve source identifiers where appropriate, and maintain explicit merge and split records."
  },
  "Relationship schema": {
    plain: "A relationship schema specifies which entity types may connect, in which direction, and with what evidence or properties.",
    why: "It stops a graph from becoming a collection of vague links with inconsistent meaning.",
    use: "For each relation, define source type, target type, direction, inverse, required evidence, cardinality, and examples."
  },
  "Candidate extraction": {
    plain: "Candidate extraction proposes possible entities, relationships, or properties from source records before approval.",
    why: "Automation can speed discovery, but extraction uncertainty must remain visible until a reviewer validates meaning.",
    use: "Preserve source spans, label confidence and status, resolve identities, and route ambiguous candidates to review."
  },
  "Review and validation": {
    plain: "Review checks domain meaning and evidence; validation checks explicit structural and rule-based constraints.",
    why: "A record can pass schema validation yet still assert the wrong real-world relationship.",
    use: "Automate type and constraint checks, have domain owners inspect consequential assertions, and keep approval state queryable."
  },
  "Graph query": {
    plain: "A graph query selects entities and follows specified relationships and filters to answer a connected-data question.",
    why: "The query makes the reasoning path inspectable and repeatable.",
    use: "Translate the business question into a start point, relationship path, filters, returned evidence, and expected edge cases."
  },
  "Graph evaluation and lifecycle": {
    plain: "Graph evaluation measures whether records and paths answer real questions correctly over time; lifecycle work keeps them current.",
    why: "A graph that was accurate at launch can degrade as sources, identifiers, permissions, and ownership change.",
    use: "Maintain test queries, coverage and freshness checks, ownership, change triggers, review queues, and retirement rules."
  }
};

window.LESSON_CONCEPT_LINKS = {
  "tw-0": "The model predicts language from context. A prompt frames the job, RAG can supply outside evidence, and a workflow or agent coordinates the steps. AI-assisted technical writing is the governed practice that contains all of them.",
  "tw-1": "Audience defines the reader's starting conditions; task success defines the observable destination. Good documentation builds the shortest safe bridge between the two.",
  "tw-2": "Tutorials teach through a guided path; reference supports precise lookup. Choose the form from the reader's need, then connect the forms rather than blending them into one crowded page.",
  "tw-3": "Provenance establishes what supports a claim. Technical review tests whether the claim, constraints, and example are correct. Clarity editing comes after that evidence boundary is visible.",
  "tw-4": "A content model defines the shape and rules of a knowledge unit. Component reuse lets an approved unit appear in multiple contexts while retaining identity, ownership, and applicability.",
  "tw-5": "Taxonomy controls the vocabulary used to classify content. Metadata applies those and other values to each item so people and systems can filter for relevance and eligibility.",
  "tw-6": "Applicability tells you where guidance is valid. Dependencies tell you what else may need review when that guidance or its source changes.",
  "tw-7": "The source contract defines the evidence boundary; grounding checks that each important claim stays inside it. A detailed prompt supports this process but does not perform the verification.",
  "tw-8": "Immutable facts define what meaning must survive. Semantic drift is the failure mode to look for when adapting wording, format, channel, or audience.",
  "tw-9": "Acceptance criteria define what good means before the test. Build-versus-buy analysis then compares options against the same tasks, evidence, risks, and operating costs.",
  "tw-10": "The quickstart is the narrow journey; expected results are the checkpoints that tell the reader whether each important step worked.",
  "tw-11": "The API contract supplies the interface facts. Schema validation catches structural mismatches between that contract, examples, and generated reference content.",
  "tw-12": "Troubleshooting helps users recover from observed problems. Release notes help them understand verified changes. Both depend on precise scope, evidence, and action.",
  "tw-13": "A chunk is the retrievable unit. RAG is the larger pipeline that filters, retrieves, assembles, and uses those units to support a response.",
  "tw-14": "The evaluation set defines representative cases and expected behavior. Entailment is one core judgment inside each case: does the evidence support the exact claim?",
  "tw-15": "Quality gates decide whether work may progress. Risk-based review determines how strong those gates and reviewers should be for different consequences.",
  "tw-16": "Docs-as-code provides the controlled change process. A release candidate is the exact built version that passes through that process and is proposed for publication.",
  "tw-17": "Lifecycle rules decide when content changes state. Feedback loops supply evidence that triggers the right correction, owner, and follow-through.",
  "tw-18": "The capstone integrates the course artifacts and decisions. Its verification limit states honestly what that evidence demonstrates and what remains untested.",
  "kg-1": "Entities are the things, relationships connect them, properties add context, and provenance explains why an assertion should be trusted. Together they form the minimum useful graph model.",
  "kg-2": "Traversal follows modeled connections to answer a question. Change-impact analysis is a practical traversal that starts with a change and finds the assets and owners that may be affected.",
  "kg-3": "Taxonomy and metadata classify and contextualize; schema and ontology define shape and meaning; vector search finds similarity; a graph records explicit connections. Combine only the layers needed by the question.",
  "kg-4": "Stable identity makes each thing dependable over time. A relationship schema controls how those things may connect and what evidence each connection requires.",
  "kg-5": "Extraction creates candidates from sources. Validation checks rules, and review decides whether the proposed meaning and evidence are trustworthy enough to approve.",
  "kg-6": "Queries test whether the graph answers useful connected questions. Evaluation and lifecycle controls keep those answers complete, current, authorized, and explainable."
};
