import { useCallback, useEffect, useState } from "react";

const KEY = "northstar-md-wishlist";

function load(): string[] {
  try {
    const raw = localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function useWishlist() {
  const [slugs, setSlugs] = useState<string[]>([]);

  useEffect(() => {
    setSlugs(load());
  }, []);

  const persist = useCallback((next: string[]) => {
    setSlugs(next);
    localStorage.setItem(KEY, JSON.stringify(next));
  }, []);

  const toggle = useCallback(
    (slug: string) => {
      if (slugs.includes(slug)) persist(slugs.filter((s) => s !== slug));
      else persist([...slugs, slug]);
    },
    [slugs, persist],
  );

  const has = useCallback((slug: string) => slugs.includes(slug), [slugs]);

  return { slugs, count: slugs.length, toggle, has };
}
