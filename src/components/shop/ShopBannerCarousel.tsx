import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SafeImage } from "./SafeImage";

const BANNERS = [
  {
    title: "My Pharmacy",
    subtitle: "Physician-guided treatments, delivered to your door.",
    cta: "Shop all treatments",
    href: "#catalog",
    image: "/images/hero-photo.png",
  },
  {
    title: "Weight Loss Programs",
    subtitle: "GLP-1 & dual-pathway protocols from $146/mo.",
    cta: "Browse weight loss",
    href: "#category-weight-loss",
    image: "/images/weight-loss-card.png",
  },
  {
    title: "Longevity & NAD+",
    subtitle: "Cellular energy support with licensed clinicians.",
    cta: "Explore longevity",
    href: "#category-longevity",
    image: "/images/nad-hero.png",
  },
];

export function ShopBannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % BANNERS.length), 5000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="pharm-hero" aria-label="Store promotions">
      <div className="pharm-hero-slides">
        {BANNERS.map((b, i) => (
          <div key={b.title} className={`pharm-hero-slide${i === active ? " is-active" : ""}`}>
            <SafeImage path={b.image} alt="" loading="eager" />
            <div className="pharm-hero-overlay" />
            <div className="pharm-wrap pharm-hero-copy">
              <h1>{b.title}</h1>
              <p>{b.subtitle}</p>
              <a href={b.href} className="pharm-hero-cta">
                {b.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="pharm-hero-dots" role="tablist" aria-label="Banner slides">
        {BANNERS.map((b, i) => (
          <button
            key={b.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}: ${b.title}`}
            className={i === active ? "is-active" : ""}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      <div className="pharm-wrap pharm-hero-quick">
        <Link to="/shop/product/tirzepatide-plus">Tirzepatide+</Link>
        <Link to="/shop/product/semaglutide-plus">Semaglutide+</Link>
        <Link to="/shop/product/nad-rejuvenation">NAD+</Link>
        <Link to="/shop/product/testosterone-trt">TRT</Link>
      </div>
    </section>
  );
}
