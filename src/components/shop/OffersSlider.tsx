import { useRef } from "react";
import { PHARMACY_PRODUCTS } from "../../store/products";
import { PharmacyProductCard } from "./PharmacyProductCard";

const offers = PHARMACY_PRODUCTS.filter((p) => p.compareAtPrice || p.badge).slice(0, 12);

export function OffersSlider() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 280, behavior: "smooth" });
  };

  return (
    <section className="pharm-section pharm-offers">
      <div className="pharm-wrap pharm-section-head">
        <div>
          <h2 className="pharm-section-title">Offers for You</h2>
          <p className="pharm-section-sub">
            Don't miss physician-guided programs at special monthly rates — only for North Star MD patients.
          </p>
        </div>
        <div className="pharm-slider-nav">
          <button type="button" aria-label="Previous offers" onClick={() => scroll(-1)}>
            ‹
          </button>
          <button type="button" aria-label="Next offers" onClick={() => scroll(1)}>
            ›
          </button>
        </div>
      </div>
      <div className="pharm-offers-track" ref={trackRef}>
        {offers.map((p, i) => (
          <div key={p.slug} className="pharm-offers-item">
            <PharmacyProductCard product={p} index={i} compact />
          </div>
        ))}
      </div>
    </section>
  );
}
