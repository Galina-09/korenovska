import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:
    process.env.VERCEL === "1"
      ? "/" // для Vercel
      : "/korenovska/", // для GitHub Pages
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
