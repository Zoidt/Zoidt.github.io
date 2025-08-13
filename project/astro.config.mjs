import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io', // Replace with your GitHub username
  integrations: [],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});