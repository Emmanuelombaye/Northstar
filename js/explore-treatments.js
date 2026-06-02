document.addEventListener("DOMContentLoaded", () => {
  const tabs = Array.from(document.querySelectorAll(".filter-tab"));
  const panels = Array.from(document.querySelectorAll(".program-panel"));
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
  }

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const filter = tab.getAttribute("data-filter");
      if (filter) activate(filter);
    });
  });
});
