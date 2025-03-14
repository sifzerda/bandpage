import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': {
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  },
  test: {
    environment: 'happy-dom',
    globals: true
  },
  css: {
    // Optional: Adding this for asset handling if needed
    preprocessorOptions: {
      css: {
        additionalData: `@import "~@fullcalendar/core/main.css";`
      }
    }
  }
})
