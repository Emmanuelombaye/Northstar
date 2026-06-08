import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { existsSync } from "node:fs";

const cleanUrlsMiddleware = (req, res, next) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = url.pathname;
  
  if (pathname === "/") {
    return next();
  }

  if (!pathname.includes(".") && !pathname.startsWith("/shop")) {
    const filePath = resolve(__dirname, `${pathname.slice(1)}.html`);
    if (existsSync(filePath)) {
      req.url = `${pathname}.html${url.search}`;
    }
  }
  next();
};

export default defineConfig({
  root: ".",
  publicDir: "public",
  plugins: [
    react(),
    {
      name: "clean-urls",
      configureServer(server) {
        server.middlewares.use(cleanUrlsMiddleware);
      },
      configurePreviewServer(server) {
        server.middlewares.use(cleanUrlsMiddleware);
      }
    }
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        howItWorks: resolve(__dirname, "how-it-works.html"),
        about: resolve(__dirname, "about.html"),
        faq: resolve(__dirname, "faq.html"),
        privacy: resolve(__dirname, "privacy.html"),
        terms: resolve(__dirname, "terms.html"),
        telehealthConsent: resolve(__dirname, "telehealth-consent.html"),
        semaglutide: resolve(__dirname, "semaglutide.html"),
        tirzepatide: resolve(__dirname, "tirzepatide.html"),
        nad: resolve(__dirname, "nad.html"),
        sermorelin: resolve(__dirname, "sermorelin.html"),
        exploreTreatments: resolve(__dirname, "explore-treatments.html"),
      },
      output: {
        entryFileNames: "m-assets/[name]-[hash].js",
        chunkFileNames: "m-assets/[name]-[hash].js",
        assetFileNames: "m-assets/[name]-[hash][extname]",
      },
    },
  },
});
