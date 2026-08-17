'use client'

import { useState } from 'react'
import { Link } from '../../lib/routerAdapter'
import {
  HOME_FAQS,
  HOME_HIW_STEPS,
  HOME_TREATMENTS,
} from '../../lib/nexa-shell/home-data'
import { RetroClosingSection, RetroWhySection } from './RetroShared'

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
    <section id="treatments" className="goal-treatments-section ns-treat-stage" data-active-tone={active.id}>
      <div className="goal-treatments-container">
        <div className="goal-treatments-heading">
          <h2>
            <em>Personalized treatments</em> reviewed by licensed providers
          </h2>
          <p>Choose Semaglutide or Tirzepatide, then complete a medical intake.</p>
        </div>

        <div className="goal-tablist-wrap">
          <div className="goal-tablist" role="tablist" aria-label="Choose a treatment">
            {HOME_TREATMENTS.map((treatment) => {
              const selected = treatment.id === activeId
              return (
                <button
                  key={treatment.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  className={selected ? 'is-active' : undefined}
                  onClick={() => setActiveId(treatment.id)}
                >
                  {treatment.label}
                </button>
              )
            })}
          </div>
        </div>

        <div className="goal-treatments-pane">
          <div className="goal-cutouts" aria-hidden="true">
            {HOME_TREATMENTS.map((treatment) => (
              <img
                key={treatment.id}
                className={`goal-cutouts-pair${treatment.id === activeId ? ' is-on' : ''}`}
                src={treatment.cutoutPair}
                alt=""
                loading="lazy"
              />
            ))}
          </div>

          <div className="goal-product-card">
            <div className="goal-product-tags">
              <div className="goal-product-tags-left">
                <span className="goal-product-tag">{active.label}</span>
                <span className="goal-product-tag goal-product-tag--gold">{active.badge}</span>
              </div>
            </div>

            <div className="goal-product-top">
              <div className="goal-product-vial">
                {active.vials.map((src) => (
                  <img key={src} src={src} alt="" loading="eager" className="goal-vial goal-vial--front" />
                ))}
              </div>
              <div className="goal-product-meta">
                <div className="goal-product-price">
                  FROM {active.price}
                  <span>{active.period}</span>
                </div>
                <p className="goal-product-price-note">{active.priceNote}</p>
              </div>
            </div>

            <h3 className="goal-product-title">{active.title}</h3>
            <p className="goal-product-desc">{active.description}</p>
            <p className="goal-product-detail">{active.detail}</p>

            <div className="goal-product-ctas">
              <Link href={`/start?program=${active.program}`} className="goal-product-cta goal-product-cta--primary">
                Check Eligibility
              </Link>
              <Link href={active.learnHref} className="goal-product-cta goal-product-cta--ghost">
                Learn more
              </Link>
            </div>
          </div>
        </div>
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
