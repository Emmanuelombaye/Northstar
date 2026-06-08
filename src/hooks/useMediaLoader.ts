import { useEffect } from "react";

/** Port of js/media-loader.js for React pages. */
export function useMediaLoader(deps: unknown[] = []) {
  useEffect(() => {
    const imgs = document.querySelectorAll(
      "main img, .hero img, .hero-banner img, .shop-card img",
    );

    imgs.forEach((node) => {
      const img = node as HTMLImageElement;
      if (img.closest(".logo") || img.classList.contains("logo-star")) return;
      img.classList.add("media-img");

      const fallback = img.getAttribute("data-fallback");
      if (fallback && img.getAttribute("src") !== fallback) {
        img.addEventListener(
          "error",
          () => {
            if (img.getAttribute("src") !== fallback) img.setAttribute("src", fallback);
          },
          { once: true },
        );
      }

      const markLoaded = () => img.classList.add("is-loaded");
      if (img.complete && img.naturalWidth > 0) markLoaded();
      else {
        img.addEventListener("load", markLoaded, { once: true });
        img.addEventListener("error", markLoaded, { once: true });
      }
    });
  }, deps);
}
