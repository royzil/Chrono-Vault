```markdown
# chronovault

Chronovault is a small watch collection manager built with React + Material UI.

Features
- Dark (black) theme with green heading accents
- Upload photos (stored in browser localStorage as base64)
- Add watch details: brand, model, reference number, date purchased, price, notes
- Sort by recently added, date purchased, price, brand
- Local persistence (localStorage). For larger collections consider IndexedDB or cloud storage.

How to run (quick, in-browser)
- Import the GitHub repo into StackBlitz or CodeSandbox:
  - StackBlitz: https://stackblitz.com -> Import from GitHub -> paste your repo URL
  - CodeSandbox: https://codesandbox.io -> Create Sandbox -> Import from GitHub
- The site should build and show the app in the browser.

Deploy options (no terminal required)
- Vercel (recommended): https://vercel.com -> Import Project -> connect your GitHub repo -> Deploy
- Netlify: https://app.netlify.com -> New site from Git -> connect repo
- GitHub Pages: repository contains a GitHub Action workflow to build and deploy to the gh-pages branch automatically after pushes.

Notes
- Images stored in localStorage will consume browser storage. For many or high-res images, use a cloud storage provider (Supabase/Firebase/S3) and store URLs instead.
- If you want me to set up the repo and deploy it for you, tell me the repo visibility (public/private) and your GitHub username and I’ll prepare the repo structure and deployment settings instructions.
```
