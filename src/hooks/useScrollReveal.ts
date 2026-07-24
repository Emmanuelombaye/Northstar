import { useEffect } from "react";

/** Adds .is-visible when elements with [data-reveal] enter the viewport on both desktop & mobile. */
export function useScrollReveal(deps: unknown[] = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }

    // Helper to reveal elements in viewport
    const checkViewport = () => {
      const windowHeight = window.innerHeight;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.top <= windowHeight - 30 && rect.bottom >= 0) {
          node.classList.add("is-visible");
        }
      });
    };

    // Run immediate check for initial viewport elements
    checkViewport();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "100px 0px 100px 0px" },
    );

    nodes.forEach((n) => io.observe(n));

    window.addEventListener("scroll", checkViewport, { passive: true });
    window.addEventListener("resize", checkViewport, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", checkViewport);
      window.removeEventListener("resize", checkViewport);
    };
  }, deps);
}
