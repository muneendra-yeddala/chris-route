import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// const REPO_NAME = "/chris-route/";
// const BASE_PATH = process.env.NODE_ENV === 'production' ? REPO_NAME : '/';
const BASE_PATH = './';
const PROJECT_ROOT = path.resolve(import.meta.dirname, "client");
const OUTPUT_DIR = path.resolve(import.meta.dirname, "docs");


export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(PROJECT_ROOT, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: PROJECT_ROOT,
  build: {
    // outDir: path.resolve(import.meta.dirname, "dist/public"),
    outDir: OUTPUT_DIR,
    emptyOutDir: true,
  },
});
