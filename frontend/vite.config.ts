import { defineConfig } from "vite";
import { dirname } from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: resolve(__dirname, "../.env") });

// https://vitejs.dev/config/
export default defineConfig({
  esbuild: {
    loader: "tsx",
  },
  root: "./",
  build: {
    outDir: "./dist",
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
        ".ts": "tsx",
      },
    },
  },
  plugins: [react()],
});
