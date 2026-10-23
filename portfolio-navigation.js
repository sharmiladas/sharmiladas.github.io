(() => {
  const root = new URL('.', document.currentScript.src);
  if (location.pathname !== root.pathname && location.pathname !== root.pathname + 'index.html') return;
  const routes = {work:'work.html', essays:'writing.html', 'product-strategy':'product-strategy.html', 'ai-content-strategy':'technical-writing.html', 'technical-writing':'technical-writing.html', 'knowledge-management':'knowledge-management.html', 'learning-labs':'learning-labs.html', 'editorial-leadership':'editorial.html', practice:'program-management.html', 'developer-documentation':'developer-documentation.html', products:'products.html', 'fun-stuff':'products.html', frameworks:'frameworks.html', 'point-of-view':'perspective.html', background:'about.html'};
  function routeBookmark() { const route = routes[location.hash.slice(1)]; if(route) location.replace(new URL(route,root)); }
  routeBookmark(); window.addEventListener('hashchange',routeBookmark);
})();
