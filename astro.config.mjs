import { defineConfig } from 'astro/config';

export default defineConfig({
  // Use process.env.BASE_PATH as set by GitHub Secrets
  base: process.env.BASE_PATH || '/',
  
  // Set other options as needed
  site: 'https://celestegambardella.github.io', // Replace with your GitHub Pages URL
});
