import { defineConfig } from "vitest/config"; // Use Vitest's defineConfig
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    environment: "jsdom", // Needed for testing React components
    setupFiles: "./src/test/setup.ts", // Optional, for Jest-like setup
  },
});
