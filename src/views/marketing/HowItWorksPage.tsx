'use client'

import { Link } from '../../lib/routerAdapter'
import { RetroClosingSection } from '../../components/nexa-shell/RetroShared'
import { YUCCA } from '../../lib/nexa-shell/home-data'
import '../../styles/yucca-home-index.css'

const STEPS = [
  {
    n: '01',
    title: 'Choose a treatment path',
    body: 'Select Semaglutide or Tirzepatide and begin a clinical questionnaire with North Star MD.',
  },
  {
    n: '02',
    title: 'Complete secure intake',
    body: 'Share medical history, body metrics, and shipping details so a licensed provider can evaluate eligibility.',
  },
  {
    n: '03',
    title: 'Provider review',
    body: 'A state-licensed U.S. clinician reviews your intake — typically within about 24 hours. Completing intake does not guarantee a prescription.',
  },
  {
    n: '04',
    title: 'Pharmacy fulfillment if prescribed',
    body: 'If approved, a licensed U.S. compounding pharmacy prepares your medication and ships discreetly to an eligible address.',
  },
  {
    n: '05',
    title: 'Ongoing care',
    body: 'Follow-up, titration requests, and care-team messaging continue through your secure patient portal while you are on an active protocol.',
  },
]

export function HowItWorksPage() {
  return (
    <div className="yucca-home ns-yucca" data-retro-scope style={{ paddingTop: '2rem' }}>
      <section className="goal-hiw-section pax-hiw" style={{ paddingBottom: '2rem' }}>
        <div className="goal-hiw-container pax-hiw__container">
          <div className="goal-hiw-heading pax-hiw__heading">
            <p className="goal-hiw-eyebrow pax-hiw__eyebrow">North Star MD</p>
            <h1>
              How care works — <em>evaluation before medication</em>
            </h1>
            <p style={{ maxWidth: '40rem', margin: '0.75rem auto 0', color: 'var(--text-body, #3a4d61)' }}>
              Clinical intake, licensed provider review, and pharmacy fulfillment only when treatment is appropriate.
              Compounded medications are not FDA-approved finished products.
            </p>
          </div>

          <ol className="goal-hiw-grid pax-hiw__grid" style={{ listStyle: 'none', padding: 0 }}>
            {STEPS.map((step) => (
              <li key={step.n} className="goal-hiw-card pax-hiw__card">
                <div className="pax-hiw__copy">
                  <span className="goal-hiw-tag pax-hiw__step">{step.n}</span>
                  <h2 style={{ fontSize: '1.25rem' }}>{step.title}</h2>
                  <p>{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <img
              src={`${YUCCA}/expt-tirz-sema-vials-together.png`}
              alt="Compounded Semaglutide and Tirzepatide vials with clinical labels"
              loading="lazy"
              style={{ maxWidth: 'min(420px, 90%)', height: 'auto' }}
            />
          </div>

          <p style={{ textAlign: 'center', marginTop: '1.75rem' }}>
            <Link href="/start" className="goal-product-cta goal-product-cta--primary" style={{ display: 'inline-flex' }}>
              Check Eligibility
            </Link>
          </p>
        </div>
      </section>
      <RetroClosingSection />
    </div>
  )
}
