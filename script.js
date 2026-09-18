const cases = {
  fusion: {
    type: 'Content platform',
    title: 'A content program spanning 12 workstreams',
    situation: 'Teams were using different structures and workflows to maintain a large body of technical content. The same transformation work was repeated from one group to the next.',
    work: [
      'Set one program plan across the content model, authoring, platform, migration, delivery, governance, measurement, localization, enablement, and adoption work.',
      'Used assisted pattern generation for repeatable conversion tasks. People remained responsible for architecture and quality decisions.',
      'Made the build-versus-buy choices, dependencies, and adoption measures visible to program leaders.'
    ],
    result: [
      'Representative transformation time fell from about eight hours to four.',
      'Teams gained a clearer path from documents to structured content that could support reuse and retrieval.'
    ]
  },
  advisor: {
    type: 'Quality automation',
    title: 'Editorial guidance that teams could test',
    situation: 'Standards lived in reviewer knowledge and long guidance documents. Authors received feedback late, and leaders had little data about recurring quality problems.',
    work: [
      'Rewrote editorial standards as specific checks that authors and engineers could test.',
      'Separated repeatable detection from the judgment that still needed an experienced reviewer.',
      'Used the resulting data to find patterns across the content instead of treating every issue as a one-off edit.'
    ],
    result: [
      'Measured quality rose from about 65 percent to 85 percent.',
      'A representative review that took four hours fell to about one hour.'
    ]
  },
  cms: {
    type: 'Platform decision',
    title: 'A build-versus-buy decision for a new CMS',
    situation: 'Engineering preferred to build a platform. The wider group needed to know whether custom development was the best use of time and budget.',
    work: [
      'Compared the required capabilities with vendor products and internal options.',
      'Included implementation time, integration work, ownership cost, risk, and opportunity cost in the analysis.',
      'Showed which capabilities were unique to the business and which were standard platform functions.'
    ],
    result: [
      'Leaders agreed on a vendor path that shortened delivery time.',
      'Engineering could concentrate on the work that required company-specific knowledge.'
    ]
  },
  globalMarketing: {
    type: 'Global marketing content',
    title: 'Reusable messaging across 12 languages',
    situation: 'Marketing teams created complete assets for each channel. Repeated messages were hard to find, update, translate, and measure across the customer journey.',
    work: [
      'Defined reusable fields for audience, message, value proposition, proof, product information, calls to action, and metadata.',
      'Mapped content to stages in the customer journey.',
      'Worked with creative partners so the structure supported their work without prescribing the final expression.'
    ],
    result: [
      'The model supported reuse and localization across 12 languages.',
      'Teams could update shared information while keeping channel-specific creative choices.'
    ]
  },
  rag: {
    type: 'AI knowledge architecture',
    title: 'A knowledge layer for marketing generation',
    situation: 'A generation system could produce fluent copy while using an outdated claim or missing the intended audience and message.',
    work: [
      'Mapped audiences, products, approved claims, proof, policies, channel guidance, and past campaign learning.',
      'Defined how metadata, search, relationships, versioning, and reranking would select the material for a request.',
      'Created six quality rubrics and identified the decisions that still required human review.'
    ],
    result: [
      'Teams could trace a weak answer back to the source, retrieval, context, generation, evaluation, or review step.',
      'Performance data could improve both the knowledge and the quality tests.'
    ]
  },
  dita: {
    type: 'Structured documentation',
    title: 'Technical content built for reuse',
    situation: 'Page-based documentation repeated the same explanations in many places. Updates were slow and inconsistencies were easy to introduce.',
    work: [
      'Moved common explanations into smaller topics that could be maintained once and used in several outputs.',
      'Defined metadata, taxonomy, ownership, and publishing rules.',
      'Connected authoring choices with the needs of downstream channels and customers.'
    ],
    result: [
      'Teams reused more content and spent less time maintaining repeated information.',
      'The content became easier for publishing systems and retrieval tools to use.'
    ]
  }
};

const modal = document.getElementById('modal');
const content = document.getElementById('modal-content');
const closeButton = document.querySelector('.close');

document.querySelectorAll('[data-modal]').forEach((button) => {
  button.addEventListener('click', () => {
    const item = cases[button.dataset.modal];
    content.innerHTML = `
      <p class="case-type">${item.type}</p>
      <h2>${item.title}</h2>
      <h4>Situation</h4>
      <p>${item.situation}</p>
      <h4>My role</h4>
      <ul>${item.work.map((line) => `<li>${line}</li>`).join('')}</ul>
      <h4>Result</h4>
      <ul>${item.result.map((line) => `<li>${line}</li>`).join('')}</ul>
      <p class="modal-note">Employer names and confidential implementation details are omitted.</p>`;
    modal.classList.add('open');
    closeButton.focus();
  });
});

function closeModal() {
  modal.classList.remove('open');
}

closeButton.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target === modal) closeModal();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closeModal();
});
