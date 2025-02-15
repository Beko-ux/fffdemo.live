import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true, // Enable for development testing
      },
      manifest: {
        name: "Fever App",
        short_name: "FeverApp",
        description: "A health app for fever management",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg,ico}", "**/*.{json,woff2,ttf}", "**/*.{mp3,mp4}", "**/*.{webp, jpg}", "**/*.wasm"], // Ensure more assets are cached
        clientsClaim: true, // Force clients to update immediately
        skipWaiting: true, // Skip waiting for a manual reload
      },
    }),
  ],
});
