import type { Metadata, Viewport } from "next";
import { Providers } from "./providers";

import "../../css/styles.css";
import "../../css/mobile.css";
import "../../css/mobile-animations.css";
import "../../css/shop.css";
import "../../css/pharm.css";
import "../../css/checkout-intake.css";

// Marketing Pages CSS
import "../../css/about.css";
import "../../css/explore-treatments.css";
import "../../css/faq.css";
import "../../css/how-it-works.css";
import "../../css/membership.css";
import "../../css/resources.css";
import "../../css/treatments.css";
import "../../css/pax-site.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "North Star MD | Guided by Science. Designed for You.",
  description:
    "North Star MD — Physician-guided longevity, metabolic health, and wellness care delivered wherever you are.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link
          rel="preload"
          as="image"
          href="/images/home/hero-desktop-treatments.png?v=20260818d"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
