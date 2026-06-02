// North Star MD — Support & FAQ Portal Interactions

document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".faq-tab");
  const groups = document.querySelectorAll(".faq-group");

  if (!tabs.length || !groups.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Toggle active states
      tabs.forEach((t) => t.classList.remove("is-active"));
      tab.classList.add("is-active");

      const activeGroupFilter = tab.getAttribute("data-group");

      groups.forEach((group) => {
        const groupId = group.getAttribute("id");

        if (activeGroupFilter === "all" || groupId === activeGroupFilter) {
          // Show the group with a smooth fade
          if (group.style.display === "none" || group.classList.contains("is-hidden")) {
            group.style.display = "block";
            requestAnimationFrame(() => {
              group.classList.remove("is-hidden");
            });
          }
        } else {
          // Hide the group with a smooth fade
          group.classList.add("is-hidden");
          
          const onTransitionEnd = (e) => {
            if (e.propertyName === "opacity" && group.classList.contains("is-hidden")) {
              group.style.display = "none";
              group.removeEventListener("transitionend", onTransitionEnd);
            }
          };
          group.addEventListener("transitionend", onTransitionEnd);
        }
      });
    });
  });
});
