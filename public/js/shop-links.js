/**
 * North Star MD enrollment links.
 * Production: https://www.joinnorthstarmd.com/care/north-star-md/shop
 */
(function () {
  const SITE_ORIGIN = "https://www.joinnorthstarmd.com";
  const ENROLL_PATH = "/care/north-star-md/shop";
  const NORTH_STAR_BRAND_SLUG = "north-star-md";
  const NORTH_STAR_BRAND_ID = "c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c";
  // Specific treatments → direct product pre-select (skips catalog in portal).
  const TREATMENT_PRODUCT = {
    semaglutide: "semaglutide",
    tirzepatide: "tirzepatide",
    nad: "nad",
    sermorelin: "sermorelin",
  };
  const CATEGORY_SLUG = {
    "weight-loss": "weight-loss",
    metabolic: "weight-loss",
    longevity: "longevity",
    executive: "longevity",
  };
  const ENABLE_CATEGORY_FILTER = true;

  function normalizeCategory(category) {
    if (!category) return null;
    var key = String(category).trim().toLowerCase();
    return CATEGORY_SLUG[key] || key;
  }

  function shopUrl(opts) {
    opts = opts || {};
    var productKey = opts.product;
    if (!productKey && opts.category && TREATMENT_PRODUCT[opts.category]) {
      productKey = TREATMENT_PRODUCT[opts.category];
    }

    const PRODUCT_SLUG_MAP = {
      semaglutide: "semaglutide-plus",
      tirzepatide: "tirzepatide-plus",
      nad: "nad-rejuvenation",
      sermorelin: "sermorelin-recovery"
    };

    const origin = window.location.origin;

    if (productKey) {
      const localSlug = PRODUCT_SLUG_MAP[productKey] || productKey;
      return `${origin}/shop/product/${localSlug}`;
    } else if (opts.category) {
      var normalizedCategory = normalizeCategory(opts.category);
      const CATEGORY_MAP = {
        metabolic: "weight-loss",
        executive: "longevity",
        "muscle-recovery": "recovery",
        recovery: "recovery"
      };
      const localCategory = CATEGORY_MAP[normalizedCategory] || normalizedCategory;
      return `${origin}/shop?category=${localCategory}`;
    }
    return `${origin}/shop`;
  }

  window.NORTHSTAR_SHOP = {
    origin: window.location.origin,
    enrollPath: "/shop",
    brandSlug: NORTH_STAR_BRAND_SLUG,
    brandId: NORTH_STAR_BRAND_ID,
    catalog: function () {
      return shopUrl();
    },
    category: function (name) {
      return shopUrl({ category: name });
    },
    product: function (name) {
      return shopUrl({ product: name });
    },
  };

  function applyShopLinks() {
    document.querySelectorAll("[data-shop]").forEach(function (el) {
      var kind = el.getAttribute("data-shop") || "catalog";
      var category = el.getAttribute("data-shop-category");
      var product = el.getAttribute("data-shop-product");
      var href;

      if (kind === "product" && product) {
        href = shopUrl({ product: product });
      } else if (kind === "category" && category) {
        href = shopUrl({ category: category });
      } else {
        href = shopUrl();
      }

      if (el.tagName === "A") {
        el.setAttribute("href", href);
      } else {
        el.addEventListener("click", function (e) {
          e.preventDefault();
          window.location.href = href;
        });
      }
    });

    document.querySelectorAll('a[href*="/care/north-star-md/shop"]').forEach(function (el) {
      if (el.getAttribute("data-shop")) return;
      el.setAttribute("href", shopUrl());
    });
  }

  function ensureConnectionHints() {
    var existingPreconnect = document.querySelector(
      'link[rel="preconnect"][href="' + SITE_ORIGIN + '"]'
    );
    if (!existingPreconnect) {
      var preconnect = document.createElement("link");
      preconnect.rel = "preconnect";
      preconnect.href = SITE_ORIGIN;
      document.head.appendChild(preconnect);
    }

    var existingDnsPrefetch = document.querySelector(
      'link[rel="dns-prefetch"][href="' + SITE_ORIGIN + '"]'
    );
    if (!existingDnsPrefetch) {
      var dnsPrefetch = document.createElement("link");
      dnsPrefetch.rel = "dns-prefetch";
      dnsPrefetch.href = SITE_ORIGIN;
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
