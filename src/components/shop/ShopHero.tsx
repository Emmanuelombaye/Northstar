"use client";

import { Link } from "@/lib/routerAdapter";
import { shop } from "../../lib/shop";
import { PRODUCT_COUNT } from "../../store/products";
import { SafeImage } from "./SafeImage";

export function ShopHero() {
  return (
    <section className="shop-hero shop-hero-premium">
      <div className="shop-hero-orbs" aria-hidden="true">
        <span className="shop-orb shop-orb-1" />
        <span className="shop-orb shop-orb-2" />
        <span className="shop-orb shop-orb-3" />
      </div>
      <div className="shop-hero-stars" aria-hidden="true">
        {Array.from({ length: 6 }).map((_, i) => (
          <svg key={i} className={`shop-float-star shop-float-star-${i + 1}`} viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L14 9L21 11L14 13L12 20L10 13L3 11L10 9L12 2Z"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinejoin="round"
            />
          </svg>
        ))}
      </div>
      <div className="shop-wrap shop-hero-grid">
        <div className="shop-hero-copy" data-reveal>
          <p className="eyebrow">North Star MD Pharmacy</p>
          <h1>
            The physician-guided store for <em>modern longevity.</em>
          </h1>
          <p className="shop-lead">
            Browse {PRODUCT_COUNT}+ prescription programs — weight loss, peptides, hormones, hair, skincare, mental health, and more.
            Checkout on our secure Peak-powered patient portal.
          </p>
          <div className="shop-hero-actions">
            <a href="#catalog" className="btn btn-navy btn-pill">
              Shop treatments
            </a>
            <a href={shop.catalog()} className="btn btn-ghost btn-pill">
              Quick enroll
            </a>
          </div>
          <div className="shop-hero-stats">
            <div>
              <strong>4.8</strong>
              <span>Avg. rating</span>
            </div>
            <div>
              <strong>{PRODUCT_COUNT}+</strong>
              <span>Programs</span>
            </div>
            <div>
              <strong>50</strong>
              <span>States</span>
            </div>
          </div>
        </div>
        <div className="shop-hero-visual" data-reveal>
          <div className="shop-hero-card-stack">
            <SafeImage
              path="/images/product-box.png"
              alt="North Star MD treatment kit"
              className="shop-hero-card shop-hero-card-back"
              loading="eager"
            />
            <SafeImage
              path="/images/step-04-delivery-kit.png"
              alt="Discreet pharmacy delivery"
              className="shop-hero-card shop-hero-card-mid"
              loading="eager"
            />
            <SafeImage
              path="/images/tirzepatide-hero.png"
              alt="Tirzepatide+ program"
              className="shop-hero-card shop-hero-card-front"
              loading="eager"
            />
          </div>
          <Link to="/shop/product/tirzepatide-plus" className="shop-hero-floating-badge">
            <span className="shop-pulse-dot" />
            Most popular · Tirzepatide+
          </Link>
        </div>
      </div>
    </section>
  );
}
