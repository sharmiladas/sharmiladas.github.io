# Baseframe publishing convention

User instruction, October 17, 2026: publish Baseframe content and apps on GitHub Pages in this repository until the user moves to GoDaddy. Use public URLs under https://sharmiladas.github.io/thebaseframe/ instead of chatgpt.site URLs. Publish runnable apps themselves here, not only product pages that link to external prototypes. Preserve this convention for subsequent Baseframe work.

## Little Wins SAT

- App: `little-wins-sat-app.html`
- Product description and problem statement: `little-wins-sat.html`
- Directory: `products.html`

The app is self-contained HTML containing its authored CSS and JavaScript. Open it directly or serve this directory with a static web server. There is no build step, API key, paid dependency, or account requirement. Changes committed to the main branch use the repository’s existing GitHub Pages deployment.

Learning progress and coach choices are stored in the visitor’s browser using localStorage (`littlewins-v1`). Progress from the former chatgpt.site address does not automatically transfer to this origin. Sharing a URL does not share progress. Reminders are downloaded calendar files that must be imported by the learner or supporter.
