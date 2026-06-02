import "./media-loader.js";

const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navOverlay = document.querySelector(".nav-overlay");

function setNavOpen(open) {
  if (!mainNav || !navToggle) return;

  mainNav.classList.toggle("is-open", open);
  navToggle.classList.toggle("is-open", open);
  document.body.classList.toggle("nav-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
  navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    setNavOpen(!mainNav.classList.contains("is-open"));
  });

  if (navOverlay) {
    navOverlay.addEventListener("click", () => setNavOpen(false));
  }

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setNavOpen(false));
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) setNavOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setNavOpen(false);
  });
}
