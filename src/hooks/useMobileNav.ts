import { useEffect } from "react";

/** Same behavior as legacy js/main.js mobile nav toggle. */
export function useMobileNav() {
  useEffect(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const mainNav = document.querySelector(".main-nav");
    const navOverlay = document.querySelector(".nav-overlay");

    function setNavOpen(open: boolean) {
      if (!mainNav || !navToggle) return;
      mainNav.classList.toggle("is-open", open);
      navToggle.classList.toggle("is-open", open);
      document.body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    const onToggle = () => setNavOpen(!mainNav?.classList.contains("is-open"));
    const onOverlay = () => setNavOpen(false);
    const onResize = () => {
      if (window.innerWidth > 768) setNavOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setNavOpen(false);
    };

    navToggle?.addEventListener("click", onToggle);
    navOverlay?.addEventListener("click", onOverlay);
    mainNav?.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", onOverlay);
    });
    window.addEventListener("resize", onResize);
    document.addEventListener("keydown", onKey);

    return () => {
      navToggle?.removeEventListener("click", onToggle);
      navOverlay?.removeEventListener("click", onOverlay);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("keydown", onKey);
      document.body.classList.remove("nav-open");
    };
  }, []);
}
