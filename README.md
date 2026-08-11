# Gopi Krishna Gajam — Portfolio

A static, responsive portfolio built with React and Vite. It showcases my
experience, education, technical skills, and selected projects with animated
cards and a Three.js star background.

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Edit portfolio content

Update `src/data/portfolio.js`. All visible professional content is maintained
directly in that file; the site has no API, database, résumé parser, or external
content-generation step.

The deployed portrait is `public/profile.jpg`. Files in `resources/` are source
material for editing and are intentionally excluded from Git.

## Production build

```bash
npm run build
npm run preview
```

Pushes to `main` are built and deployed to GitHub Pages by the included GitHub
Actions workflow.

The Vite configuration uses relative production asset paths, so the site works
both at a custom domain and under a GitHub Pages repository subpath.
