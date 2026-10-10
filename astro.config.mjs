// @ts-check
import { defineConfig } from 'astro/config';

// Static build. The same dist/ folder serves GitHub Pages and Hostinger.
export default defineConfig({
  site: 'https://rezoanulhoque.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
