(() => {
  const form = document.getElementById('workflow-intake');
  if (!form) return;
  const value = id => document.getElementById(id).value.trim();
  const offering = document.getElementById('offering');
  const selected = new URLSearchParams(location.search).get('offering');
  if (selected && Array.from(offering.options).some(option => option.value === selected)) offering.value = selected;
  const suggestions = {
    support: 'Begin with approved answers and a review path for questions the sources cannot answer.',
    documentation: 'Begin with a verified change packet, a draft structure, and a technical reviewer.',
    maintenance: 'Begin with a source inventory, owner assignments, and a review queue.',
    reporting: 'Begin with an evidence format, named workstream owners, and a decision cadence.',
    other: 'Begin by bounding one task, its approved information, and the decision owner.'
  };
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const offeringLabel = offering.options[offering.selectedIndex].text;
    const kind = document.getElementById('kind');
    const text = [
      'Baseframe service inquiry', '',
      'Interested offering: ' + offeringLabel,
      'Recurring task: ' + value('task'),
      'Workflow area: ' + kind.options[kind.selectedIndex].text,
      'People and audience: ' + value('audience'),
      'Approved information: ' + value('sources'),
      'Current problem: ' + value('pain'),
      'Desired improvement: ' + value('success'),
      'Current effort/volume: ' + (value('baseline') || 'Not measured yet'),
      'Constraints/timing: ' + (value('constraints') || 'To discuss'), '',
      'Please confirm scope, implementation responsibilities, availability, timeline, and fee before any commitment.'
    ].join('\n');
    document.getElementById('request-text').textContent = text;
    document.getElementById('workflow-suggestion').textContent = suggestions[value('kind')];
    document.getElementById('email-request').href = 'mailto:das.sharmila@gmail.com?subject=' +
      encodeURIComponent('Baseframe: ' + offeringLabel) + '&body=' + encodeURIComponent(text);
    document.getElementById('request-preview').hidden = false;
    document.getElementById('copy-status').textContent = '';
    document.getElementById('request-title').focus();
  });
  document.getElementById('copy-request').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById('request-text').textContent);
      document.getElementById('copy-status').textContent = 'Copied. You can paste this into an email to das.sharmila@gmail.com.';
    } catch {
      document.getElementById('copy-status').textContent = 'Select and copy the request above, then email it to das.sharmila@gmail.com.';
    }
  });
})();
