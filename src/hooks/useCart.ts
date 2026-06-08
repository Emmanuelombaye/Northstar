import { useCallback, useEffect, useState } from "react";
import type { CartItem } from "../store/types";
import { getProductBySlug, getProductEnrollUrl } from "../store/products";
import { shop } from "../lib/shop";

const STORAGE_KEY = "northstar-md-cart";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const persist = useCallback((next: CartItem[]) => {
    setItems(next);
    saveCart(next);
  }, []);

  const add = useCallback(
    (slug: string) => {
      const product = getProductBySlug(slug);
      if (!product) return;
      persist([
        ...items.filter((i) => i.slug !== slug),
        {
          slug: product.slug,
          name: product.name,
          priceMonthly: product.priceMonthly,
          image: product.image,
          peakProduct: product.peakProduct,
          peakCategory: product.peakCategory,
        },
      ]);
      setOpen(true);
    },
    [items, persist],
  );

  const remove = useCallback(
    (slug: string) => {
      persist(items.filter((i) => i.slug !== slug));
    },
    [items, persist],
  );

  const clear = useCallback(() => persist([]), [persist]);

  const checkoutUrl = useCallback(
    (slug?: string) => {
      const target = slug ? items.find((i) => i.slug === slug) : items[items.length - 1];
      if (!target) return shop.catalog();
      const product = getProductBySlug(target.slug);
      if (product) return getProductEnrollUrl(product);
      if (target.peakProduct) return shop.product(target.peakProduct);
      if (target.peakCategory) return shop.category(target.peakCategory);
      return shop.catalog();
    },
    [items],
  );

  const total = items.reduce((s, i) => s + i.priceMonthly, 0);
  const count = items.length;

  return { items, count, total, open, setOpen, add, remove, clear, checkoutUrl };
}
