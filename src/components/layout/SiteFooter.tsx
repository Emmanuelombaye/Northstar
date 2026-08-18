export function SiteFooter() {
  return (
    <footer className="pharm-footer">
      <div className="pharm-wrap pharm-footer-grid">
        <div className="pharm-footer-brand">
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
            <svg
              className="logo-star"
              viewBox="0 0 48 48"
              fill="none"
              style={{ width: 32, height: 32, color: "var(--gold)" }}
            >
              <path
                d="M24 4L27 18L41 21L27 24L24 38L21 24L7 21L21 18L24 4Z"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
            </svg>
            <span style={{ fontFamily: "var(--serif)", fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              North Star MD
            </span>
          </div>
          <p className="pharm-footer-desc">
            Provider-guided telehealth for eligible adults. Compounded medications, when prescribed, are prepared by
            licensed U.S. pharmacies and are not FDA-approved finished products.
          </p>
        </div>

        <div>
          <h4>Treatments</h4>
          <ul>
            <li><a href="/treatments">Treatments</a></li>
            <li><a href="/semaglutide">Semaglutide</a></li>
            <li><a href="/tirzepatide">Tirzepatide</a></li>
            <li><a href="/portal">Patient Center</a></li>
          </ul>
        </div>

        <div>
          <h4>Explore</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/advisors">Clinical care</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/how-it-works">How It Works</a></li>
            <li><a href="/faq">FAQ Support</a></li>
          </ul>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li><a href="/policies">All policies</a></li>
            <li><a href="/policies/consent-to-telehealth">Telehealth Consent</a></li>
            <li><a href="/policies/hipaa-notice">HIPAA Notice</a></li>
            <li><a href="/policies/terms-of-use">Terms of Use</a></li>
            <li><a href="/policies/fda-and-medical-disclaimer">Medical Disclaimer</a></li>
            <li><a href="/policies/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="pharm-wrap">
        <div className="pharm-footer-bottom">
          <p>&copy; 2026 North Star MD. All rights reserved.</p>
          <p>Licensed clinical review required. Treatment not guaranteed.</p>
        </div>
      </div>
    </footer>
  );
}
