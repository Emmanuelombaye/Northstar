import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  root: ".",
  publicDir: "public",
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        howItWorks: resolve(__dirname, "how-it-works.html"),
        membership: resolve(__dirname, "membership.html"),
        resources: resolve(__dirname, "resources.html"),
        about: resolve(__dirname, "about.html"),
        diagnostics: resolve(__dirname, "diagnostics.html"),
      },
      output: {
        // m-assets avoids clashing with Peak Health /assets/* proxied on joinnorthstarmd.com
        entryFileNames: "m-assets/[name]-[hash].js",
        chunkFileNames: "m-assets/[name]-[hash].js",
        assetFileNames: "m-assets/[name]-[hash][extname]",
      },
    },
  },
});
