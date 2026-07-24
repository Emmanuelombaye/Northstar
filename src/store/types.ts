export type StoreCategory =
  | "weight-loss"
  | "mens-health"
  | "womens-health"
  | "hair"
  | "skincare"
  | "sexual-wellness"
  | "hormone"
  | "longevity"
  | "recovery"
  | "sleep"
  | "mental-health"
  | (string & {});

export type PharmacyProduct = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: StoreCategory;
  categoryLabel: string;
  priceMonthly: number;
  compareAtPrice?: number;
  image: string;
  imageFallback?: string;
  imageAlt?: string;
  imageAltFallback?: string;
  gallery?: string[];
  rating: number;
  reviews: number;
  features: string[];
  includes: string[];
  badge?: string;
  popular?: boolean;
  newArrival?: boolean;
  inStock: boolean;
  peakProduct?: string;
  peakCategory?: string;
  dosageForm?: string;
  strength?: string;
  vendor?: string;
  isAlternative?: boolean;
  calculatedBmi?: string;
  safetyLabel?: string;
};

export type CartItem = {
  slug: string;
  name: string;
  priceMonthly: number;
  image: string;
  peakProduct?: string;
  peakCategory?: string;
};

export type SortKey = "featured" | "price-asc" | "price-desc" | "rating" | "name" | "newest";
