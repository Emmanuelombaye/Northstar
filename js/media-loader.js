/**
 * Smooth image loading: shimmer placeholder, fade-in, WebP fallback.
 */
function initMediaImages() {
  const imgs = document.querySelectorAll(
    "main img, .hero img, .hero-banner img, .treatment-hero img, .about-hero ~ * img",
  );

  imgs.forEach((img) => {
    if (img.closest(".logo") || img.classList.contains("logo-star")) return;
    img.classList.add("media-img");

    const fallback = img.getAttribute("data-fallback");
    if (fallback && img.getAttribute("src") !== fallback) {
      img.addEventListener(
        "error",
        () => {
          if (img.getAttribute("src") !== fallback) {
            img.setAttribute("src", fallback);
          }
        },
        { once: true },
      );
    }

    const markLoaded = () => img.classList.add("is-loaded");
    if (img.complete && img.naturalWidth > 0) {
      markLoaded();
    } else {
      img.addEventListener("load", markLoaded, { once: true });
      img.addEventListener("error", markLoaded, { once: true });
    }
  });

  /** Above-fold program / hero slides: load immediately, not lazy. */
  document
    .querySelectorAll(
      ".program-panel.is-active img, .hero-banner img, .treatment-hero-image, .how-hero-media img",
    )
    .forEach((img) => {
      img.removeAttribute("loading");
      if (!img.getAttribute("fetchpriority")) {
        img.setAttribute("fetchpriority", "high");
      }
    });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMediaImages);
} else {
  initMediaImages();
}
