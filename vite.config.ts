import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

 const REPO_NAME = "/chris-route/";

//  const BASE_PATH = process.env.NODE_ENV === 'production' ? REPO_NAME : '/'; 


export default defineConfig({
  base: REPO_NAME,
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" &&
    process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer(),
          ),
          await import("@replit/vite-plugin-dev-banner").then((m) =>
            m.devBanner(),
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    // outDir: path.resolve(import.meta.dirname, "dist/public"),
    outDir: path.resolve(import.meta.dirname, "docs/"),
    emptyOutDir: true,
  },
  // ,
  //  preview: {
  //   port: 5000, // <--- Add this to run 'npm run preview' on port 5000
  // },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
