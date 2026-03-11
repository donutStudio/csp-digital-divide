import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site base path for this repository.
  // Prevents blank page caused by missing JS/CSS when visiting /csp-digital-divide.
  base: '/csp-digital-divide/'
});
