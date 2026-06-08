const TRUST_ITEMS = [
  "U.S. Licensed Pharmacies",
  "Board-Certified Physicians",
  "HIPAA-Compliant Portal",
  "Free Expedited Shipping",
  "Only Charged If Prescribed",
];

export function ShopMarquee() {
  const track = [...TRUST_ITEMS, ...TRUST_ITEMS];

  return (
    <div className="shop-marquee" aria-hidden="true">
      <div className="shop-marquee-track">
        {track.map((label, i) => (
          <span key={`${label}-${i}`} className="shop-marquee-item">
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M8 1L9.2 6.2L14.5 7.2L9.2 8.2L8 13.5L6.8 8.2L1.5 7.2L6.8 6.2L8 1Z"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinejoin="round"
              />
            </svg>
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
