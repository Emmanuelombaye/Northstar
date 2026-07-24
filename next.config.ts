import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.peak-health.io",
      },
      {
        protocol: "https",
        hostname: "peak-health.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/care/north-star-md/shop",
        has: [{ type: "host", value: "joinnorthstarmd.com" }],
        missing: [
          { type: "query", key: "brand" },
          { type: "query", key: "brandId" },
        ],
        destination:
          "/care/north-star-md/shop?brand=north-star-md&brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c",
        permanent: false,
      },
      {
        source: "/care/north-star-md/shop",
        has: [{ type: "host", value: "www.joinnorthstarmd.com" }],
        missing: [
          { type: "query", key: "brand" },
          { type: "query", key: "brandId" },
        ],
        destination:
          "/care/north-star-md/shop?brand=north-star-md&brandId=c8e7f6a2-4b1d-4e9f-a3c2-1d5e8f7a6b4c",
        permanent: false,
      },
      {
        source: "/diagnostics",
        destination: "/treatments",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/advisors",
        permanent: false,
      },
      {
        source: "/resources",
        destination: "/education",
        permanent: false,
      },
      {
        source: "/explore-treatments",
        destination: "/treatments",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/logo/portal-logo.png",
        destination: "/favicon.svg",
      },
      {
        source: "/favicon.ico",
        destination: "/favicon.svg",
      },
      {
        source: "/favicon.png",
        destination: "/favicon.svg",
      },
      {
        source: "/assets/:path*",
        destination: "https://www.peak-health.io/assets/:path*",
      },
      {
        source: "/logo/:path*",
        destination: "https://www.peak-health.io/logo/:path*",
      },
      {
        source: "/brands/:path*",
        destination: "https://www.peak-health.io/brands/:path*",
      },
      {
        source: "/generatedImages/:path*",
        destination: "https://www.peak-health.io/generatedImages/:path*",
      },
      {
        source: "/images/brand/:path*",
        destination: "https://www.peak-health.io/images/brand/:path*",
      },
      {
        source: "/originallogo.png",
        destination: "https://www.peak-health.io/originallogo.png",
      },
      {
        source: "/PeakHealthLogo.png",
        destination: "https://www.peak-health.io/PeakHealthLogo.png",
      },
      {
        source: "/peakhealthlogo.png",
        destination: "https://www.peak-health.io/PeakHealthLogo.png",
      },
      {
        source: "/:portal(doctor|providers|patient|admin|superadmin|pharmacy|affiliate)",
        destination: "https://www.peak-health.io/:portal",
      },
      {
        source: "/:portal(doctor|providers|patient|admin|superadmin|pharmacy|affiliate)/:path*",
        destination: "https://www.peak-health.io/:portal/:path*",
      },
      {
        source: "/login",
        destination: "https://www.peak-health.io/login",
      },
    ];
  },
};

export default nextConfig;
