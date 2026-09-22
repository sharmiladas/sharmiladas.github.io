const cases = {
  fusion: {
    type: 'Content platform',
    title: 'A content program spanning 12 workstreams',
    problem: 'Legacy technical content was organized around pages and XML structures. A new content platform would inherit the same maintenance burden unless the content model and transformation workflow changed too. The work crossed 12 teams and delivery streams with different dependencies.',
    mandate: 'Lead the cross-functional transformation as one operating program—connecting the platform decision, content model, migration method, governance, adoption, dependencies, and release readiness.',
    scope: 'Twelve connected workstreams spanning Content, Engineering, Product, governance, and adoption.',
    solution: [
      'Defined reusable types such as concepts, procedures, tutorials, and troubleshooting, then mapped legacy content into a target schema with taxonomy, metadata, ownership, and version rules.',
      'Used assisted conversion for repeatable patterns, validated structured output against the schema, and kept technical truth and unusual cases with subject experts.',
      'Coordinated owners, dependencies, decision points, and release readiness across the workstreams so platform, content, governance, and adoption decisions moved together.'
    ],
    results: [
      'In a representative transformation task, editing time fell from roughly eight hours to four.',
      'The team had a repeatable method for converting legacy content into structured, reusable components.'
    ],
    impact: 'The program established a stronger foundation for publishing and search, with governed knowledge that could support future retrieval experiences. That future use was a design goal, not a claim that a production AI system shipped as part of this work.'
  },
  advisor: {
    type: 'Quality automation',
    title: 'Editorial guidance that teams could test',
    problem: 'Developer documentation operated across a very large corpus, so editors could not manually find every quality issue. The challenge was to apply repeatable standards at scale while preserving expert attention for technical accuracy, ambiguity, and unusual cases.',
    mandate: 'Set the quality strategy, establish the boundary between automation and expert judgment, and align Editorial and Engineering around measurable usefulness rather than rule volume.',
    scope: 'More than 170 million words evaluated monthly, with performance tracked through quality, review time, suggestion accuracy, and false positives.',
    solution: [
      'Worked with Engineering to translate terminology, style, clarity, accessibility, SEO, and inclusivity standards into rules, acceptance criteria, quality signals, and documented exceptions.',
      'Separated predictable checks from technical or judgment-heavy decisions, which stayed with writers, editors, and subject experts.',
      'Used quality scores, review time, suggestion accuracy, and false-positive rates to evaluate whether the system was useful in practice.'
    ],
    results: [
      'The quality system assessed more than 170 million words per month.',
      'Related quality scores rose from roughly 65% to 85%, while a representative document review fell from about four hours to one.',
      'Program reporting showed 40% better suggestion accuracy and 60% fewer false positives.'
    ],
    impact: 'Predictable issues moved earlier in the workflow, while reviewers concentrated on technical truth and consequential ambiguity. This completed work also provides the operating pattern for a future 12-point AI evaluation layer: deterministic rules for objective requirements, AI evaluators for judgment-heavy dimensions, source verification for claims, and human review routed by risk.'
  },
  cms: {
    type: 'Platform decision',
    title: 'A build-versus-buy decision for a new CMS',
    problem: 'An outdated system could not support the intended marketing and technical-content workflows. Engineering favored building a new platform, while the wider program needed a faster path to value and a clear account of long-term ownership cost.',
    mandate: 'Turn a contested technical direction into an evidence-based executive decision, then convert the chosen path into a funded and executable program.',
    scope: 'Product, Engineering, Content, marketing technology, leadership, and 12 downstream workstreams.',
    solution: [
      'Aligned Product, Engineering, Content, and marketing technology on requirements for authoring, structure, integration, scale, and governance.',
      'Compared internal build and vendor options across engineering effort, time to value, extensibility, maintenance, risk, and opportunity cost.',
      'Presented the tradeoffs to leaders, recommended the vendor path, and translated the decision into a phased roadmap with owners and dependencies.'
    ],
    results: [
      'Leadership supported and funded the recommended path.',
      'The decision became an executable roadmap across 12 connected workstreams rather than an open-ended platform debate.'
    ],
    impact: 'The vendor choice reserved engineering capacity for differentiated capabilities and gave the program a more direct path toward structured content and reuse. The source story does not establish a numeric launch-time saving.'
  },
  globalMarketing: {
    type: 'Global marketing content',
    title: 'Reusable messaging across 12 languages',
    problem: 'Marketing, Sales, and Support created content independently across customer touchpoints. Individual assets were difficult to connect to a customer, journey stage, product, or purpose, even though the Help Center served more than 1.5 million customers and 2 million weekly sessions.',
    mandate: 'Create a shared customer-journey and content foundation across functions and regions while preserving Creative authority over expression and final execution.',
    scope: 'Marketing, Sales, Support, Creative, and Localization across 12 languages; more than 1.5 million customers and 2 million weekly sessions.',
    solution: [
      'Led a content inventory and audit, then mapped the journey across awareness, engagement, research, evaluation, purchase, onboarding, and support.',
      'Mapped content types to those stages and built the information architecture, taxonomy, metadata model, content model, and content architecture. Metadata captured product, audience, journey stage, content type, and topic.',
      'Moved toward a headless CMS model for structured reuse and established governance through ownership, standards, a steering committee, and measurement.'
    ],
    results: [
      'Publishing improved 50% and content reuse increased 35%.',
      'Time to resolution improved 40%, support cases fell 15%, vendor costs fell 27%, and CSAT improved 10%.',
      'Weekly sessions grew 17% across a customer-facing experience serving more than 1.5 million customers and 2 million weekly sessions.'
    ],
    impact: 'The program shifted the organization from managing isolated pages to treating content as a reusable business asset organized around customer needs. The same foundation can support AI retrieval by extending the model with approved claims, message hierarchy, brand voice, campaign, channel, market, policy, risk, authority, freshness, and effective dates.'
  },
  rag: {
    type: 'Knowledge architecture',
    title: 'Structured developer knowledge for retrieval',
    problem: 'The challenge was larger than moving developer documentation into another CMS. The same governed knowledge needed to support the developer site, search, chatbot, RAG, and MCP-enabled experiences without each system independently interpreting a collection of pages.',
    mandate: 'Define the governed knowledge layer and decision boundaries between Content Strategy and Engineering so multiple downstream experiences could use the same authoritative foundation.',
    scope: 'Developer documentation, CMS migration, search, chatbot, RAG, and MCP-enabled experiences, plus a separate knowledge-graph proof of concept.',
    solution: [
      'Started with inventory, information architecture, taxonomy, metadata, content models, templates, content architecture, and governance to separate knowledge from presentation.',
      'Worked with Engineering on the CMS migration and downstream architecture. A request could be interpreted into product, task, capability, audience, and version before retrieval.',
      'Designed retrieval to combine metadata filters, semantic and keyword search, source authority, freshness and versioning, and explicit relationships where useful. A separate knowledge-graph proof of concept explored links among products, capabilities, concepts, tasks, APIs, and versions.'
    ],
    results: [
      'The architecture moved the work from publishing individual documents toward governed knowledge that could support multiple downstream developer experiences.',
      'The graph remained an exploratory proof of concept. The source STAR does not claim a deployed production graph or a measured RAG launch.'
    ],
    impact: 'The work established the pattern that retrieval should find the right trusted context, not merely the nearest text match. Content Strategy defined the knowledge model, taxonomy, metadata, source authority, context requirements, and governance; Engineering owned ingestion, indexing, APIs, orchestration, telemetry, scaling, and deployment.'
  },
  dita: {
    type: 'Transformation leadership',
    title: 'Leading adoption through practitioner trust',
    problem: 'A technically sound move toward topic-based content changed how specialists authored and maintained documentation. I initially emphasized the architecture more than the workflow and autonomy concerns practitioners experienced.',
    mandate: 'Recover trust, understand the concerns behind resistance, and incorporate adoption and practitioner autonomy into the transformation model.',
    scope: 'Structured-content architecture, specialist authoring workflows, taxonomy, metadata, governance, and change adoption.',
    solution: [
      'Defined smaller reusable topics, taxonomy, metadata, ownership, and publishing rules to address repetition in page-based documentation.',
      'Listened to the concerns behind resistance, especially changes to expert judgment and everyday authoring work.',
      'Carried the lesson into later programs: involve practitioners early, test the model in a pilot, explain what is standardized, and preserve human decisions that require expertise.'
    ],
    results: [
      'The experience showed that explaining a content architecture is not the same as earning adoption.',
      'The master STAR does not establish a quantitative outcome for this rollout.'
    ],
    impact: 'It changed how I led later transformations. Practitioner feedback became design input, and adoption, trust, and the boundary between rules and expert judgment became part of the operating model.'
  }
};

const modal = document.getElementById('modal');
const content = document.getElementById('modal-content');
const closeButton = document.querySelector('.close');
let returnFocus = null;

document.querySelectorAll('[data-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const item = cases[button.dataset.modal];
    if (!item) return;
    returnFocus = button;
    content.innerHTML = `
      <p class="case-type">${item.type}</p>
      <h2>${item.title}</h2>
      <h4>Business challenge</h4>
      <p>${item.problem}</p>
      <h4>Leadership mandate</h4>
      <p>${item.mandate}</p>
      <h4>Organizational scope</h4>
      <p>${item.scope}</p>
      <h4>Decisions and orchestration</h4>
      <ul>${item.solution.map((line) => `<li>${line}</li>`).join('')}</ul>
      <h4>Results</h4>
      <ul>${item.results.map((line) => `<li>${line}</li>`).join('')}</ul>
      <h4>Enterprise impact</h4>
      <p>${item.impact}</p>
      <p class="modal-note">Employer names and confidential implementation details are omitted.</p>`;
    modal.classList.add('open');
    closeButton.focus();
  });
});

function closeModal() {
  modal.classList.remove('open');
  if (returnFocus) returnFocus.focus();
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeModal();
});
