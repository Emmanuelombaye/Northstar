export function SiteFooter() {
  return (
    <footer
      style={{
        background: "var(--navy)",
        color: "var(--white)",
        padding: "48px 0 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        style={{
          width: "var(--page)",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "32px",
          paddingInline: "var(--gutter)",
        }}
      >
        <div style={{ maxWidth: 320 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
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
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              North Star MD
            </span>
          </div>
          <p style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>
            Physician-guided longevity, metabolic wellness, and premium preventative care delivered safely
            wherever you are.
          </p>
        </div>
        <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
          <div>
            <h4
              style={{
                fontSize: 9.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 12,
              }}
            >
              Treatments
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 12,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <li>
                <a href="/tirzepatide">Tirzepatide+</a>
              </li>
              <li>
                <a href="/semaglutide">Semaglutide+</a>
              </li>
              <li>
                <a href="/nad">NAD+</a>
              </li>
              <li>
                <a href="/sermorelin">Sermorelin</a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontSize: 9.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 12,
              }}
            >
              Explore
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 12,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <li>
                <a href="/" style={{ color: "var(--gold)" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/advisors">Clinical care</a>
              </li>
              <li>
                <a href="/shop">Shop</a>
              </li>

              <li>
                <a href="/how-it-works">How It Works</a>
              </li>
              <li>
                <a href="/faq">FAQ Support</a>
              </li>
            </ul>
          </div>
          <div>
            <h4
              style={{
                fontSize: 9.5,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 12,
              }}
            >
              Compliance Legals
            </h4>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 8,
                fontSize: 12,
                color: "rgba(255,255,255,0.85)",
              }}
            >
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
              <li>
                <a href="/telehealth-consent">Telehealth Consent</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "var(--page)",
          margin: "36px auto 0",
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          fontSize: 11,
          color: "rgba(255,255,255,0.4)",
          paddingInline: "var(--gutter)",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        <span>&copy; 2026 North Star MD. All rights reserved.</span>
        <span>Guided by science. Designed for you.</span>
      </div>
    </footer>
  );
}
