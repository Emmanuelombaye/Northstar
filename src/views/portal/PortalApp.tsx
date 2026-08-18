"use client";

import { useEffect, useState, type FormEvent } from "react";
import { Link, Navigate, useNavigate, useParams } from "@/lib/routerAdapter";
import {
  DEMO_USER,
  getSessionUser,
  hasPortalPurchase,
  loginPortal,
  logoutPortal,
  type PortalUser,
} from "../../lib/portalAuth";

const NAV = [
  { id: "dashboard", label: "Dashboard" },
  { id: "appointments", label: "Appointments" },
  { id: "messages", label: "Messages" },
  { id: "health", label: "Health", children: ["records", "labs", "vitals", "wellness", "plans"] },
  { id: "medications", label: "Medications" },
  { id: "monitoring", label: "Monitoring" },
  { id: "billing", label: "Billing" },
  { id: "documents", label: "Documents" },
  { id: "settings", label: "Settings" },
  { id: "support", label: "Support" },
] as const;

const MOBILE_TABS = ["dashboard", "appointments", "messages", "health"] as const;
const COMPLIANCE_DOCS = [
  { label: "Telehealth Consent", href: "https://docs.google.com/document/d/16NYEkgaubSGBqdRZfH1mBFV0G-Xc_V7ComjIPb2KQe4/edit?tab=t.0" },
  { label: "HIPAA Notice", href: "https://docs.google.com/document/d/1_rpphjHgaBxcrYLN3xm8xZvoAHh_xK1wTaT7wgt00aY/edit?tab=t.0" },
  { label: "Terms of Use", href: "https://docs.google.com/document/d/1RKdlEuHLxAIuh871y6T4oaWh_YNClZ1WGXlng4ISVeM/edit?tab=t.0" },
  { label: "Medical Disclaimer", href: "https://docs.google.com/document/d/1sQx8uWGtl51FHtJoleL7tFEE2hUTLWDLXOI0WqFwn_A/edit?tab=t.0" },
  { label: "Privacy Policy", href: "https://docs.google.com/document/d/1AgGkg0ok-ELK36S_OTUSe7Ef-X1lt24f3M0fg-ef0fs/edit?tab=t.0" },
] as const;

function SignIn() {
  const navigate = useNavigate();
  const existing = getSessionUser();
  const [email, setEmail] = useState(DEMO_USER.email);
  const [password, setPassword] = useState(DEMO_USER.password);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (!hasPortalPurchase()) return <PortalPurchaseGate />;
  if (existing) return <Navigate to="/portal/dashboard" replace />;

  const submit = (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      loginPortal(email, password);
      navigate("/portal/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sign in failed.");
    } finally {
      setBusy(false);
    }
  };

  const enterDemo = () => {
    setEmail(DEMO_USER.email);
    setPassword(DEMO_USER.password);
    setError("");
    setBusy(true);
    try {
      loginPortal(DEMO_USER.email, DEMO_USER.password);
      navigate("/portal/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Demo login failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="pp-auth">
      <div className="pp-auth-visual" aria-hidden="true">
        <div className="pp-auth-glow" />
        <div className="pp-auth-copy">
          <p className="eyebrow eyebrow-light">Patient Center</p>
          <h1>Your care, clearly arranged.</h1>
          <p>
            Appointments, records, monitoring, medications, billing, and support — one North Star MD
            experience.
          </p>
        </div>
      </div>
      <div className="pp-auth-panel">
        <Link to="/" className="pp-auth-back">
          ← Back to North Star MD
        </Link>
        <h2>Sign in</h2>
        <p className="pp-auth-sim">Demo accounts stored locally in your browser — not a production system.</p>
        <div className="pc-cred-card">
          <p>Demo account</p>
          <code>{DEMO_USER.email}</code>
          <code>password: {DEMO_USER.password}</code>
        </div>
        <button type="button" className="btn btn-gold btn-pill btn-block" onClick={enterDemo} disabled={busy}>
          {busy ? "Signing in…" : "Enter demo Patient Center"}
        </button>
        <div className="pc-auth-divider">
          <span>or sign in with form</span>
        </div>
        <form className="pp-auth-form" onSubmit={submit}>
          <label>
            Email
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Password
            <input
              type="password"
              required
              minLength={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          {error && <p className="sf-error">{error}</p>}
          <button type="submit" className="btn btn-navy btn-pill btn-block" disabled={busy}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

function PortalPurchaseGate() {
  return (
    <div className="pp-auth">
      <div className="pp-auth-visual" aria-hidden="true">
        <div className="pp-auth-glow" />
        <div className="pp-auth-copy">
          <p className="eyebrow eyebrow-light">Patient Center Access</p>
          <h1>Complete checkout to unlock your portal.</h1>
          <p>
            North Star MD portal access opens after enrollment checkout so your treatment plan,
            shipping, and support data are tied to an active purchase.
          </p>
        </div>
      </div>
      <div className="pp-auth-panel">
        <Link to="/" className="pp-auth-back">
          ← Back to North Star MD
        </Link>
        <h2>Portal locked</h2>
        <p className="pp-auth-sim">
          Purchase and complete intake first, then return to sign in.
        </p>
        <div className="ns-portal-list">
          <article>
            <strong>Step 1</strong>
            <span>Choose Semaglutide or Tirzepatide plan.</span>
          </article>
          <article>
            <strong>Step 2</strong>
            <span>Complete medical intake and checkout.</span>
          </article>
          <article>
            <strong>Step 3</strong>
            <span>Sign in to Patient Center and track care.</span>
          </article>
        </div>
        <div style={{ display: "grid", gap: 10, marginTop: 18 }}>
          <Link to="/start" className="btn btn-gold btn-pill btn-block">
            Start Intake & Checkout
          </Link>
          <Link to="/shop" className="btn btn-navy btn-pill btn-block">
            View Treatments
          </Link>
        </div>
        <div className="pc-compliance-docs">
          <p>Submission compliance documents</p>
          <ul>
            {COMPLIANCE_DOCS.map((doc) => (
              <li key={doc.href}>
                <a href={doc.href} target="_blank" rel="noopener noreferrer">
                  {doc.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function SectionContent({ user, section }: { user: PortalUser; section: string }) {
  const planLabel =
    user.plan === "nad" ? "NAD+ Protocol" : user.plan === "peptide" ? "Sermorelin" : "GLP-1 Weight Management";

  switch (section) {
    case "dashboard":
      return (
        <>
          <h1>Welcome back, {user.name.split(" ")[0]}</h1>
          <p className="ns-lead">Your North Star MD care hub — intake, prescriptions, and follow-up in one place.</p>
          <div className="ns-portal-cards">
            <article>
              <h3>Active plan</h3>
              <p>{planLabel}</p>
              <span className="ns-portal-badge">Pending clinical approval</span>
            </article>
            <article>
              <h3>Next review</h3>
              <p>Licensed provider review within 24 hours of intake.</p>
              <span className="ns-portal-badge ns-portal-badge-muted">Scheduled</span>
            </article>
            <article>
              <h3>Membership</h3>
              <p>{user.tier === "1mo" ? "1-month" : user.tier === "6mo" ? "6-month" : "3-month"} plan</p>
              <span className="ns-portal-badge ns-portal-badge-muted">Active</span>
            </article>
          </div>
        </>
      );
    case "appointments":
      return (
        <>
          <h1>Appointments</h1>
          <p className="ns-lead">Upcoming consults and visit history.</p>
          <div className="ns-portal-list">
            <article>
              <strong>Initial clinical review</strong>
              <span>Async · within 24h</span>
            </article>
            <article>
              <strong>Follow-up check-in</strong>
              <span>Video · pending schedule</span>
            </article>
          </div>
        </>
      );
    case "messages":
      return (
        <>
          <h1>Messages</h1>
          <p className="ns-lead">Secure messaging with your care team.</p>
          <div className="ns-portal-list">
            <article>
              <strong>Care team</strong>
              <p>Your intake has been received. A licensed provider will review within 24 hours.</p>
            </article>
          </div>
        </>
      );
    case "health":
      return (
        <>
          <h1>Health records</h1>
          <p className="ns-lead">Labs, vitals, wellness plans, and clinical notes.</p>
          <div className="ns-portal-cards">
            <article>
              <h3>Intake summary</h3>
              <p>Submitted via Find my treatment flow</p>
            </article>
            <article>
              <h3>Biomarkers</h3>
              <p>Pending lab orders after clinical approval</p>
            </article>
          </div>
        </>
      );
    case "medications":
      return (
        <>
          <h1>Medications</h1>
          <p className="ns-lead">Prescriptions, refills, and reminders.</p>
          <div className="ns-portal-list">
            <article>
              <strong>{planLabel}</strong>
              <span>Awaiting prescription · post-approval</span>
            </article>
          </div>
        </>
      );
    case "monitoring":
      return (
        <>
          <h1>Monitoring</h1>
          <p className="ns-lead">Track weight, glucose, blood pressure, and more.</p>
          <div className="ns-portal-cards">
            <article>
              <h3>Weight</h3>
              <p>Log entries after your plan activates</p>
            </article>
          </div>
        </>
      );
    case "billing":
      return (
        <>
          <h1>Billing</h1>
          <p className="ns-lead">Invoices and payment methods.</p>
          <div className="ns-portal-list">
            <article>
              <strong>Authorization hold</strong>
              <span>Simulated · no charge until prescribed</span>
            </article>
          </div>
        </>
      );
    case "documents":
      return (
        <>
          <h1>Documents</h1>
          <p className="ns-lead">Consent forms, lab PDFs, and care summaries.</p>
          <div className="pc-compliance-docs">
            <p>Compliance documents</p>
            <ul>
              {COMPLIANCE_DOCS.map((doc) => (
                <li key={doc.href}>
                  <a href={doc.href} target="_blank" rel="noopener noreferrer">
                    {doc.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
    case "settings":
      return (
        <>
          <h1>Settings</h1>
          <p className="ns-lead">Profile, notifications, and security.</p>
        </>
      );
    case "support":
      return (
        <>
          <h1>Support</h1>
          <p className="ns-lead">24/7 patient support — contact your care coordinator.</p>
        </>
      );
    default:
      return <h1>{section}</h1>;
  }
}

function PortalShell({ user }: { user: PortalUser }) {
  const navigate = useNavigate();
  const rawParams = useParams();
  const rawSection = rawParams.section;
  const section = Array.isArray(rawSection) ? rawSection[0] : (rawSection || "dashboard");
  const [healthOpen, setHealthOpen] = useState(section === "health");
  const [moreOpen, setMoreOpen] = useState(false);

  useEffect(() => {
    setHealthOpen(section === "health");
  }, [section]);

  const signOut = () => {
    logoutPortal();
    navigate("/portal");
  };

  return (
    <div className="pc-app">
      <aside className="pc-sidebar">
        <Link to="/" className="pc-sidebar-brand">
          North Star MD
        </Link>
        <nav className="pc-nav">
          {NAV.map((item) =>
            "children" in item && item.children ? (
              <div key={item.id} className="pc-nav-group">
                <button
                  type="button"
                  className={`pc-nav-link${section === item.id ? " is-active" : ""}`}
                  onClick={() => {
                    setHealthOpen(!healthOpen);
                    navigate(`/portal/${item.id}`);
                  }}
                >
                  {item.label}
                </button>
                {healthOpen && (
                  <div className="pc-nav-children">
                    {item.children.map((child) => (
                      <Link key={child} to={`/portal/${item.id}/${child}`} className="pc-nav-child">
                        {child}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.id}
                to={`/portal/${item.id}`}
                className={`pc-nav-link${section === item.id ? " is-active" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <button type="button" className="pc-signout" onClick={signOut}>
          Sign out
        </button>
      </aside>

      <div className="pc-main">
        <header className="pc-top">
          <span>{user.name}</span>
          <Link to="/shop" className="ns-text-link">
            Shop
          </Link>
        </header>
        <main className="pc-content">
          <SectionContent user={user} section={section} />
        </main>
      </div>

      <nav className="pc-tabbar" aria-label="Mobile navigation">
        {MOBILE_TABS.map((tab) => (
          <Link key={tab} to={`/portal/${tab}`} className={section === tab ? "is-active" : ""}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Link>
        ))}
        <button type="button" className={moreOpen ? "is-active" : ""} onClick={() => setMoreOpen(!moreOpen)}>
          More
        </button>
      </nav>

      {moreOpen && (
        <div className="pc-more">
          {NAV.filter((n) => !MOBILE_TABS.includes(n.id as (typeof MOBILE_TABS)[number])).map((item) => (
            <Link key={item.id} to={`/portal/${item.id}`} onClick={() => setMoreOpen(false)}>
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function PortalGate() {
  const user = getSessionUser();
  if (!user) return <Navigate to="/portal" replace />;
  return <PortalShell user={user} />;
}

export function PortalApp() {
  const rawParams = useParams();
  const rawSection = rawParams.section;
  const section = Array.isArray(rawSection) ? rawSection[0] : rawSection;
  const user = getSessionUser();

  if (!hasPortalPurchase()) return <PortalPurchaseGate />;

  if (!section) {
    if (user) return <Navigate to="/portal/dashboard" replace />;
    return <SignIn />;
  }

  if (!user) return <Navigate to="/portal" replace />;
  return <PortalShell user={user} />;
}
