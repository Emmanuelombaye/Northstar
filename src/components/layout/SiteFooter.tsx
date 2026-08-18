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
          <h4>Compliance Documents</h4>
          <ul>
            <li><a href="https://docs.google.com/document/d/16NYEkgaubSGBqdRZfH1mBFV0G-Xc_V7ComjIPb2KQe4/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Telehealth Consent</a></li>
            <li><a href="https://docs.google.com/document/d/1_rpphjHgaBxcrYLN3xm8xZvoAHh_xK1wTaT7wgt00aY/edit?tab=t.0" target="_blank" rel="noopener noreferrer">HIPAA Notice</a></li>
            <li><a href="https://docs.google.com/document/d/1RKdlEuHLxAIuh871y6T4oaWh_YNClZ1WGXlng4ISVeM/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Terms of Use</a></li>
            <li><a href="https://docs.google.com/document/d/1sQx8uWGtl51FHtJoleL7tFEE2hUTLWDLXOI0WqFwn_A/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Medical Disclaimer</a></li>
            <li><a href="https://docs.google.com/document/d/1AgGkg0ok-ELK36S_OTUSe7Ef-X1lt24f3M0fg-ef0fs/edit?tab=t.0" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
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
