import { PHARMACY_PRODUCTS } from "../../store/products";

import { useAutoScroll } from "../../hooks/useAutoScroll";

import { PharmacyProductCard } from "./PharmacyProductCard";



const base = PHARMACY_PRODUCTS.filter((p) => p.compareAtPrice || p.badge);

const offers = [...base, ...base, ...base];



export function OffersSlider() {

  const trackRef = useAutoScroll(true, 0.45);



  return (

    <section className="pharm-section pharm-offers" id="offers">

      <div className="pharm-wrap pharm-section-head">

        <div>

          <h2 className="pharm-section-title">Member Savings</h2>

          <p className="pharm-section-sub">

            Compare-at pricing on select Rx programs — limited-time enrollment offers.

          </p>

        </div>

      </div>

      <div className="pharm-offers-track pharm-offers-auto" ref={trackRef}>

        {offers.map((p, i) => (

          <div key={`${p.slug}-${i}`} className="pharm-offers-item">

            <PharmacyProductCard product={p} index={i % base.length} compact />

          </div>

        ))}

      </div>

    </section>

  );

}

