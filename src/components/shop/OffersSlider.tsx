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
                  <svg viewBox="0 0 32 32" fill="rgba(0, 0, 0, 0.5)" stroke="white" strokeWidth="2">
                    <path d="M16 28.27l-2.31-2.11C6.27 19.33 2 15.45 2 10.5 2 6.36 5.36 3 9.5 3c2.38 0 4.67 1.13 6.5 2.91C17.83 4.13 20.12 3 22.5 3 26.64 3 30 6.36 30 10.5c0 4.95-4.27 8.83-11.69 15.67L16 28.27z" />
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
                  <svg viewBox="0 0 32 32" fill="rgba(0, 0, 0, 0.5)" stroke="white" strokeWidth="2">
                    <path d="M16 28.27l-2.31-2.11C6.27 19.33 2 15.45 2 10.5 2 6.36 5.36 3 9.5 3c2.38 0 4.67 1.13 6.5 2.91C17.83 4.13 20.12 3 22.5 3 26.64 3 30 6.36 30 10.5c0 4.95-4.27 8.83-11.69 15.67L16 28.27z" />
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
