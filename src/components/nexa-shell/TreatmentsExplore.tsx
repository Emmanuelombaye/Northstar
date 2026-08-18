'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RetroClosingSection, RetroWhySection } from './RetroShared'
import { TREATMENTS_MEDIA } from '../../lib/nexa-shell/treatments-data'
import '../../styles/program-explore.css'

const INCLUDES = [
  'Free Medical Consultation',
  'Free Expedited Shipping',
  '24/7 Dedicated Support',
  'Access to Patient Portal',
]

const PROTOCOL_ICON_WAVE = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M13 34c3.2-7 6.4-7 9.6 0s6.4 7 9.6 0 6.4-7 9.6 0 6.4 7 9.6 0"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const PROTOCOL_ICON_PATH = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
    <path d="M16 22C30 22 30 44 48 44" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
    <circle cx="30" cy="29" r="2.4" fill="currentColor" />
  </svg>
)

const PROTOCOL_ICON_LINES = (
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.4" />
    <line x1="19" y1="26" x2="41" y2="26" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="19" y1="32" x2="46" y2="32" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    <line x1="19" y1="38" x2="35" y2="38" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="2 3.5" />
  </svg>
)

const PANE = {
  id: 'weight-loss',
  card: 'wl',
  cardTitle: 'Personalized GLP‑1 Injections',
  priceFrom: '$125',
  priceAlt: 'From $125 per month on a 6-month plan — charged only if prescribed',
  chip: 'Provider-guided',
  chipClass: 'bg-pax-chip text-white',
  blurb:
    'A weekly treatment that may support appetite regulation and weight management through GLP-1 pathway activation — prescribed only when a licensed provider determines it is appropriate.',
  products: [
    {
      id: 'semaglutide',
      name: 'GLP-1 (Semaglutide)',
      desc: 'Weekly GLP-1 pathway support.',
      thumb: TREATMENTS_MEDIA.semaThumb,
    },
    {
      id: 'tirzepatide',
      name: 'GLP-1 + GIP (Tirzepatide)',
      desc: 'Dual-pathway weekly support.',
      thumb: TREATMENTS_MEDIA.tirzThumb,
    },
  ],
} as const

const WL_PROTOCOL = {
  heading: "Your body isn't working against you. It just needs the right signal.",
  sub: "GLP-1 medications don't fight your hunger — they work through the same hormonal system your body already uses to regulate it.",
  vials: TREATMENTS_MEDIA.protocolVials,
  cards: [
    {
      icon: PROTOCOL_ICON_WAVE,
      title: "Targets the hormone that tells your brain you're full.",
      body: 'After you eat, your body releases a hormone called GLP-1 — a signal that travels to your brain and says: enough. GLP-1 medications mimic that signal. The result is a clearer, more consistent message to stop eating.',
    },
    {
      icon: PROTOCOL_ICON_PATH,
      title: 'Slows down how fast food leaves your stomach.',
      body: 'These treatments reduce the rate at which your stomach empties after a meal. The physical sensation of fullness lasts longer — and hunger returns more slowly.',
    },
    {
      icon: PROTOCOL_ICON_LINES,
      title: 'Recalibrates your hunger system — not shuts it down.',
      body: 'Over time, with structured dosing reviewed by your provider, GLP-1 therapy helps restore a more balanced hormonal response to food — so the process feels steadier, not like a fight you are constantly losing.',
    },
  ],
}

const WL_EXPECT = {
  title: 'What to expect, week by week with your GLP-1 Treatment',
  sub: "No guesswork. Here's how the first months typically look for patients in the program. Individual experiences vary.",
  weeks: [
    {
      tag: 'Week 1 → 4 · Your body is adjusting',
      text: 'You start on a low dose — intentionally. Your GLP-1 treatment is introduced gradually to give your body time to adapt. Some patients notice appetite changes early. Others take a few more weeks. Both are normal. Your provider is available throughout.',
      img: TREATMENTS_MEDIA.expectWeek14,
    },
    {
      tag: 'Week 4 → 12 · The protocol starts to settle',
      text: 'As titration continues, your provider monitors how you respond. Appetite signals and dosing may be adjusted based on your individual course — experiences vary, and treatment is not guaranteed to produce a specific outcome.',
      img: TREATMENTS_MEDIA.expectWeek412,
    },
    {
      tag: 'Month 3+ · Calibrated to you',
      text: 'This is where the protocol becomes truly personal. With how your body has responded — to the dose, to the titration, to the treatment itself — your provider can now fine-tune your plan with real precision. The focus shifts from adjustment to consistency, and maintainable progress becomes the rhythm.',
      img: TREATMENTS_MEDIA.expectMonth3,
    },
  ],
}

const WL_FAQS = [
  {
    q: 'What is GLP-1 weight loss treatment?',
    a: "GLP-1 treatment is a class of prescription medication — including Semaglutide and Tirzepatide — that works with your body's natural appetite signals. At North Star MD, every protocol is reviewed by a licensed provider and built around you.",
  },
  {
    q: "What's the difference between Semaglutide and Tirzepatide?",
    a: 'Semaglutide is a GLP-1 receptor agonist. Tirzepatide is a dual GIP and GLP-1 receptor agonist. Both may support appetite regulation when medically appropriate. Your provider reviews your health history and goals to determine what may be appropriate for you.',
  },
  {
    q: 'Who is GLP-1 treatment for?',
    a: 'GLP-1 treatment may be considered for adults seeking provider-guided weight management who meet clinical criteria. Eligibility is determined by a licensed provider. Completing an intake does not guarantee a prescription.',
  },
  {
    q: 'How does the prescription process work?',
    a: 'You complete a clinical intake, share your medical history, and a licensed U.S. provider reviews your answers. If approved, medication is prepared by a licensed U.S. compounding pharmacy and shipped discreetly. Your care team stays involved as dosing is titrated over time.',
  },
  {
    q: 'What should I know about side effects?',
    a: 'Side effects vary by person. Common effects may include nausea, constipation, diarrhea, appetite changes, or digestive discomfort, especially while your body adjusts. Your provider reviews your history and can adjust your protocol if needed.',
  },
  {
    q: 'Are compounded medications FDA-approved?',
    a: 'No. North Star MD provides compounded medications prepared by licensed U.S. pharmacies when prescribed. They are not FDA-approved finished products and have not undergone FDA review for safety, effectiveness, or manufacturing quality as finished drugs.',
  },
]

function ExploreHero({
  selectedTx,
  setSelectedTx,
  onCta,
}: {
  selectedTx: string
  setSelectedTx: (id: string) => void
  onCta: () => void
}) {
  const pane = PANE
  return (
    <section className="explore-hero-section bg-white pb-10">
      <div className="explore-hero-container u-container">
        <div className="explore-hero-grid flex flex-col gap-6 tablet:flex-row tablet:items-start tablet:gap-9 desktop:gap-8">
          <div
            data-card={pane.card}
            className="explore-card explore-hero-card relative flex flex-col justify-between overflow-visible rounded-3xl text-white text-xs font-medium tracking-[-0.01em] w-full h-[27.5rem] tablet:h-auto tablet:min-h-0 tablet:flex-1 tablet:max-w-[31.5131rem] desktop:flex-none desktop:w-[31.5131rem] desktop:aspect-[480/549] px-6 pt-6 pb-5 tablet:px-7 tablet:pt-8 tablet:pb-7"
          >
            <h2 className="explore-hero-card-title mx-auto m-0 text-center text-[1.75rem] tablet:text-[2.5rem] desktop:text-[2.625rem] leading-[1] tracking-[-0.04em] font-medium max-w-[15ch]">
              {pane.cardTitle}
            </h2>
            <div className="explore-hero-card-price explore-hero-card-price--text" aria-label={pane.priceAlt}>
              <span className="explore-hero-card-price-main">FROM {pane.priceFrom}</span>
              <span className="explore-hero-card-price-sub">/mo · 6-month plan</span>
            </div>
            <div className="explore-hero-card-footer flex items-center justify-between gap-3">
              <div>Licensed U.S. provider review required</div>
              <div className="flex items-center gap-1.5">
                <span
                  className={`explore-hero-chip inline-flex items-center justify-center rounded-full text-xs font-medium leading-none tracking-tight px-1.5 py-1 whitespace-nowrap ${pane.chipClass}`}
                >
                  {pane.chip}
                </span>
                <span className="explore-hero-stock inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium leading-none tracking-tight whitespace-nowrap">
                  <span className="explore-stock-dot block w-1.5 h-1.5 rounded-full" />
                  Available
                </span>
              </div>
            </div>
          </div>

          <div className="explore-hero-content flex flex-col w-full tablet:flex-1 desktop:max-w-[47%]">
            <p className="explore-hero-copy text-base leading-[1.5] tracking-[-0.01em] text-neutral-900 mb-4 tablet:mb-6 desktop:mb-8">
              {pane.blurb}
            </p>

            <div className="explore-hero-products my-[18px] flex flex-row flex-wrap items-center gap-x-6 gap-y-3 mb-6">
              {pane.products.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`explore-hero-product flex items-center gap-2 ${selectedTx === p.id ? 'is-active' : ''}`}
                  onClick={() => setSelectedTx(p.id)}
                >
                  <div className="explore-hero-product-thumb aspect-square w-[34px] max-w-[34px] overflow-clip rounded-full">
                    <img src={p.thumb} alt="" loading="lazy" className="block w-full h-full object-cover" />
                  </div>
                  <div className="explore-hero-product-copy">
                    <div className="explore-hero-product-name text-sm font-medium text-neutral-900">{p.name}</div>
                    <div className="explore-hero-product-desc">{p.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="explore-hero-includes mb-5 grid gap-4 grid-cols-1 gap-y-[18px] desktop:grid-cols-[0.75fr_1fr] desktop:items-center">
              <div className="explore-hero-plans">
                <div className="explore-hero-plans-label text-sm tracking-[-0.01em] text-neutral-900/40">All Plans Include:</div>
                <div className="explore-hero-plan-list mt-2.5 flex flex-col gap-3">
                  {INCLUDES.map((item) => (
                    <div key={item} className="explore-hero-plan-item flex items-center gap-3 text-sm tracking-[-0.01em] text-neutral-900">
                      <div className="explore-hero-plan-icon flex aspect-square w-6 min-w-6 items-center justify-center overflow-clip rounded-full bg-neutral-200 text-neutral-900">
                        ✓
                      </div>
                      <div>{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="explore-hero-guarantee relative pt-5"
                aria-label="Care commitment — provider-guided care from U.S. licensed pharmacies."
              >
                <div className="explore-hero-guarantee-card rounded-2xl bg-neutral-200 px-3 pt-8 pb-4 text-center text-xs leading-[1.5] tracking-[-0.01em] text-neutral-900">
                  <div className="explore-hero-guarantee-heading" aria-hidden="true">
                    <span className="explore-hero-guarantee-logo" style={{ fontFamily: 'var(--font-display, Georgia, serif)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--navy, #0a1f3d)' }}>
                      North Star MD
                    </span>
                    <span className="explore-hero-guarantee-rule" />
                    <span className="explore-hero-guarantee-word">Commitment</span>
                  </div>
                  <p>
                    Provider-guided care, medications from U.S. licensed pharmacies, and only charged if treatment is
                    prescribed — with flexibility to change or cancel anytime.
                  </p>
                </div>
              </div>
            </div>

            <div className="explore-hero-divider mb-9 hidden h-px w-full bg-[#eee] tablet:block" />

            <div className="explore-hero-pricing mb-6 grid grid-cols-1 gap-3 text-center tablet:mb-0">
              <div className="explore-hero-price-row flex items-center justify-between">
                <div className="explore-hero-price-label text-sm tracking-[-0.01em] text-neutral-900/40">Starting as low as:</div>
                <div className="explore-hero-price flex items-baseline gap-2 text-neutral-900">
                  <span className="text-2xl font-medium tracking-tight">{pane.priceFrom}</span>
                  <span className="text-sm text-neutral-900/50">/mo on 6-month plan</span>
                </div>
              </div>
              <button
                type="button"
                className="explore-hero-cta block w-full rounded-full px-6 py-4 text-base font-medium leading-none tracking-[-0.01em]"
                onClick={onCta}
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProtocolSection({ onCta }: { onCta: () => void }) {
  const data = WL_PROTOCOL
  return (
    <section className="retro-protocol pax-protocol" aria-labelledby="retro-protocol-heading-wl">
      <div className="retro-protocol__inner">
        <div className="retro-protocol__left">
          <h2 id="retro-protocol-heading-wl" className="retro-protocol__heading">
            {data.heading}
          </h2>
          <p className="retro-protocol__sub">{data.sub}</p>
          <div className="retro-protocol__vials" aria-hidden="true">
            <img className="retro-protocol__vials-img" src={data.vials} alt="" loading="lazy" />
          </div>
        </div>
        <div className="retro-protocol__right">
          <div className="retro-protocol__rail ns-mobile-rail">
          {data.cards.map((c, i) => (
            <article
              key={c.title}
              className="retro-protocol-card pax-protocol-card"
              data-step={String(i + 1).padStart(2, '0')}
              style={{ ['--i' as string]: i }}
            >
              <div className="pax-protocol-card__top">
                <span className="retro-protocol-card__icon pax-protocol-card__icon" aria-hidden="true">
                  {c.icon}
                </span>
                <span className="pax-protocol-card__n" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="retro-protocol-card__title">{c.title}</h3>
              <p className="retro-protocol-card__body">{c.body}</p>
            </article>
          ))}
          </div>
          <button type="button" className="retro-protocol__cta pax-protocol__cta" onClick={onCta}>
            Check Eligibility
          </button>
        </div>
      </div>
    </section>
  )
}

function ClinicalSection() {
  return (
    <section className="retro-clinical retro-clinical--weight-loss ns-clinical" aria-labelledby="retro-clinical-heading">
      <div className="retro-clinical__inner">
        <div className="retro-clinical__text">
          <p className="retro-clinical__eyebrow">Personalized GLP-1, GLP-1 + GIP Treatments</p>
          <h2 id="retro-clinical-heading" className="retro-clinical__heading">
            A clinically studied
            <br />
            approach to weight
            <br />
            management.
          </h2>
          <div className="retro-clinical__body">
            <p>
              GLP-1 medications work with your body&rsquo;s natural hunger signals to regulate appetite and support
              weight management over time when medically appropriate.
            </p>
            <ul>
              <li>
                <strong>Semaglutide acts on a single GLP-1 pathway</strong> — a clinically studied foundation for
                provider-guided care.
              </li>
              <li>
                <strong>Tirzepatide acts on two pathways — GLP-1 and GIP</strong> — for dual-pathway appetite
                regulation support.
              </li>
            </ul>
            <p>Your dosing protocol is reviewed and prescribed by a licensed provider, adjusted as you progress.</p>
          </div>
        </div>
        <figure className="ns-clinical-hero">
          <img
            src={TREATMENTS_MEDIA.clinicalHero}
            alt="North Star MD patients with Semaglutide and Tirzepatide"
            loading="lazy"
          />
          <figcaption className="ns-clinical-hero__caption">
            <span>Semaglutide · Tirzepatide</span>
            <span>Provider-guided · Charged only if prescribed</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

function ExpectSection() {
  const data = WL_EXPECT
  return (
    <section className="retro-expect" aria-labelledby="retro-expect-heading-wl">
      <div className="retro-expect__inner">
        <h2 id="retro-expect-heading-wl" className="retro-expect__heading">
          {data.title}
        </h2>
        <p className="retro-expect__sub">{data.sub}</p>
        <div className="retro-expect__grid">
          {data.weeks.map((w) => (
            <article key={w.tag} className="retro-expect-card">
              <div className="retro-expect-card__media">
                <img className="retro-expect-card__img" src={w.img} alt="" loading="lazy" />
              </div>
              <h3 className="retro-expect-card__label">{w.tag}</h3>
              <p className="retro-expect-card__desc">{w.text}</p>
            </article>
          ))}
        </div>
        <div className="retro-expect__carousel">
          <div className="retro-expect__track">
            {data.weeks.map((w) => (
              <article key={`c-${w.tag}`} className="retro-expect-card retro-expect-card--carousel">
                <div className="retro-expect-card__media">
                  <img className="retro-expect-card__img" src={w.img} alt="" loading="lazy" />
                </div>
                <h3 className="retro-expect-card__label">{w.tag}</h3>
                <p className="retro-expect-card__desc">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function KnowallSection({ onCta }: { onCta: () => void }) {
  const [openFaq, setOpenFaq] = useState(0)
  return (
    <section className="retro-knowall pax-knowall" aria-labelledby="retro-knowall-heading-wl" data-knowall="">
      <div className="retro-knowall__inner">
        <div className="retro-knowall__left">
          <p className="pax-knowall__eyebrow">Before you begin</p>
          <h2 id="retro-knowall-heading-wl" className="retro-knowall__heading">
            Common questions before you begin.
          </h2>
          <img className="retro-knowall__vial retro-knowall__vial--wl" src={TREATMENTS_MEDIA.faqVials} alt="" loading="lazy" />
        </div>
        <div className="retro-knowall__right">
          <ul className="retro-knowall__list pax-knowall__list" role="list">
            {WL_FAQS.map((f, i) => {
              const open = openFaq === i
              return (
                <li
                  key={f.q}
                  className="retro-knowall__item pax-knowall__item"
                  data-knowall-item=""
                  data-open={open ? 'true' : 'false'}
                  data-step={String(i + 1).padStart(2, '0')}
                  style={{ ['--i' as string]: i }}
                >
                  <button
                    type="button"
                    className="retro-knowall__toggle pax-knowall__toggle"
                    aria-expanded={open}
                    onClick={() => setOpenFaq(open ? -1 : i)}
                  >
                    <span className="pax-knowall__n" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="retro-knowall__question">{f.q}</span>
                    <span className="retro-knowall__icon pax-knowall__icon" aria-hidden="true">
                      {open ? '−' : '+'}
                    </span>
                  </button>
                  <div className="retro-knowall__panel" role="region" hidden={!open}>
                    <div className="retro-knowall__panel-inner">
                      <div className="retro-knowall__answer">
                        <p>{f.a}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <button type="button" className="retro-knowall__cta pax-knowall__cta" onClick={onCta}>
            Check Eligibility
          </button>
        </div>
      </div>
    </section>
  )
}

/** Pax-style treatments explore — Semaglutide & Tirzepatide for North Star MD */
export default function TreatmentsExplore() {
  const router = useRouter()
  const [selectedTx, setSelectedTx] = useState('semaglutide')

  useEffect(() => {
    document.documentElement.setAttribute('data-explore-active-tab', 'weight-loss')
    return () => {
      document.documentElement.removeAttribute('data-explore-active-tab')
    }
  }, [])

  const cta = () => {
    const program = selectedTx === 'tirzepatide' ? 'tirzepatide' : 'semaglutide'
    router.push(`/start?program=${program}`)
  }

  return (
    <div className="yx-clone fade-in program-explore ns-yucca" data-retro-scope>
      <section className="yx-clone__intro px-4">
        <h1 className="max-w-[37.0625rem] mx-auto text-center text-2xl xs:text-[1.75rem] tablet:text-[2.25rem] leading-[1] tracking-[-0.04em] font-semibold text-neutral-900">
          Explore Semaglutide and Tirzepatide — choose what&rsquo;s best <em>for you.</em>
        </h1>
      </section>

      <div className="retro-explore-tabs-wrap">
        <div data-explore-tabs="">
          <div className="relative z-[2]">
            <div data-explore-tab-pane="weight-loss" data-active="true" className="explore-tab-pane">
              <ExploreHero selectedTx={selectedTx} setSelectedTx={setSelectedTx} onCta={cta} />
            </div>
          </div>
        </div>
      </div>

      <div data-explore-section-stack="weight-loss">
        <ProtocolSection onCta={cta} />
        <ClinicalSection />
        <ExpectSection />
        <KnowallSection onCta={cta} />
        <RetroWhySection media={{ vials: TREATMENTS_MEDIA.whyVials, portal: TREATMENTS_MEDIA.whyPortal }} />
        <RetroClosingSection
          ctaHref={`/start?program=${selectedTx === 'tirzepatide' ? 'tirzepatide' : 'semaglutide'}`}
          bg={TREATMENTS_MEDIA.closing}
        />
      </div>
    </div>
  )
}
