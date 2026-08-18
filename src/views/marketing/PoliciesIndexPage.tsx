'use client'

import { Link } from '@/lib/routerAdapter'
import { POLICIES } from '../../lib/policies'

export function PoliciesIndexPage() {
  return (
    <main className="ns-page legal-page ns-policy-page">
      <section className="ns-policy-hero">
        <div className="ns-wrap">
          <p className="eyebrow">North Star MD</p>
          <h1>Policies</h1>
          <p className="ns-lead">
            Read each compliance document on this website. These pages are the hosted copies of our
            Telehealth Consent, HIPAA Notice, Terms of Use, Medical Disclaimer, and Privacy Policy.
          </p>
        </div>
      </section>

      <section className="ns-section legal-body-section">
        <div className="ns-wrap">
          <ul className="ns-policy-index">
            {POLICIES.map((doc) => (
              <li key={doc.slug}>
                <Link to={doc.href} className="ns-policy-index-card">
                  <span className="ns-policy-index-kicker">{doc.eyebrow}</span>
                  <strong>{doc.title}</strong>
                  <span>{doc.lead}</span>
                  <em>Read on site →</em>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
