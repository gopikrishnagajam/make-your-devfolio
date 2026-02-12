# Make Your DevFolio

Turn your resume PDF into a glowing portfolio site in minutes ✨

## Super Quick Start (just 2 commands)

1) Drop your resume here:
`resume/resume.pdf`

2) Add your free tier gemini api key:
`get it from google ai studios`

3) Run these two commands:
```
copy .env.example .env
docker compose up --build
```

Then open:
`http://localhost:5173`

That’s it — the container auto-runs the AI parser and the site updates itself.

## Deploy to GitHub Pages

1) Generate fresh resume data
```
npm run update-resume
```

2) Commit `src/data/resume.json` and push to `main`

3) In GitHub repo settings:
- Pages → Source: GitHub Actions

The workflow at `.github/workflows/deploy.yml` will build and deploy the site.

## How it works

- `scripts/update-resume.mjs` parses the PDF with `pdf-parse`
- It sends the text to Gemini and gets structured JSON
- The JSON is saved to `src/data/resume.json`
- UI renders directly from `src/data/resume.json`

## Notes

- Re-run `npm run update-resume` any time you update your resume.
- If the PDF is missing or parsing fails, the script will exit with an error.
