import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    // Use relative asset paths so builds work on GitHub Pages project sites
    // (served from /<repo>/ instead of /).
    base: './'
});
