const TRUST_ITEMS = [
  { icon: "✓", label: "FDA-Registered Pharmacy" },
  { icon: "✓", label: "Licensed Physicians" },
  { icon: "✓", label: "Discreet Shipping" },
  { icon: "✓", label: "Secure Checkout" },
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
