import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.js",
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  define: {
    "process.env.NODE_ENV": '"development"', // optional, helps React in older setups
  },
});
