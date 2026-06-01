/**
 * Links North Star MD marketing site → Peak Health enrollment shop (branded).
 * Edit PEAK_SHOP_ORIGIN for local testing (e.g. http://localhost:5173).
 */
(function () {
  const PEAK_SHOP_ORIGIN = "https://www.peak-health.io";
  const NORTH_STAR_BRAND_SLUG = "north-star-md";
  const NORTH_STAR_BRAND_ID = "c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c";

  function shopUrl(category) {
    const params = new URLSearchParams({
      brand: NORTH_STAR_BRAND_SLUG,
      brandId: NORTH_STAR_BRAND_ID,
    });
    if (category) params.set("category", category);
    return `${PEAK_SHOP_ORIGIN}/patient/shop?${params.toString()}`;
  }

  window.NORTHSTAR_SHOP = {
    origin: PEAK_SHOP_ORIGIN,
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
        kind === "category" && category
          ? shopUrl(category)
          : shopUrl();
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

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", applyShopLinks);
  } else {
    applyShopLinks();
  }
})();
