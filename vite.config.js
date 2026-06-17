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
      },
      output: {
        entryFileNames: "m-assets/[name]-[hash].js",
        chunkFileNames: "m-assets/[name]-[hash].js",
        assetFileNames: "m-assets/[name]-[hash][extname]",
      },
    },
  },
});
