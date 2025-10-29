import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use VITE_BASE_PATH environment variable if set (for GitHub Pages), otherwise default to '/'
export default defineConfig({
  plugins: [react()],
  // eslint-disable-next-line no-undef
  base: process.env.VITE_BASE_PATH || '/',
})
