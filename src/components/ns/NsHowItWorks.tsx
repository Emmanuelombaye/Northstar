'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from '../../lib/routerAdapter'
import { NsSnapRail } from './NsSnapRail'
import '../../styles/ns-how-it-works.css'
import '../../styles/ns-snap-rail.css'

const Y = '/images/ns'
const HIW = `${Y}/hiw`
const V = '?v=20260818b'
const VIAL_SEMA = `/images/home/atlas-vial-sema.avif${V}`
const VIAL_TIRZ = `/images/home/atlas-vial-tirz.avif${V}`

const PROVIDERS = [
  `${HIW}/Licensed-Providers.avif${V}`,
  `${HIW}/medical-review-licensed-provider-yucca-health.avif${V}`,
  `${HIW}/Provider-reviews-intake_2.avif${V}`,
]

const DELIVER = [
  { src: `${HIW}/home-delivery.avif${V}`, label: 'Discreet home delivery' },
  { src: `${HIW}/Receive-your-medication_3.avif${V}`, label: 'Cold-chain packaging' },
  { src: `/images/pax-hiw-step-3.png${V}`, label: 'If prescribed, shipped to you' },
]

const SUPPORT = [
  {
    src: `${HIW}/yucca-health-patient-portal-dashboard-semaglutide-mobile.avif${V}`,
    title: 'Your patient portal',
    note: 'Track treatment, messages, and next steps in one place.',
  },
  {
    src: `${HIW}/1_1-Guidance-throughout-treatment.avif${V}`,
    title: 'Guidance throughout treatment',
    note: 'Check in with your care team whenever you need to.',
  },
  {
    src: `${HIW}/glp-1-weight-loss-progress-chart-30-lbs-yucca-health.avif${V}`,
    title: 'Progress you can see',
    note: 'Log how you feel and watch your plan adjust with you.',
  },
  {
    src: `${HIW}/yucca-health-patient-portal-features-glp-1-treatment.avif${V}`,
    title: 'Tools that stay with you',
    note: 'Education, refills, and ongoing clinician support.',
  },
]

function clamp(n: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, n))
}

function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const current = useRef(0)
  const [p, setP] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const tick = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = Math.max(1, el.offsetHeight - vh)
      const target = clamp(-rect.top / total)
      current.current += (target - current.current) * 0.14
      if (Math.abs(target - current.current) < 0.001) current.current = target
      setP(current.current)
      if (Math.abs(target - current.current) > 0.001) raf = requestAnimationFrame(tick)
    }
    const kick = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(tick)
    }
    kick()
    window.addEventListener('scroll', kick, { passive: true })
    window.addEventListener('resize', kick)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', kick)
      window.removeEventListener('resize', kick)
    }
  }, [])

  return { ref, p }
}

function StarField() {
  return (
    <div className="ns-hiw-stars" aria-hidden="true">
      {Array.from({ length: 28 }, (_, i) => (
        <i
            key={i}
            style={
              {
                '--x': `${(i * 37) % 100}%`,
                '--y': `${(i * 53) % 100}%`,
                '--d': `${1.8 + (i % 5) * 0.45}s`,
              } as CSSProperties
            }
          />
      ))}
    </div>
  )
}

export default function NsHowItWorks() {
  const provider = useSectionProgress<HTMLElement>()
  const deliver = useSectionProgress<HTMLElement>()
  const providerI = Math.min(2, Math.floor(clamp(provider.p) * 2.999))
  const deliverI = Math.min(2, Math.floor(clamp(deliver.p) * 2.999))

  return (
    <div className="ns-hiw">
      <div className="ns-hiw-rail" hidden aria-hidden="true" />

      <section className="ns-hiw-hero">
        <div className="ns-hiw-hero__pin">
          <StarField />
          <div className="ns-hiw-hero__copy">
            <p className="ns-hiw-eyebrow">Guided by science</p>
            <h1>
              <span>How</span>
              <span>North Star</span>
              <span>Works</span>
            </h1>
            <p>A clear path from intake to clinician review — and fulfillment only if prescribed.</p>
          </div>
          <div className="ns-hiw-hero__vials">
            <figure>
              <img className="ns-hiw-hero__vial" src={VIAL_SEMA} alt="Personalized Semaglutide" />
              <figcaption>Semaglutide</figcaption>
            </figure>
            <figure>
              <img className="ns-hiw-hero__vial" src={VIAL_TIRZ} alt="Personalized Tirzepatide" />
              <figcaption>Tirzepatide</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="ns-hiw-intro">
        <div className="ns-hiw-intro__pin">
          <h2>
            Through North Star MD, the <em>journey to better health</em> is powered by{' '}
            <em>clinician review</em> and <em>personalized GLP-1 care</em>.
          </h2>
          <div className="ns-hiw-intro__lead" />
          <div className="ns-hiw-kicker">Let&apos;s begin</div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-intake">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <span className="ns-hiw-step">01</span>
            <h3>It starts with your intake</h3>
            <p>
              Share your health history, metrics, and goals in a secure questionnaire. This is an evaluation — not a
              purchase — so a licensed clinician can decide what is appropriate for you.
            </p>
          </div>
          <div className="ns-hiw-media">
            <div className="ns-hiw-frame ns-hiw-frame--phone">
              <img
                src={`${HIW}/yucca-health-patient-portal-dashboard-semaglutide-mobile.avif${V}`}
                alt="North Star patient intake on a phone"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-emr" id="emr-content">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy ns-hiw-copy--light">
            <span className="ns-hiw-step">02</span>
            <h3>Sent safely and securely</h3>
            <p>Your information is reviewed in a protected clinical record — encrypted, access-controlled, and used only for your care.</p>
          </div>
          <div className="ns-hiw-media">
            <div className="ns-hiw-lockcard">
            <div className="ns-hiw-lock" aria-hidden="true">
              <svg width="22" height="26" viewBox="0 0 22 26" fill="none">
                <rect x="3" y="11" width="16" height="13" rx="2.2" fill="#0a1f3d" />
                <path d="M6.5 11V8.2C6.5 5.3 8.7 3 11.5 3S16.5 5.3 16.5 8.2V11" stroke="#0a1f3d" strokeWidth="2.2" />
              </svg>
            </div>
            <p>Clinical record protected</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-provider" id="provider-content" ref={provider.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <span className="ns-hiw-step">03</span>
            <h3>A licensed provider reviews your file</h3>
            <p>
              A U.S. clinician licensed in your state reviews your answers, may message you with questions, and decides
              whether Semaglutide or Tirzepatide is appropriate — 100% online. Completing intake does not guarantee a
              prescription.
            </p>
          </div>
          <div className="ns-hiw-media">
            <div className="ns-hiw-provider__photo">
            {PROVIDERS.map((src, i) => (
              <img key={src} src={src} alt="" className={i === providerI ? 'is-on' : undefined} />
            ))}
            <span className="ns-hiw-check">✓</span>
            </div>
            <div className="ns-hiw-status" aria-hidden="true">
            {['Requested', 'Reviewed', 'Decision'].map((label, i) => (
              <span key={label} className={i <= providerI ? 'is-on' : undefined}>
                {label}
              </span>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-rx" id="prescription-content">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy ns-hiw-copy--light">
            <span className="ns-hiw-step">04</span>
            <h3>A plan built around you</h3>
            <p>
              If prescribed, your clinician selects Semaglutide or Tirzepatide at a dose matched to your medical
              profile — not a one-size protocol.
            </p>
          </div>
          <div className="ns-hiw-media">
            <div className="ns-hiw-vials">
              <figure>
                <img src={VIAL_SEMA} alt="Semaglutide" />
                <figcaption>Semaglutide</figcaption>
              </figure>
              <figure>
                <img src={VIAL_TIRZ} alt="Tirzepatide" />
                <figcaption>Tirzepatide</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-compound" id="compound-content">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy ns-hiw-copy--light">
            <span className="ns-hiw-step">05</span>
            <h3>Prepared by licensed U.S. pharmacies</h3>
            <p>
              When prescribed, a licensed compounding pharmacy prepares your medication at the strength your clinician
              selected, then ships it in temperature-aware packaging.
            </p>
          </div>
          <div className="ns-hiw-media">
            <div className="ns-hiw-stadium">
              <img src={`${HIW}/quality-sourcing-verified-compounded-medications-yucca-health.avif${V}`} alt="Licensed U.S. compounding pharmacy" />
            </div>
            <p className="ns-hiw-caption">Compounded in the USA · Clinician-directed strength</p>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-deliver" id="delivery-content" ref={deliver.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <span className="ns-hiw-step">06</span>
            <h3>Prescribed, sealed, and delivered</h3>
            <p>If prescribed, your treatment is packed and sent directly to you. Ongoing dose changes continue through the patient portal.</p>
          </div>
          <div className="ns-hiw-media ns-hiw-media--wide">
            <NsSnapRail cols={3} className="ns-hiw-products" hint="Swipe delivery">
            {DELIVER.map((item, i) => (
              <article key={item.label} className={`ns-hiw-product${i === deliverI ? ' is-on' : ''}`}>
                <div className="ns-hiw-product__frame">
                  <img src={item.src} alt="" />
                </div>
                <p>{item.label}</p>
              </article>
            ))}
            </NsSnapRail>
          </div>
        </div>
      </section>

      <section className="ns-hiw-support" id="support-content">
        <div className="ns-hiw-copy">
          <span className="ns-hiw-step">07</span>
          <h3>Care that stays with you</h3>
          <p>
            Through the North Star MD patient portal you have ongoing support, check-ins, education, and a care team
            that can adjust your plan if prescribed.
          </p>
        </div>
        <NsSnapRail cols={2} className="ns-hiw-stack" hint="Swipe care tools">
          {SUPPORT.map((card) => (
            <article key={card.title} className="ns-hiw-card">
              <div className="ns-hiw-card__media">
                <img src={card.src} alt="" />
              </div>
              <div className="ns-hiw-card__meta">
                <strong>{card.title}</strong>
                <span>{card.note}</span>
              </div>
            </article>
          ))}
        </NsSnapRail>
      </section>

      <section className="ns-hiw-cta">
        <p className="ns-hiw-eyebrow">Start when you are ready</p>
        <h2>See if treatment is right for you</h2>
        <p>Complete a free medical intake. A licensed U.S. provider decides if Semaglutide or Tirzepatide is appropriate.</p>
        <Link href="/start">Check eligibility</Link>
      </section>
    </div>
  )
}
