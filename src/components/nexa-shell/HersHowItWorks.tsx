'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { Link } from '../../lib/routerAdapter'
import '../../styles/hers-how-it-works.css'

const IMG = '/images/hers-hiw'

const PROVIDERS = [
  `${IMG}/hims-provider-support.webp`,
  `${IMG}/hims-provider-left-support.webp`,
  `${IMG}/hims-provider-right-support.webp`,
]

const PHARMACIES = [
  { src: `${IMG}/pharmacy-1.webp`, caption: 'Compounded in the USA' },
  { src: `${IMG}/pharmacy-2.webp`, caption: 'Compounded using leading technology' },
  { src: `${IMG}/pharmacy-3.webp`, caption: 'Doctor-trusted ingredients' },
]

const SUPPORT = [
  { src: `${IMG}/step-img-1.webp`, title: "A plan that's right for you", note: 'Simulated interaction.' },
  { src: `${IMG}/step-img-2.webp`, title: 'Unlimited messaging', note: 'Simulated interaction.' },
  { src: `${IMG}/step-img-3.webp`, title: 'Progress tracking tools', note: 'Simulated interaction.' },
  { src: `${IMG}/step-img-4.webp`, title: '150+ support videos', note: 'Simulated interaction.' },
]

function clamp(n: number, a = 0, b = 1) {
  return Math.min(b, Math.max(a, n))
}

function useSectionProgress<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [p, setP] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let raf = 0
    const measure = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = Math.max(1, el.offsetHeight - vh)
      setP(clamp(-rect.top / total))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, p }
}

function spriteStyle(
  src: string,
  cols: number,
  rows: number,
  progress: number,
  extra?: CSSProperties,
): CSSProperties {
  const total = cols * rows
  const i = Math.min(total - 1, Math.floor(clamp(progress) * total))
  const col = i % cols
  const row = Math.floor(i / cols)
  return {
    backgroundImage: `url(${src})`,
    backgroundSize: `${cols * 100}% ${rows * 100}%`,
    backgroundPosition: `${(col / Math.max(1, cols - 1)) * 100}% ${(row / Math.max(1, rows - 1)) * 100}%`,
    ...extra,
  }
}

function LockIcon() {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" aria-hidden="true">
      <rect x="3" y="11" width="16" height="13" rx="2.2" fill="#111" />
      <path d="M6.5 11V8.2C6.5 5.3 8.7 3 11.5 3S16.5 5.3 16.5 8.2V11" stroke="#111" strokeWidth="2.2" />
    </svg>
  )
}

function ExtArrow() {
  return (
    <svg className="ns-hiw-ext" width="14" height="14" viewBox="0 0 38 38" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.67 9.5c0-.87.71-1.58 1.58-1.58H28.5c.87 0 1.58.71 1.58 1.58v14.25c0 .87-.71 1.58-1.58 1.58-.87 0-1.58-.71-1.58-1.58V13.32L11.41 28.83a1.58 1.58 0 0 1-2.24-2.24L24.68 11.08H14.25c-.87 0-1.58-.71-1.58-1.58Z"
      />
    </svg>
  )
}

type HiwNavItem = {
  href: string
  label: string
  active?: boolean
  ext?: boolean
}

const HIW_NAV: HiwNavItem[] = [
  { href: '/', label: 'About us' },
  { href: '/how-it-works', label: 'How it works', active: true },
  { href: '/treatments', label: 'Clinical excellence' },
  { href: '/vision', label: 'Innovation' },
  { href: '/faq', label: 'Quality & Safety' },
  { href: '/education', label: 'Newsroom', ext: true },
  { href: '/advisors', label: 'Investors', ext: true },
]

function HiwMenu({
  open,
  onHero,
  onToggle,
}: {
  open: boolean
  onHero: boolean
  onToggle: () => void
}) {
  return (
    <nav
      className={`ns-hiw-chrome${open ? ' is-open' : ''}${onHero ? '' : ' is-away'}`}
      aria-label="How it works"
    >
      <div className="ns-hiw-chrome__stick">
        <div className="ns-hiw-topbar">
          <div className="ns-hiw-brandrow">
            <Link href="/" className="ns-hiw-brand" aria-label="North Star home">
              <span className="ns-hiw-brand__word">north star</span>
            </Link>
            <Link href="/treatments" className="ns-hiw-explore">
              Explore
            </Link>
          </div>
          <button
            type="button"
            className="ns-hiw-burger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={onToggle}
          >
            <i />
          </button>
        </div>
        <div className="ns-hiw-subnav" aria-hidden={open}>
          {HIW_NAV.map((item, i) => (
            <span key={item.label} className="ns-hiw-subnav__item">
              {i === 5 ? <span className="ns-hiw-subnav__rule" aria-hidden="true" /> : null}
              <Link href={item.href} className={item.active ? 'is-on' : undefined}>
                {item.label}
                {item.ext ? <ExtArrow /> : null}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </nav>
  )
}

function HiwDrawer({
  open,
  onHero,
  onToggle,
}: {
  open: boolean
  onHero: boolean
  onToggle: () => void
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onToggle()
    }
    document.body.style.overflow = open ? 'hidden' : ''
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onToggle])

  if (!open) return null

  return (
    <div className={`ns-hiw-drawer${onHero ? ' is-hero' : ''}`}>
      <ul>
        {HIW_NAV.map((item, i) => (
          <li key={item.label} className={i === 5 ? 'ns-hiw-drawer__break' : undefined}>
            <Link href={item.href} className={item.active ? 'is-on' : undefined} onClick={onToggle}>
              {item.label}
              {item.ext ? <ExtArrow /> : null}
            </Link>
          </li>
        ))}
      </ul>
      <p className="ns-hiw-drawer__other">Other sites:</p>
      <div className="ns-hiw-drawer__sites">
        <Link href="/education">Blog</Link>
        <Link href="/advisors">Careers</Link>
        <Link href="/">Northstar.md</Link>
      </div>
    </div>
  )
}

export default function HersHowItWorks() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), [])
  const hero = useSectionProgress<HTMLElement>()
  const intake = useSectionProgress<HTMLElement>()
  const provider = useSectionProgress<HTMLElement>()
  const rx = useSectionProgress<HTMLElement>()
  const compound = useSectionProgress<HTMLElement>()
  const deliver = useSectionProgress<HTMLElement>()

  const leftIn = 0.55 + clamp(hero.p / 0.28) * 0.45
  const rightIn = clamp((hero.p - 0.12) / 0.38)
  const titleFade = 1 - clamp((hero.p - 0.55) / 0.3)
  const phoneScale = 0.78 + clamp(intake.p) * 0.28
  const providerI = Math.min(2, Math.floor(clamp(provider.p) * 3))
  const pharmacyI = Math.min(2, Math.floor(clamp(compound.p) * 3))

  return (
    <div className={`ns-hiw${menuOpen ? ' is-menu' : ''}`}>
      <div className="ns-hiw-rail" aria-hidden="true" />
      <HiwDrawer open={menuOpen} onHero={hero.p < 0.92} onToggle={toggleMenu} />
      <HiwMenu open={menuOpen} onHero={hero.p < 0.92} onToggle={toggleMenu} />

      <section className="ns-hiw-hero" ref={hero.ref}>
        <div className="ns-hiw-hero__pin">
          <div className="ns-hiw-hero__copy" style={{ opacity: titleFade, transform: `translateY(${hero.p * -24}px)` }}>
            <h1>
              <span>How</span>
              <span>North Star</span>
              <span>Works</span>
            </h1>
            <p>A clear path to better healthcare.</p>
          </div>
          <img
            className="ns-hiw-hero__hand ns-hiw-hero__hand--left"
            src={`${IMG}/hand-left.webp`}
            alt=""
            style={{
              opacity: leftIn,
              transform: `translate3d(${(1 - leftIn) * -22}%, ${(1 - leftIn) * 12}%, 0)`,
            }}
          />
          <img
            className="ns-hiw-hero__hand ns-hiw-hero__hand--right"
            src={`${IMG}/hand-right.webp`}
            alt=""
            style={{
              opacity: rightIn,
              transform: `translate3d(${(1 - rightIn) * 26}%, ${(1 - rightIn) * 16}%, 0)`,
            }}
          />
          <div className="ns-hiw-scrollcue" aria-hidden="true">
            <i />
            <i />
            <i />
            <svg viewBox="0 0 17 9">
              <path d="M11.594 7.596c-1.63 1.872-4.557 1.872-6.188 0L.251 1.676C-.321 1.019.149 0 1.024 0h14.952c.875 0 1.345 1.02.774 1.676l-5.156 5.92Z" />
            </svg>
          </div>
        </div>
      </section>

      <section className="ns-hiw-intro">
        <div className="ns-hiw-intro__pin">
          <h2>
            Through North Star MD, the <em>journey to better health</em> is powered by{' '}
            <em>transformative technology</em> and <em>personalized care</em>.
          </h2>
          <div className="ns-hiw-intro__lead" />
          <div className="ns-hiw-kicker">let&apos;s do this</div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-intake" ref={intake.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>It starts with your intake</h3>
            <p>
              We get to know your health history, symptoms, and treatment preferences, so we can build your health
              profile. This information is personalized into your medical record and allows your provider to give you
              truly individualized care.
            </p>
          </div>
          <div className="ns-hiw-phonewrap" style={{ transform: `scale(${phoneScale})` }}>
            <img src={`${IMG}/hand-phone.webp`} alt="" />
            <img className="ns-hiw-phonescreen" src={`${IMG}/hims-hair-screen.webp`} alt="Intake on a phone" />
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-emr" id="emr-content">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>Sent safely and securely</h3>
            <p>A provider reviews your medical information in our EMR platform, which contains multiple security enhancements.</p>
          </div>
          <div className="ns-hiw-lockcard">
            <div className="ns-hiw-lock">
              <LockIcon />
            </div>
          </div>
          <div className="ns-hiw-emr__tag">EMR</div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-provider" id="provider-content" ref={provider.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>Connect with a provider</h3>
            <p>
              A medical provider who is licensed in your state reviews your information, messages you with any questions,
              and if appropriate, recommends a treatment that fits your needs—100% online.
            </p>
          </div>
          <div className="ns-hiw-provider__photo">
            <img src={PROVIDERS[providerI]} alt="Licensed provider reviewing intake" />
            <span className="ns-hiw-check">✓</span>
          </div>
          <div className="ns-hiw-status" aria-hidden="true">
            {['Requested', 'Reviewed', 'Delivered'].map((label, i) => (
              <span key={label} className={i <= providerI ? 'is-on' : undefined}>
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-rx" id="prescription-content" ref={rx.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>A prescription and a plan</h3>
            <p>
              There are a range of personalized treatments available through our platform. Based on your individual
              medical profile, your provider will select a treatment plan that can best help you.
            </p>
          </div>
          <div
            className="ns-hiw-pillspin"
            style={spriteStyle(`${IMG}/yellow-pill-sprite.webp`, 6, 6, rx.p)}
            aria-hidden="true"
          />
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-compound" id="compound-content" ref={compound.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>Compounded treatments, state-of-the-art pharmacies</h3>
            <p>
              Your provider might recommend a compounded treatment, which combines doctor-trusted ingredients into a
              single vial—at dosage strengths tailored to your needs.
            </p>
          </div>
          <div className="ns-hiw-stadium">
            {PHARMACIES.map((item, i) => (
              <img key={item.src} src={item.src} alt="" className={i === pharmacyI ? 'is-on' : undefined} />
            ))}
          </div>
          <p className="ns-hiw-caption">{PHARMACIES[pharmacyI].caption}</p>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-ship" id="delivery-content">
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-copy">
            <h3>Prescribed, sealed and delivered</h3>
            <p>If prescribed, your treatment is packed, shipped, and sent directly to you.</p>
          </div>
        </div>
      </section>

      <section className="ns-hiw-stage ns-hiw-deliver" ref={deliver.ref}>
        <div className="ns-hiw-stage__pin">
          <div className="ns-hiw-products">
            {[
              { src: `${IMG}/box-sprite-desktop.webp`, label: 'Discreet shipping' },
              { src: `${IMG}/jar-sprite-desktop.webp`, label: 'Thoughtfully designed packaging' },
              { src: `${IMG}/pills-sprite-desktop.webp`, label: 'Personalized treatment' },
            ].map((item) => (
              <article key={item.label} className="ns-hiw-product">
                <div
                  className="ns-hiw-product__sprite"
                  style={spriteStyle(item.src, 5, 8, deliver.p)}
                  aria-hidden="true"
                />
                <p>
                  {item.label.split(' ').slice(0, 1).join(' ')}
                  <br />
                  {item.label.split(' ').slice(1).join(' ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ns-hiw-support" id="support-content">
        <div className="ns-hiw-copy">
          <h3>Unlimited ongoing support</h3>
          <p>
            Through the North Star MD patient portal, you&apos;ll have access to ongoing support, online check-ins,
            educational content and more.
          </p>
        </div>
        <div className="ns-hiw-stack">
          {SUPPORT.map((card) => (
            <article key={card.title} className="ns-hiw-card">
              <img src={card.src} alt="" />
              <div className="ns-hiw-card__meta">
                <strong>{card.title}</strong>
                <span>{card.note}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ns-hiw-cta">
        <h2>Ready to start?</h2>
        <p>Complete a free medical intake. A licensed U.S. provider decides if treatment is appropriate.</p>
        <Link href="/start">Check Eligibility</Link>
      </section>
    </div>
  )
}
