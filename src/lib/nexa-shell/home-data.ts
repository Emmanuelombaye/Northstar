/** North Star MD — marketing shell data (LegitScript-accurate) */

export const YUCCA = '/images/yucca-clone'

export const HERO_WORDS = [
  { text: 'Semaglutide', color: 'var(--gold)' },
  { text: 'Tirzepatide', color: 'var(--gold)' },
] as const

export const HOME_WHY_MEDIA = {
  vials: `${YUCCA}/expt-tirz-sema-vials-together.png`,
  portal: '/images/pax-hiw-step-1.png',
} as const

export const HOME_CLOSING_IMAGE = `${YUCCA}/hiw/pax-why-science-results.avif`

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
    detail: 'GLP-1 (Semaglutide) · Provider-guided dosing. Compounded medication is not FDA-approved as a finished product.',
    price: '$125',
    period: '/mo',
    priceNote: '6-month plan · charged only if prescribed',
    vials: [`${YUCCA}/personalized-semaglutide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout.avif`,
    learnHref: '/treatments',
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
    detail: 'GLP-1 + GIP (Tirzepatide) · Provider-guided dosing. Compounded medication is not FDA-approved as a finished product.',
    price: '$225',
    period: '/mo',
    priceNote: '6-month plan · charged only if prescribed',
    vials: [`${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout-tirz.avif`,
    learnHref: '/treatments',
    program: 'tirzepatide',
  },
] as const

export const HOME_HIW_STEPS = [
  {
    n: '1',
    title: 'Complete a clinical intake',
    body: 'Share medical history, metrics, and shipping details in a secure questionnaire. This is an evaluation step — not a purchase.',
    image: '/images/pax-hiw-step-1.png',
    alt: 'Clinical intake on a tablet',
  },
  {
    n: '2',
    title: 'Licensed provider review',
    body: 'A state-licensed U.S. clinician reviews your answers — typically within about 24 hours — and decides whether treatment is appropriate. Completing intake does not guarantee a prescription.',
    image: '/images/pax-hiw-step-2.png',
    alt: 'Licensed clinician reviewing a patient intake',
  },
  {
    n: '3',
    title: 'Pharmacy fulfillment if prescribed',
    body: 'If approved, a licensed U.S. compounding pharmacy prepares your medication and ships it discreetly. Ongoing care and dose adjustments continue through your patient portal.',
    image: '/images/pax-hiw-step-3.png',
    alt: 'Temperature-controlled medication delivery',
  },
] as const

export const HOME_FAQS = [
  {
    q: 'Is a prescription guaranteed?',
    lead: 'No. Completing an intake does not guarantee treatment. A licensed clinician decides based on your medical evaluation, history, and eligibility.',
  },
  {
    q: 'Are compounded medications FDA-approved?',
    lead: 'Compounded Semaglutide and Tirzepatide are prepared by licensed U.S. pharmacies for individual patients when prescribed. They are not FDA-approved as finished branded products and have not been reviewed by the FDA for safety, effectiveness, or manufacturing quality as finished drugs.',
  },
  {
    q: 'Who reviews my intake?',
    lead: 'A licensed U.S. healthcare provider (such as a physician, DO, or nurse practitioner) licensed to practice in your state reviews your questionnaire before any prescription decision.',
  },
  {
    q: 'How does pricing work?',
    lead: 'You can begin the medical intake at no charge. If prescribed, itemized program pricing is confirmed before enrollment. You are not charged for ongoing medication fulfillment unless a provider approves treatment.',
  },
  {
    q: 'Where is medication shipped from?',
    lead: 'When prescribed, medication is fulfilled by licensed U.S. compounding pharmacies and shipped to an eligible address. Availability depends on your state and clinical review.',
  },
] as const
