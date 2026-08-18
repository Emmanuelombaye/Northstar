'use client'

import { useState } from 'react'
import { Link } from '../../lib/routerAdapter'
import {
  HOME_FAQS,
  HOME_HIW_STEPS,
  HOME_TREATMENTS,
} from '../../lib/nexa-shell/home-data'
import { RetroClosingSection, RetroWhySection } from './RetroShared'

const FAQ_MEDIA = [
  { src: '/images/home/faq-provider-review.png', alt: 'Provider review support iconography' },
  { src: '/images/home/faq-shipping-pharmacy.png', alt: 'Pharmacy shipping support iconography' },
  { src: '/images/home/faq-safety-eligibility.png', alt: 'Safety and eligibility support iconography' },
] as const

function HeroSection() {
  return (
    <section className="ns-hero ns-hero-banner-mode" aria-label="Introduction">
      <div className="ns-hero-slides">
        <div className="ns-hero-slide is-active">
          <img
            src="/upper image on that landing page.png"
            data-fallback="/new upper landing image.png"
            alt="Physician-guided longevity with North Star MD"
            className="ns-hero-desktop-img"
            decoding="async"
            fetchPriority="high"
          />
          <img
            src="/images/heroheaderformobiledisplay.png"
            data-fallback="/images/heroheaderformobiledisplay.webp"
            alt="Physician-guided longevity with North Star MD"
            className="ns-hero-mobile-img"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      <div className="ns-hero-hotspots">
        <Link to="/start" className="ns-hero-hotspot ns-hero-hotspot-start" aria-label="Start your journey" />
        <a
          href="#how-it-works-home"
          className="ns-hero-hotspot ns-hero-hotspot-how"
          aria-label="How it works"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('how-it-works-home')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>

      <h1 className="sr-only">
        Find your North Star <em>before</em> decline sets in.
      </h1>
      <div className="ns-hero-treatment-copy" aria-hidden="true">
        <p className="ns-hero-treatment-kicker">North Star MD Treatments</p>
        <h2>Semaglutide &amp; Tirzepatide care</h2>
        <p>Clinician-reviewed GLP-1 treatment pathways. If prescribed, fulfilled by licensed U.S. pharmacies.</p>
      </div>
      <p className="sr-only">
        Physician-guided longevity, metabolic health, and wellness care — licensed U.S. providers,
        compounded therapies, and discreet delivery wherever you are.
      </p>
    </section>
  )
}

function TreatmentsSection() {
  const [activeId, setActiveId] = useState<(typeof HOME_TREATMENTS)[number]['id']>(HOME_TREATMENTS[0].id)
  const active = HOME_TREATMENTS.find((t) => t.id === activeId) ?? HOME_TREATMENTS[0]

  return (
    <section id="treatments" className="ns-atlas" data-active={activeId}>
      <div className="ns-atlas__backdrop" aria-hidden="true">
        <span className="ns-atlas__orb ns-atlas__orb--a" />
        <span className="ns-atlas__orb ns-atlas__orb--b" />
        <span className="ns-atlas__stars" />
      </div>

      <div className="ns-atlas__container">
        <header className="ns-atlas__head">
          <p className="ns-atlas__eyebrow">North Star MD · GLP-1 care</p>
          <h2>
            Two pathways. <em>One clinical standard.</em>
          </h2>
          <p className="ns-atlas__lede">
            Semaglutide or Tirzepatide — reviewed by a licensed U.S. provider. Charged only if prescribed.
          </p>
        </header>

        <div className="ns-atlas__stage" role="tablist" aria-label="Choose a treatment">
          {HOME_TREATMENTS.map((treatment) => {
            const selected = treatment.id === activeId
            return (
              <article
                key={treatment.id}
                className={`ns-atlas__panel${selected ? ' is-active' : ''}`}
                role="tab"
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveId(treatment.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setActiveId(treatment.id)
                  }
                }}
              >
                <div className="ns-atlas__panel-top">
                  <span className="ns-atlas__pathway">{treatment.badge}</span>
                  <span className="ns-atlas__cadence">{treatment.kicker}</span>
                </div>

                <div className="ns-atlas__vial-wrap">
                  <img
                    className="ns-atlas__vial"
                    src={treatment.vial}
                    alt=""
                    loading={selected ? 'eager' : 'lazy'}
                  />
                </div>

                <h3 className="ns-atlas__title">{treatment.label}</h3>
                <p className="ns-atlas__desc">{treatment.description}</p>

                <dl className="ns-atlas__facts">
                  {treatment.facts.map((fact) => (
                    <div key={fact.k} className="ns-atlas__fact">
                      <dt>{fact.k}</dt>
                      <dd>{fact.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="ns-atlas__price">
                  <span className="ns-atlas__price-main">
                    From {treatment.price}
                    <small>{treatment.period}</small>
                  </span>
                  <span className="ns-atlas__price-note">{treatment.priceNote}</span>
                </div>

                <div className="ns-atlas__ctas">
                  <Link
                    href={`/start?program=${treatment.program}`}
                    className="ns-atlas__cta ns-atlas__cta--primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Check Eligibility
                  </Link>
                  <Link
                    href={treatment.learnHref}
                    className="ns-atlas__cta ns-atlas__cta--ghost"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Learn more
                  </Link>
                </div>
              </article>
            )
          })}
        </div>

        <p className="ns-atlas__legal">{active.detail}</p>
      </div>
    </section>
  )
}

function HomeHiwSection() {
  return (
    <section id="how-it-works-home" className="goal-hiw-section pax-hiw">
      <div className="goal-hiw-container pax-hiw__container">
        <div className="goal-hiw-heading pax-hiw__heading">
          <p className="goal-hiw-eyebrow pax-hiw__eyebrow">How North Star MD works</p>
          <h2>
            Intake, clinician review, then fulfillment <em>only if prescribed</em>
          </h2>
        </div>
        <div className="goal-hiw-grid pax-hiw__grid" role="list">
          {HOME_HIW_STEPS.map((step) => (
            <article key={step.n} className="goal-hiw-card pax-hiw__card" role="listitem">
              <div className="pax-hiw__copy">
                <span className="goal-hiw-tag pax-hiw__step" aria-label={`Step ${step.n}`}>
                  {step.n}
                </span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
              <div className="goal-hiw-media pax-hiw__media">
                <img src={step.image} alt={step.alt} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Link href="/how-it-works" className="goal-product-cta goal-product-cta--ghost" style={{ display: 'inline-flex' }}>
            See full care path
          </Link>
        </p>
      </div>
    </section>
  )
}

function FaqSection() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)

  return (
    <section className="retro-faqs">
      <div className="ns-faq-media-grid" aria-hidden="true">
        {FAQ_MEDIA.map((item) => (
          <figure key={item.src} className="ns-faq-media-card">
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
          </figure>
        ))}
      </div>
      <div className="retro-faqs__head">
        <h2 className="retro-faqs__heading">Clinical FAQs</h2>
        <p className="retro-faqs__sub">Straight answers about eligibility, compounding, and provider review.</p>
      </div>
      <ul className="retro-faqs__list">
        {HOME_FAQS.map((faq, index) => {
          const open = activeFaq === index
          return (
            <li key={faq.q} className="retro-faqs__item" data-faq-item data-open={open ? 'true' : 'false'}>
              <button
                type="button"
                className="retro-faqs__toggle"
                aria-expanded={open}
                onClick={() => setActiveFaq(open ? null : index)}
              >
                <span className="retro-faqs__question">{faq.q}</span>
                <span className="retro-faqs__icon" aria-hidden="true">
                  +
                </span>
              </button>
              <div className="retro-faqs__panel" role="region" hidden={!open}>
                <div className="retro-faqs__panel-inner">
                  <div className="retro-faqs__answer">
                    <p>{faq.lead}</p>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      <p style={{ textAlign: 'center', marginTop: '1.25rem' }}>
        <Link href="/faq">See all FAQs →</Link>
      </p>
    </section>
  )
}

/** North Star MD homepage — Nexa Yucca shell + Northstar brand */
export default function YuccaHome() {
  return (
    <div className="yucca-home u5-type ns-yucca" data-retro-scope>
      <HeroSection />
      <TreatmentsSection />
      <HomeHiwSection />
      <RetroWhySection />
      <FaqSection />
      <RetroClosingSection />
    </div>
  )
}
