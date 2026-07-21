import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'astro-website' below to your actual GitHub repo name.
// GitHub Pages serves your site at https://yourusername.github.io/repo-name/
// so Vite needs to know that subpath when building.
export default defineConfig({
  base: '/astro-website/',
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  }
})
