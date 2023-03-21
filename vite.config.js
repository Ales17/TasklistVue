import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  publicDir: "./public",
  build: {
    outDir: "./dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "/assets": "assets",
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
});
