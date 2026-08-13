/** North Star MD — Nexa-shell home data (LegitScript-scrubbed) */

export const YUCCA = '/images/yucca-clone'

export const HERO_WORDS = [
  { text: 'Semaglutide', color: 'var(--gold)' },
  { text: 'Tirzepatide', color: 'var(--gold)' },
] as const

export const HOME_WHY_MEDIA = {
  vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
  portal: `${YUCCA}/hiw/yucca-health-patient-portal-dashboard-semaglutide-mobile.avif`,
} as const

export const HOME_CLOSING_IMAGE = `${YUCCA}/cta-personalized-treatments-wellness-portrait-yucca-health.avif`

export const HOME_HERO_IMAGE = `${YUCCA}/pax-glp1-couple-cutout.avif`

export const HOME_TREATMENTS = [
  {
    id: 'semaglutide',
    label: 'Semaglutide',
    tone: 'var(--navy)',
    toneSoft: 'color-mix(in oklch, var(--navy) 18%, transparent)',
    badge: 'GLP-1',
    badgeTone: 'var(--gold)',
    badgeSoft: 'color-mix(in oklch, var(--gold) 18%, transparent)',
    title: 'Personalized Semaglutide',
    description:
      'A weekly GLP-1 injection that may support weight management by helping regulate appetite — prescribed only after a licensed provider reviews your intake.',
    detail: 'GLP-1 (Semaglutide) · Provider-guided dosing.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    vials: [`${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout.avif`,
    learnHref: '/semaglutide',
    program: 'semaglutide',
  },
  {
    id: 'tirzepatide',
    label: 'Tirzepatide',
    tone: 'var(--gold-dark, #b08f4a)',
    toneSoft: 'color-mix(in oklch, var(--gold) 22%, transparent)',
    badge: 'Dual Pathway',
    badgeTone: 'var(--gold)',
    badgeSoft: 'color-mix(in oklch, var(--gold) 16%, transparent)',
    title: 'Personalized Tirzepatide',
    description:
      'A weekly dual-action GLP-1 + GIP injection for appetite regulation support — prescribed only after a licensed provider reviews your intake.',
    detail: 'GLP-1 + GIP (Tirzepatide) · Provider-guided dosing.',
    price: '$0',
    period: ' to start',
    priceNote: 'Itemized quote before enrollment',
    vials: [`${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout-tirz.avif`,
    learnHref: '/tirzepatide',
    program: 'tirzepatide',
  },
] as const

export const HOME_HIW_STEPS = [
  {
    n: '1',
    title: 'Complete your intake form',
    body: 'Answer a clinical questionnaire so licensed providers can determine if treatment is right for you.',
    image: `${YUCCA}/hiw/Checkout--Verify-identity.avif`,
    alt: 'Secure online medical intake',
  },
  {
    n: '2',
    title: 'Provider review',
    body: 'A licensed U.S. provider reviews your intake — typically within 24 hours — and decides if treatment is appropriate.',
    image: `${YUCCA}/hiw/Provider-reviews-intake_2.avif`,
    alt: 'Licensed clinician reviewing intake',
  },
  {
    n: '3',
    title: 'Start treatment',
    body: 'If approved, your prescription is filled by a licensed U.S. pharmacy and delivered discreetly to your door.',
    image: `${YUCCA}/hiw/Receive-your-medication_2.avif`,
    alt: 'Medication delivered to your door',
  },
] as const

export const HOME_FAQS = [
  {
    q: 'Is a prescription guaranteed?',
    lead: 'No. Completing an intake does not guarantee treatment. A licensed clinician decides based on your medical evaluation.',
  },
  {
    q: 'What treatments are offered for weight management?',
    lead: 'Personalized Semaglutide and Tirzepatide protocols when medically appropriate — prescribed by licensed U.S. providers and fulfilled by licensed pharmacies.',
  },
  {
    q: 'How does pricing work?',
    lead: 'You can start intake at $0. Itemized pricing is confirmed before enrollment. You are charged for ongoing program care only if prescribed.',
  },
  {
    q: 'Are compounded medications FDA-approved?',
    lead: 'Compounded medications are prepared by licensed U.S. pharmacies and are not FDA-approved as finished branded products.',
  },
] as const
