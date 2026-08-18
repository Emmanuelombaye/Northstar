"use client";

import React from "react";
import NextLink from "next/link";
import {
  usePathname,
  useRouter,
  useSearchParams as useNextSearchParams,
  useParams as useNextParams,
} from "next/navigation";

export interface LinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  to?: string;
  href?: string;
  replace?: boolean;
  scroll?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ to, href, children, ...props }: LinkProps) {
  const destination = to || href || "#";
  return (
    <NextLink href={destination} {...props}>
      {children}
    </NextLink>
  );
}

export function useNavigate() {
  const router = useRouter();
  return (to: string | number, options?: { replace?: boolean }) => {
    if (typeof to === "number") {
      if (to === -1) router.back();
      return;
    }
    if (options?.replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  };
}

export function useLocation() {
  const pathname = usePathname() || "";
  const searchParams = useNextSearchParams();
  const search = searchParams ? `?${searchParams.toString()}` : "";
  return {
    pathname,
    search,
    hash: "",
    state: null,
    key: "default",
  };
}

export function useParams<
  T extends Record<string, string | string[]> = Record<string, string | string[]>
>(): T {
  const params = useNextParams();
  if (!params) return {} as T;
  const result: Record<string, any> = { ...params };
  if (Array.isArray(params.slug) && params.slug.length > 0) {
    result.section = params.slug[0];
    if (params.slug[1]) result.subsection = params.slug[1];
  }
  return result as T;
}

export function useSearchParams(): [URLSearchParams, (params: any) => void] {
  const searchParams = useNextSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentParams = React.useMemo(() => {
    return new URLSearchParams(searchParams ? searchParams.toString() : "");
  }, [searchParams]);

  const setSearchParams = React.useCallback(
    (newParams: Record<string, string> | URLSearchParams) => {
      const p = new URLSearchParams(newParams as any);
      router.push(`${pathname}?${p.toString()}`);
    },
    [router, pathname]
  );

  return [currentParams, setSearchParams];
}

export function Navigate({ to, replace }: { to: string; replace?: boolean }) {
  const router = useRouter();
  React.useEffect(() => {
    if (replace) {
      router.replace(to);
    } else {
      router.push(to);
    }
  }, [to, replace, router]);
  return null;
}
