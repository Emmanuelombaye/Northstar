/**
 * Pharmacy-only Unsplash photo IDs — vials, pills, kits, labs, packaging.
 * No lifestyle / fitness / yoga / meditation stock.
 */
export const PHARMACY_PHOTOS = [
  "1584308666744-24d5c474f2ae", // vial
  "1556228578-0d85b1a4d571", // skincare cream tube
  "1522338242992-e1a54906a8da", // hair treatment
  "1579154204601-01588f351e67", // hormone lab
  "1582719471384-894fbb16e074", // peptide kit
  "1576091160399-112ba8d25d1d", // tablets / packaging
  "1505751172876-fa1923c5c528", // supplements bottles
  "1559757148-5c350d0d3c56", // GLP-1 / weight vial
  "1550572017-edb79a6144e5", // medical pills
  "1631543931893-4e25c20f5dd0", // pharmacy shelf
  "1532187863486-ab9f9f01ef36", // lab microscope
  "1556909114-f6e7ad7d3136", // vitamin bottles
  "1620916560350-3b53d5e29100", // cream jar
  "1608245449331-3f5c75a7c3e2", // serum dropper
  "1608571422092-4b4fc9a8f6f8", // hair serum
  "1581595220892-b0799db879a8", // injection pen
  "1584515937757-fdc718c05d9b", // cold pack
  "1576086213563-972a7e7010e1", // blood test
  "1582719508461-905c673771bd", // product packaging
  "1541781774459-bb2af2f05b55", // melatonin / sleep bottle
  "1540555700478-4be289fbecef", // IV / infusion setup
  "1576678927484-cc907957088c", // joint / recovery vial
  "1666214066297-8bebe0500645", // clinical consult
  "1587854692152-cbc864d8b370", // pharmacy counter
];

export function photoUrl(id, w = 600, h = 600) {
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=82&auto=format`;
}

export function assignPhotoPair(index) {
  const n = PHARMACY_PHOTOS.length;
  const primary = PHARMACY_PHOTOS[index % n];
  let alt = PHARMACY_PHOTOS[(index + 7) % n];
  if (alt === primary) alt = PHARMACY_PHOTOS[(index + 11) % n];
  return { primary, alt };
}
