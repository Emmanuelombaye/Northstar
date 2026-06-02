/**
 * North Star MD → white-label enrollment.
 * Production: https://www.joinnorthstarmd.com/care/north-star-md/shop
 * (Proxied via Northstar Vercel project → Peak Health telehealth backend)
 */
(function () {
  const PEAK_SHOP_ORIGIN = "https://www.joinnorthstarmd.com";
  const ENROLL_PATH = "/care/north-star-md/shop";
  const NORTH_STAR_BRAND_SLUG = "north-star-md";
  const NORTH_STAR_BRAND_ID = "c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c";
  // Keep catalog loading stable. Category filtering can cause empty states
  // when checkout-side slugs/catalog assignments change.
  const ENABLE_CATEGORY_FILTER = true;
  const CATEGORY_ALIAS = {
    semaglutide: "weight-loss",
    tirzepatide: "weight-loss",
    metabolic: "weight-loss",
    nad: "anti-aging",
    longevity: "anti-aging",
    sermorelin: "anti-aging",
    executive: "anti-aging",
  };

  function normalizeCategory(category) {
    if (!category) return null;
    var key = String(category).trim().toLowerCase();
    return CATEGORY_ALIAS[key] || null;
  }

  function shopUrl(category) {
    const params = new URLSearchParams({
      brand: NORTH_STAR_BRAND_SLUG,
      brandId: NORTH_STAR_BRAND_ID,
    });
    const normalizedCategory = normalizeCategory(category);
    if (ENABLE_CATEGORY_FILTER && normalizedCategory) {
      params.set("category", normalizedCategory);
    }
    const q = params.toString();
    return `${PEAK_SHOP_ORIGIN}${ENROLL_PATH}${q ? `?${q}` : ""}`;
  }

  window.NORTHSTAR_SHOP = {
    origin: PEAK_SHOP_ORIGIN,
    enrollPath: ENROLL_PATH,
    brandSlug: NORTH_STAR_BRAND_SLUG,
    brandId: NORTH_STAR_BRAND_ID,
    catalog: function () {
      return shopUrl();
    },
    category: function (name) {
      return shopUrl(name);
    },
  };

  function applyShopLinks() {
    document.querySelectorAll("[data-shop]").forEach(function (el) {
      var kind = el.getAttribute("data-shop") || "catalog";
      var category = el.getAttribute("data-shop-category");
      var href =
        kind === "category" && category ? shopUrl(category) : shopUrl();
      if (el.tagName === "A") {
        el.setAttribute("href", href);
      } else {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          window.location.href = href;
        });
      }
    });
  }

  function ensureConnectionHints() {
    var existingPreconnect = document.querySelector(
      'link[rel="preconnect"][href="' + PEAK_SHOP_ORIGIN + '"]'
    );
    if (!existingPreconnect) {
      var preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = PEAK_SHOP_ORIGIN;
      document.head.appendChild(preconnect);
    }

    var existingDnsPrefetch = document.querySelector(
      'link[rel="dns-prefetch"][href="' + PEAK_SHOP_ORIGIN + '"]'
    );
    if (!existingDnsPrefetch) {
      var dnsPrefetch = document.createElement("link");
      dnsPrefetch.rel = "dns-prefetch";
      dnsPrefetch.href = PEAK_SHOP_ORIGIN;
      document.head.appendChild(dnsPrefetch);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      ensureConnectionHints();
      applyShopLinks();
    });
  } else {
    ensureConnectionHints();
    applyShopLinks();
  }
})();
