const cases = {
  fusion: {
    type: 'Content platform',
    title: 'A content program spanning 12 workstreams',
    problem: 'Legacy technical content was organized around pages and XML structures. A new content platform would inherit the same maintenance burden unless the content model and transformation workflow changed too. The work crossed 12 teams and delivery streams with different dependencies.',
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
    problem: 'Manual review could not consistently cover a very large developer-documentation corpus. Repeatable editorial checks competed for the same expert time needed for technical accuracy and ambiguous cases.',
    solution: [
      'Translated standards for terminology, style, clarity, accessibility, search, and inclusivity into testable rules and engineering acceptance criteria.',
      'Separated predictable checks from technical or judgment-heavy decisions, which stayed with writers, editors, and subject experts.',
      'Tracked suggestion accuracy, false positives, reviewer acceptance, quality scores, and review time to improve the system based on actual use.'
    ],
    results: [
      'The quality system assessed more than 170 million words per month.',
      'Related quality scores rose from roughly 65% to 85%, while a representative document review fell from about four hours to one.',
      'Program reporting showed 40% better suggestion accuracy, 60% fewer false positives, and 85% user acceptance.'
    ],
    impact: 'Predictable issues moved earlier in the workflow. Reviewers could spend more time on technical truth and exceptions, and the quality controls earned trust through measured usefulness rather than forcing every suggestion into the process.'
  },
  cms: {
    type: 'Platform decision',
    title: 'A build-versus-buy decision for a new CMS',
    problem: 'An outdated system could not support the intended marketing and technical-content workflows. Engineering favored building a new platform, while the wider program needed a faster path to value and a clear account of long-term ownership cost.',
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
    problem: 'Teams produced isolated assets at different customer touchpoints. Messages were duplicated, hard to localize, and difficult to connect to audience needs or journey stages. Creative partners worried that structure would make final work formulaic.',
    solution: [
      'Mapped customer needs and content types across the journey, audited duplication and gaps, and built a shared information architecture, taxonomy, and metadata model.',
      'Structured reusable audience, message, value proposition, proof, product information, and call-to-action components for a headless content workflow.',
      'Worked with Creative to standardize the underlying building blocks while leaving concept and final expression in their hands; established ownership and governance across teams.'
    ],
    results: [
      'The broader content program supported 12 languages and reported about 50% faster publishing and 35% greater reuse.',
      'Its customer-facing scale included roughly 1.5 million customers and more than 2 million weekly sessions.'
    ],
    impact: 'Across the broader program, time to resolution improved about 40% and support cases fell about 15%. Those are program-level outcomes, not effects attributable to one content field or a single creative change.'
  },
  rag: {
    type: 'Knowledge architecture',
    title: 'Structured developer knowledge for retrieval',
    problem: 'Developer information lived in separate pages, while site search and potential downstream AI experiences needed to distinguish the right product, task, version, and authoritative source.',
    solution: [
      'Defined content types, taxonomy, metadata, templates, source ownership, and version rules so knowledge could be reused independently of page presentation.',
      'Worked with Engineering on the requirements for CMS migration and downstream retrieval, including filters for product, task, capability, audience, and version.',
      'Explored explicit relationships among concepts, tasks, products, APIs, and versions in a separate hackathon knowledge-graph proof of concept.'
    ],
    results: [
      'The content architecture set out a governed base for the developer site and potential search, chatbot, RAG, and tool-connected experiences.',
      'The graph work remained an exploratory proof of concept; it was not a deployed production graph or a measured RAG launch.'
    ],
    impact: 'The work clarified how authority, metadata, and relationships can narrow the context available to a retrieval system before generation. It also made the boundary between content architecture and engineering implementation explicit.'
  },
  dita: {
    type: 'Structured documentation',
    title: 'Technical content built for reuse',
    problem: 'A technically sound move toward topic-based content changed how specialists authored and maintained documentation. I initially emphasized the architecture more than the workflow and autonomy concerns practitioners experienced.',
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
      <h4>Problem</h4>
      <p>${item.problem}</p>
      <h4>Solution</h4>
      <ul>${item.solution.map((line) => `<li>${line}</li>`).join('')}</ul>
      <h4>Results</h4>
      <ul>${item.results.map((line) => `<li>${line}</li>`).join('')}</ul>
      <h4>Impact</h4>
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
