import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: "/blog",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "firebase/app", "firebase/firestore"],
        },
      },
    },
  },
});
