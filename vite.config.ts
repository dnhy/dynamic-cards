import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// import legacy from "@vitejs/plugin-legacy";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  plugins: [react()],

  server: { host: "0.0.0.0" },
});
