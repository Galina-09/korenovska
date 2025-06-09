import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-bolt-clean/", // 🔁 заміни на назву свого GitHub репозиторію!
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
