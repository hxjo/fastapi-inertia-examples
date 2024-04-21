import { fileURLToPath } from "node:url";
import { dirname } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const projectRoot = dirname(fileURLToPath(import.meta.url));
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": `${projectRoot}/src`,
    },
  },
  build: {
    manifest: "manifest.json",
    outDir: "dist",
    rollupOptions: {
      input: "src/main.js",
    },
  },
});
