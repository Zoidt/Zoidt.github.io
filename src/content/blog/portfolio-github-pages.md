---
title: "Building a Portfolio with GitHub Pages"
date: "2025-01-10"
excerpt: "A step-by-step guide to creating and deploying a developer portfolio using GitHub Pages."
tags: ["GitHub", "Portfolio", "Deployment"]
---

# Building a Portfolio with GitHub Pages

Creating a professional portfolio is essential for any developer. GitHub Pages offers a free and reliable way to host your portfolio directly from your GitHub repository.

## Why GitHub Pages?

- **Free hosting** for public repositories
- **Custom domain** support
- **Automatic deployments** when you push to your repo
- **SSL certificates** included
- **CDN** for fast global delivery

## Getting Started

### Step 1: Create Your Repository

Create a new repository with one of these naming conventions:
- `username.github.io` (for your main site)
- `portfolio` or any name (for project sites)

### Step 2: Choose Your Stack

For this portfolio, I chose:
- **Astro** for the static site generator
- **Vanilla CSS** for styling (keeping it simple)
- **Markdown** for blog posts

### Step 3: Build Your Site

Structure your project:
```
src/
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro
│   ├── portfolio.astro
│   └── blog.astro
└── content/
    └── blog/
        └── your-posts.md
```

## Deployment Configuration

### For Astro Projects

Update your `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://username.github.io',
  base: '/repository-name', // only if not using username.github.io
});
```

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@v3
    - name: Setup Node
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    - name: Install dependencies
      run: npm install
    - name: Build
      run: npm run build
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

## Best Practices

### Performance
- Optimize images before uploading
- Minify CSS and JavaScript
- Use a content delivery network (CDN)

### SEO
- Add meta descriptions to all pages
- Use semantic HTML
- Create a sitemap

### Accessibility
- Use proper heading hierarchy
- Add alt text to images
- Ensure good color contrast

## Monitoring and Analytics

Consider adding:
- **Google Analytics** for visitor insights
- **Google Search Console** for SEO monitoring
- **Uptime monitoring** tools

## Conclusion

GitHub Pages has made it incredibly easy to deploy and maintain my portfolio. The integration with GitHub's ecosystem is seamless, and the performance has been excellent.

The best part? Every time I push new content or improvements to my repository, the site automatically updates. It's perfect for developers who want to focus on building rather than managing hosting infrastructure.

---

*Have you deployed your portfolio to GitHub Pages? What was your experience like?*