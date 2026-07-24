"use client";

import { useEffect, useState } from "react";
import { Link } from "@/lib/routerAdapter";
import { SafeImage } from "./SafeImage";

const BANNERS = [
  {
    title: "Physician-guided longevity,",
    titleEm: "delivered to you.",
    subtitle:
      "Browse compounded protocols for metabolic health, cellular energy, and recovery — licensed U.S. providers and discreet pharmacy shipping.",
    primary: { label: "Shop treatments", href: "#catalog" },
    secondary: { label: "How it works", to: "/how-it-works" },
    image: "/images/hero-photo.png",
  },
  {
    title: "Metabolic reset with",
    titleEm: "GLP-1 protocols.",
    subtitle: "Semaglutide and Tirzepatide programs with clinical oversight from $146/mo.",
    primary: { label: "Browse weight loss", href: "#category-weight-loss" },
    secondary: { label: "View GLP-1", to: "/semaglutide" },
    image: "/images/weight-loss-card.png",
  },
  {
    title: "Cellular energy with",
    titleEm: "NAD+ support.",
    subtitle: "Physician-guided rejuvenation for mitochondrial health and cognitive clarity.",
    primary: { label: "Explore longevity", href: "#category-longevity" },
    secondary: { label: "Learn about NAD+", to: "/nad" },
    image: "/images/nad-hero.png",
  },
];

export function ShopBannerCarousel() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => setActive((i) => (i + 1) % BANNERS.length), 6000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="pharm-hero" aria-label="Store introduction">
      <div className="pharm-hero-slides">
        {BANNERS.map((b, i) => (
          <div key={b.title} className={`pharm-hero-slide${i === active ? " is-active" : ""}`}>
            <SafeImage path={b.image} alt="" loading="eager" />
            <div className="pharm-hero-overlay" />
            <div className="pharm-wrap pharm-hero-copy">
              <h1>
                {b.title} <em>{b.titleEm}</em>
              </h1>
              <p>{b.subtitle}</p>
              <div className="pharm-hero-actions">
                <a href={b.primary.href} className="btn btn-gold btn-pill">
                  {b.primary.label}
                </a>
                <Link to={b.secondary.to} className="btn btn-ghost-light btn-pill">
                  {b.secondary.label}
                </Link>
              </div>
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
    </section>
  );
}
