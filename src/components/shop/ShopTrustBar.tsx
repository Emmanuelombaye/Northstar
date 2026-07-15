const TRUST_ITEMS = [
  { icon: "✓", label: "503A Compounding Pharmacies" },
  { icon: "✓", label: "Licensed U.S. Physicians" },
  { icon: "✓", label: "Cold-Chain Shipping" },
  { icon: "✓", label: "HIPAA-Aligned Intake" },
];

export function ShopTrustBar() {
  return (
    <div className="pharm-trust-bar">
      <div className="pharm-wrap pharm-trust-inner">
        {TRUST_ITEMS.map((item) => (
          <span key={item.label} className="pharm-trust-item">
            <span className="pharm-trust-icon" aria-hidden="true">
              {item.icon}
            </span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
