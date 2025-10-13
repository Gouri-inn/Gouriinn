import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://gouriinn.com',
      dynamicRoutes: [
        '/Seva/FoodBeverages',
        '/Seva/EventWedding',
        '/Seva/GuestRooms',
        '/Seva/SpecialOffers',
      ],
    }),
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
          utils: ['axios', 'dayjs']
        },
        external: ['gsap', 'gsap/ScrollTrigger']
      }
    },
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 3000
  },
  preview: {
    port: 4173
  }
})
