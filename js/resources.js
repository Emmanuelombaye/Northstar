// North Star MD — Resources Interactive Category Filtering

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".filter-tab");
  const cards = document.querySelectorAll(".resource-card");

  if (!tabs.length || !cards.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Deactivate all tabs and activate current
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const activeFilter = tab.getAttribute("data-filter");

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (activeFilter === "all" || cardCategory === activeFilter) {
          // If hidden, show and animate in
          if (card.style.display === "none" || card.classList.contains("is-hidden")) {
            card.style.display = "flex";
            // Small requestAnimationFrame/timeout delay to trigger CSS transition
            requestAnimationFrame(() => {
              card.classList.remove("is-hidden");
            });
          }
        } else {
          // Animate out and hide
          card.classList.add("is-hidden");
          
          // Wait for transition to complete before setting display to none
          const onTransitionEnd = (e) => {
            if (e.propertyName === "opacity" && card.classList.contains("is-hidden")) {
              card.style.display = "none";
              card.removeEventListener("transitionend", onTransitionEnd);
            }
          };
          card.addEventListener("transitionend", onTransitionEnd);
        }
      });
    });
  });
});
