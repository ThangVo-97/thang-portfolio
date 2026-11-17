# Vo Dinh Thang – Portfolio

Personal portfolio of **Võ Đình Thắng**, Full-stack Developer (React · Next.js · TypeScript · Node.js · Java).

Built with **Next.js (App Router) + TypeScript + CSS Modules**, exported as a fully static site.

## Highlights

- **Static export** – `next build` outputs plain HTML/CSS/JS to `out/`, so it can be hosted anywhere (Vercel, GitHub Pages, Netlify).
- **Accessible by default** – semantic landmarks, skip link, visible focus styles, keyboard-friendly mobile menu (Escape to close), `prefers-reduced-motion` support.
- **SEO ready** – page metadata, Open Graph, `Person` JSON-LD structured data, generated `sitemap.xml` and `robots.txt`.
- **Tested** – Playwright end-to-end tests on desktop and mobile viewports.
- **CI** – GitHub Actions runs lint, type check, build and E2E tests on every push and pull request.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Build the static site into `out/` |
| `npm run preview` | Serve `out/` locally on port 4173 |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run the TypeScript compiler |
| `npm run test:e2e` | Run Playwright tests (run `npm run build` first) |

First time running tests locally: `npx playwright install chromium`.

## Editing content

All text lives in [`src/data/profile.ts`](src/data/profile.ts): summary, skills, experience and personal projects.
To add a project, append an entry to `personalProjects`. Replace `public/cv-vo-dinh-thang.pdf` to update the downloadable CV.

## Deploying

### Vercel (recommended)

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), choose **Add New → Project** and import the repo. The defaults work as-is.
3. Under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to your final URL (e.g. `https://thang-vo-dinh.vercel.app`) so the sitemap and metadata use the right domain, then redeploy.

### GitHub Pages

Build with the repository name as the base path, then publish the `out/` folder:

```bash
NEXT_PUBLIC_BASE_PATH=/<repo-name> NEXT_PUBLIC_SITE_URL=https://<username>.github.io/<repo-name> npm run build
```

If the repository is named `<username>.github.io`, leave `NEXT_PUBLIC_BASE_PATH` empty.

## Project structure

```
src/
  app/          layout, page, sitemap.ts, robots.ts, global styles
  components/   one component + CSS Module per section
  data/         profile.ts (content) and site.ts (URL settings)
e2e/            Playwright tests
public/         CV PDF and static assets
```
