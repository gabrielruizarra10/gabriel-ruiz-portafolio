import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base stays relative so the site works on any domain / project page (GitHub Pages included).
  base: './',
})
