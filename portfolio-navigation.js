// Preserve existing bookmarks when opening the shorter multipage portfolio.
(() => {
  const items = [
    ["index.html", "Overview", "overview"],
    ["technical-writing.html", "AI content strategy", "ai-content-strategy"],
    ["knowledge-management.html", "Knowledge management", "knowledge-management"],
    ["learning-labs.html", "Learning Labs", "learning-labs"],
    ["work.html", "My work", "work"],
    ["editorial.html", "Editorial leadership", "editorial"],
    ["program-management.html", "Program management", "program-management"],
    ["developer-documentation.html", "Developer docs", "developer-documentation"],
    ["products.html", "Products", "products"],
    ["frameworks.html", "Frameworks", "frameworks"],
    ["perspective.html", "Perspective", "perspective"],
    ["about.html", "About", "about"]
  ];
  const parts = location.pathname.split("/").filter(Boolean);
  const file = parts.at(-1) || "index.html";
  const nested = ["articles", "developer-docs", "frameworks", "products", "technical-writing"].some(folder => parts.includes(folder));
  const prefix = nested ? "../" : "";
  let active = file.replace(/.html$/, "");
  if (parts.includes("articles")) active = "work";
  if (parts.includes("developer-docs")) active = "developer-documentation";
  if (parts.includes("products")) active = "products";
  if (parts.includes("frameworks")) active = "frameworks";
  if (parts.includes("technical-writing") && file === "index.html") active = "ai-content-strategy";
  if (file === "technical-writing.html") active = "ai-content-strategy";
  if (file === "index.html" && !nested) active = "overview";
  document.querySelectorAll("nav.portfolio-nav").forEach(nav => {
    nav.replaceChildren(...items.map(([href, label, key]) => {
      const link = document.createElement("a");
      link.href = prefix + href;
      link.textContent = label;
      if (key === active) link.setAttribute("aria-current", "page");
      return link;
    }));
  });

  const page = location.pathname.split('/').pop();
  if (page && page !== 'index.html') return;
  const routes = {"learning-labs": "learning-labs.html", "ai-content-strategy": "technical-writing.html", "technical-writing": "technical-writing.html", "knowledge-management": "knowledge-management.html", "work": "work.html", "essays": "work.html", "editorial-leadership": "editorial.html", "practice": "program-management.html", "developer-documentation": "developer-documentation.html", "products": "products.html", "fun-stuff": "products.html", "frameworks": "frameworks.html", "point-of-view": "perspective.html", "background": "about.html"};
  function routeBookmark() {
    const key = location.hash.slice(1);
    if (routes[key]) location.replace(routes[key]);
  }
  routeBookmark();
  window.addEventListener('hashchange', routeBookmark);
})();

