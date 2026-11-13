// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  redirects: {
    '/projects/faisal-hills/': '/projects/faisal-jewel/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
