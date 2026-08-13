/** North Star MD — marketing shell data (LegitScript-accurate) */

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
    title: 'Compounded Semaglutide',
    description:
      'A weekly GLP-1 injection that may support appetite regulation as part of a medically supervised weight-management plan. Available only if a licensed U.S. provider determines it is appropriate after reviewing your intake.',
    detail: 'Compounded GLP-1 (Semaglutide) · Not FDA-approved as a finished product · Provider review required.',
    price: '$0',
    period: ' to start intake',
    priceNote: 'Itemized pricing shown before you enroll',
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
    badge: 'GLP-1 + GIP',
    badgeTone: 'var(--gold)',
    badgeSoft: 'color-mix(in oklch, var(--gold) 16%, transparent)',
    title: 'Compounded Tirzepatide',
    description:
      'A weekly dual-pathway GLP-1 + GIP injection that may support appetite regulation when medically appropriate. Prescribed only after a licensed U.S. provider reviews your clinical intake.',
    detail: 'Compounded GLP-1 + GIP (Tirzepatide) · Not FDA-approved as a finished product · Provider review required.',
    price: '$0',
    period: ' to start intake',
    priceNote: 'Itemized pricing shown before you enroll',
    vials: [`${YUCCA}/personalized-tirzepatide-glp-1-injection-vial-yucca-health.avif`],
    cutoutPair: `${YUCCA}/pax-glp1-couple-cutout-tirz.avif`,
    learnHref: '/tirzepatide',
    program: 'tirzepatide',
  },
] as const

export const HOME_HIW_STEPS = [
  {
    n: '1',
    title: 'Complete a clinical intake',
    body: 'Share medical history, metrics, and shipping details in a secure questionnaire. This is an evaluation step — not a purchase.',
    image: `${YUCCA}/hiw/Checkout--Verify-identity.avif`,
    alt: 'Secure online medical intake',
  },
  {
    n: '2',
    title: 'Licensed provider review',
    body: 'A state-licensed U.S. clinician reviews your answers — typically within about 24 hours — and decides whether treatment is appropriate. Completing intake does not guarantee a prescription.',
    image: `${YUCCA}/hiw/Provider-reviews-intake_2.avif`,
    alt: 'Licensed clinician reviewing intake',
  },
  {
    n: '3',
    title: 'Pharmacy fulfillment if prescribed',
    body: 'If approved, a licensed U.S. compounding pharmacy prepares your medication and ships it discreetly. Ongoing care and dose adjustments continue through your patient portal.',
    image: `${YUCCA}/hiw/Receive-your-medication_2.avif`,
    alt: 'Medication prepared for home delivery',
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
