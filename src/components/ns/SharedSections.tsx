'use client'

import { type ReactNode } from 'react'
import { Link } from '../../lib/routerAdapter'
import { HOME_CLOSING_IMAGE, HOME_WHY_MEDIA } from '../../lib/ns/home-data'
import { NsSnapRail } from './NsSnapRail'

export function RetroWhySection({
  media,
}: {
  media?: { vials: string; portal: string }
}) {
  const vialsSrc = media?.vials ?? HOME_WHY_MEDIA.vials
  const portalSrc = media?.portal ?? HOME_WHY_MEDIA.portal
  const pillars: {
    id: string
    n: string
    title: ReactNode
    body: string
    tone: string
    media: ReactNode
  }[] = [
    {
      id: 'clinical',
      n: '01',
      title: (
        <>
          Clinical review <em>first</em>
        </>
      ),
      body: 'Every plan starts with a medical intake. A licensed U.S. provider decides whether treatment is appropriate — intake alone is never a prescription.',
      tone: 'sand',
      media: (
        <ul className="pax-why__checks">
          {[
            ['Medical intake', 'History, metrics, screening'],
            ['Licensed review', 'State-licensed U.S. clinicians'],
            ['No outcome promise', 'Treatment not guaranteed'],
          ].map(([label, hint]) => (
            <li key={label}>
              <span className="pax-why__check-mark" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{label}</strong>
                <small>{hint}</small>
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'pharmacy',
      n: '02',
      title: (
        <>
          Licensed U.S. <em>pharmacy</em>
        </>
      ),
      body: 'If prescribed, compounded medication is prepared by a licensed U.S. compounding pharmacy and shipped discreetly to an eligible address.',
      tone: 'dune',
      media: (
        <ul className="pax-why__checks">
          {[
            ['Compounded Rx', 'Patient-specific when prescribed'],
            ['U.S. pharmacies', 'State-licensed fulfillment'],
            ['Clear labeling', 'Clinical labels — no brand marks on glass'],
          ].map(([label, hint]) => (
            <li key={label}>
              <span className="pax-why__check-mark" aria-hidden="true">
                ✓
              </span>
              <span>
                <strong>{label}</strong>
                <small>{hint}</small>
              </span>
            </li>
          ))}
        </ul>
      ),
    },
    {
      id: 'glp1',
      n: '03',
      title: (
        <>
          Semaglutide &amp; <em>Tirzepatide</em>
        </>
      ),
      body: 'Weekly GLP-1 and dual-pathway options may support appetite regulation when medically appropriate. Experiences vary; results are not guaranteed.',
      tone: 'light',
      media: (
        <div className="pax-why__media-frame">
          <img src={vialsSrc} alt="Compounded Semaglutide and Tirzepatide vials with clinical labels" loading="lazy" />
        </div>
      ),
    },
    {
      id: 'support',
      n: '04',
      title: (
        <>
          Ongoing care <em>portal</em>
        </>
      ),
      body: 'After enrollment, messaging, follow-up, and titration requests run through your secure patient portal with the care team.',
      tone: 'forest',
      media: (
        <div className="pax-why__media-frame pax-why__media-frame--portal">
          <img src={portalSrc} alt="Secure clinical intake on tablet" loading="lazy" />
        </div>
      ),
    },
  ]

  return (
    <section className="retro-home-why pax-why" aria-labelledby="retro-home-why-title">
      <div className="retro-home-why-inner pax-why__inner">
        <header className="pax-why__head">
          <p className="pax-why__eyebrow">North Star MD</p>
          <h2 className="retro-home-why-title" id="retro-home-why-title">
            Provider-guided care, <em>built for clarity</em>
          </h2>
          <p className="pax-why__sub">
            Telehealth evaluation → clinician decision → pharmacy fulfillment only when prescribed. Compounded medications are not FDA-approved finished products.
          </p>
        </header>
        <NsSnapRail cols={4} className="retro-home-why-grid pax-why__grid" hint="Swipe to see why">
          {pillars.map((p) => (
            <article key={p.id} className={`retro-home-why-card pax-why__card pax-why__card--${p.tone}`}>
              <div className="pax-why__card-copy">
                <span className="pax-why__n">{p.n}</span>
                <h3 className="retro-home-why-card-title pax-why__card-title">{p.title}</h3>
                <p className="retro-home-why-card-body pax-why__card-body">{p.body}</p>
              </div>
              <div className="pax-why__card-media">{p.media}</div>
            </article>
          ))}
        </NsSnapRail>
      </div>
    </section>
  )
}

export function RetroClosingSection({
  ctaHref = '/start',
  title = (
    <>
      Ready for a <em>clinical review</em>?
    </>
  ),
  subtitle = 'Start a free medical intake with North Star MD. A licensed U.S. provider decides if Semaglutide or Tirzepatide is appropriate for you.',
  bg = HOME_CLOSING_IMAGE,
}: {
  ctaHref?: string
  title?: ReactNode
  subtitle?: string
  bg?: string
}) {
  return (
    <section className="retro-home-closing" aria-labelledby="retro-home-closing-title">
      <img className="retro-home-closing-bg retro-home-closing-bg--weight-loss" src={bg} alt="" aria-hidden="true" loading="lazy" />
      <div className="retro-home-closing-inner">
        <h2 className="retro-home-closing-title" id="retro-home-closing-title">
          {title}
        </h2>
        <p className="retro-home-closing-sub">{subtitle}</p>
        <Link href={ctaHref} className="retro-home-closing-cta">
          Check Eligibility
        </Link>
      </div>
    </section>
  )
}
