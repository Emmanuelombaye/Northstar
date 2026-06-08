import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  plugins: [react()],
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
