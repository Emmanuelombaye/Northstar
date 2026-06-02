document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll(".filter-tab"));
  const panels = Array.from(document.querySelectorAll(".program-panel"));
  const details = Array.from(document.querySelectorAll(".category-detail"));
  if (!tabs.length || !panels.length) return;

  function activate(filter) {
    tabs.forEach((tab) => {
      const isActive = tab.getAttribute("data-filter") === filter;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.getAttribute("data-panel") === filter;
      panel.classList.toggle("is-active", isActive);
    });

    details.forEach((block) => {
      const isActive = block.getAttribute("data-detail") === filter;
      block.classList.toggle("is-active", isActive);
      block.hidden = !isActive;
    });
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");
      if (filter) activate(filter);
    });
  });

  const initial = tabs.find((t) => t.classList.contains("is-active"));
  if (initial) activate(initial.getAttribute("data-filter") || "weight");
});
