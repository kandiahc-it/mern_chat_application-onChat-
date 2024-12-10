import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5000, // Change Vite dev server to a different port
    proxy: {
      "/api": {
        target: "http://localhost:8000", // Proxy requests to the backend server running on port 8000
        changeOrigin: true, // Fix CORS issues
        // rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' prefix before forwarding the request
      },
    },
  },
});
