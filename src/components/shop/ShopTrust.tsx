import type { CSSProperties } from "react";

const ITEMS = [
  {
    title: "Licensed clinicians",
    desc: "Every order reviewed by a U.S. provider before pharmacy fulfillment.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4v24M8 12h16M10 20h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "503A pharmacies",
    desc: "Compounded and dispensed by licensed U.S. pharmacy partners.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="10" width="20" height="18" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11 10V7a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Peak-powered portal",
    desc: "HIPAA checkout, messaging, refills, and tracking in one place.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M8 6h16v20H8z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M12 12h8M12 16h8M12 20h5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Cancel anytime",
    desc: "Only charged if prescribed. Change or pause through your portal.",
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.4" />
        <path d="M16 10v7l4 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function ShopTrust() {
  return (
    <section className="shop-trust shop-trust-premium">
      <div className="shop-wrap shop-trust-inner">
        {ITEMS.map((item, i) => (
          <div key={item.title} className="shop-trust-card" data-reveal style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}>
            <div className="shop-trust-icon">{item.icon}</div>
            <strong>{item.title}</strong>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
