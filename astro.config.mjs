import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://Zoidt.github.io', // Replace with your GitHub username,
  base: '/',
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
