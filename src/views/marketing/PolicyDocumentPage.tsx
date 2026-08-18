'use client'

import { Link } from '@/lib/routerAdapter'
import { POLICIES, type PolicyDoc } from '../../lib/policies'
import { PolicyBody } from '../../components/ns/PolicyBody'

export function PolicyDocumentPage({ doc }: { doc: PolicyDoc }) {
  const handlePrint = () => window.print()

  return (
    <main className="ns-page legal-page ns-policy-page">
      <section className="ns-policy-hero">
        <div className="ns-wrap">
          <p className="eyebrow">{doc.eyebrow}</p>
          <h1>{doc.title}</h1>
          <p className="ns-lead">{doc.lead}</p>
          <div className="legal-hero-meta">
            <span className="legal-date-chip">Last updated: {doc.updated}</span>
            <button type="button" className="legal-print-btn" onClick={handlePrint}>
              Print / Save
            </button>
          </div>
        </div>
      </section>

      <nav className="ns-policy-nav" aria-label="Compliance documents">
        <div className="ns-wrap ns-policy-nav-row">
          {POLICIES.map((item) => (
            <Link
              key={item.slug}
              to={item.href}
              className={item.slug === doc.slug ? 'is-active' : undefined}
            >
              {item.navLabel}
            </Link>
          ))}
        </div>
      </nav>

      <section className="ns-section legal-body-section">
        <div className="ns-wrap">
          <article className="legal-card-container ns-policy-article">
            <PolicyBody doc={doc} />
            <hr className="legal-divider" />
            <div className="legal-footer-links">
              <span>All compliance documents</span>
              <div className="legal-chip-group">
                <Link to="/policies" className="legal-chip">
                  Document library
                </Link>
                <Link to="/start" className="btn btn-gold btn-pill">
                  Check eligibility
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  )
}
