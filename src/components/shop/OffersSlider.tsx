import { Link } from "react-router-dom";
import { PHARMACY_PRODUCTS } from "../../store/products";
import { SafeImage } from "./SafeImage";

const base = PHARMACY_PRODUCTS.filter((p) => p.compareAtPrice || p.badge);

// Repeat the array to ensure it's long enough to fill ultra-wide screens
const repeatedOffers = [...base, ...base, ...base];

export function OffersSlider() {
  return (
    <section className="pharm-section airbnb-offers-section" id="offers">
      <div className="pharm-wrap">
        <h2 className="pharm-section-title">Member Savings</h2>
        <p className="pharm-section-sub">
          Compare-at pricing on select Rx programs — limited-time enrollment offers.
        </p>
      </div>

      <div className="airbnb-marquee-container">
        <div className="airbnb-marquee-track">
          {repeatedOffers.map((p, i) => (
            <Link to={`/shop/product/${p.slug}`} key={`track1-${p.slug}-${i}`} className="airbnb-card">
              <div className="airbnb-card-img-wrap">
                <SafeImage path={p.image} alt={p.name} />
                <button className="airbnb-heart" type="button" aria-label="Save">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
                  </svg>
                </button>
              </div>
              <div className="airbnb-card-info">
                <div className="airbnb-card-title">{p.name}</div>
                <div className="airbnb-card-sub">{p.tagline}</div>
                <div className="airbnb-card-price">
                  <strong>${p.priceMonthly}</strong> / month
                  {p.compareAtPrice && <s>${p.compareAtPrice}</s>}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="airbnb-marquee-track" aria-hidden="true">
          {repeatedOffers.map((p, i) => (
            <Link to={`/shop/product/${p.slug}`} key={`track2-${p.slug}-${i}`} className="airbnb-card" tabIndex={-1}>
              <div className="airbnb-card-img-wrap">
                <SafeImage path={p.image} alt={p.name} />
                <button className="airbnb-heart" type="button" tabIndex={-1}>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z" />
                  </svg>
                </button>
              </div>
              <div className="airbnb-card-info">
                <div className="airbnb-card-title">{p.name}</div>
                <div className="airbnb-card-sub">{p.tagline}</div>
                <div className="airbnb-card-price">
                  <strong>${p.priceMonthly}</strong> / month
                  {p.compareAtPrice && <s>${p.compareAtPrice}</s>}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
