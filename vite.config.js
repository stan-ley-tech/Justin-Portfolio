/* eslint-disable no-undef */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Base paths:
// - GitHub Pages: /Justin-Portfolio/
// - Vercel / local preview: /
const isGithubPages = process.env.DEPLOY_ENV === 'github';
const basePath = isGithubPages ? '/Justin-Portfolio/' : '/';

export default defineConfig({
  plugins: [react()],
  base: basePath,
});
