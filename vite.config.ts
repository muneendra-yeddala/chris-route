import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const REPO_NAME = "/chris-route/";
//const BASE_PATH = process.env.NODE_ENV === 'production' ? REPO_NAME : '/';
const BASE_PATH = REPO_NAME;
const PROJECT_ROOT = path.resolve(import.meta.dirname, "client");
const OUTPUT_DIR = path.resolve(import.meta.dirname, "docs");

//  const BASE_PATH = process.env.NODE_ENV === 'production' ? REPO_NAME : '/'; 


export default defineConfig({
  base: BASE_PATH,
  plugins: [
    react(),
    // runtimeErrorOverlay(),
    // ...(process.env.NODE_ENV !== "production" &&
    // process.env.REPL_ID !== undefined
    //   ? [
    //       await import("@replit/vite-plugin-cartographer").then((m) =>
    //         m.cartographer(),
    //       ),
    //       await import("@replit/vite-plugin-dev-banner").then((m) =>
    //         m.devBanner(),
    //       ),
    //     ]
    //   : []),
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
  // ,
  //  preview: {
  //   port: 5000, // <--- Add this to run 'npm run preview' on port 5000
  // },
  // server: {
  //   fs: {
  //     strict: true,
  //     deny: ["**/.*"],
  //   },
  // },
});
