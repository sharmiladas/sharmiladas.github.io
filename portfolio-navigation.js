// Preserve existing bookmarks when opening the shorter multipage portfolio.
(() => {
  const page = location.pathname.split('/').pop();
  if (page && page !== 'index.html') return;
  const routes = {"work": "work.html", "essays": "work.html", "editorial-leadership": "editorial.html", "practice": "program-management.html", "technical-writing": "technical-writing.html", "developer-documentation": "developer-documentation.html", "products": "products.html", "fun-stuff": "products.html", "frameworks": "frameworks.html", "point-of-view": "perspective.html", "background": "about.html"};
  function routeBookmark() {
    const key = location.hash.slice(1);
    if (routes[key]) location.replace(routes[key]);
  }
  routeBookmark();
  window.addEventListener('hashchange', routeBookmark);
})();
