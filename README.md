# Tow Deng — Experimental Archive (starter)

Astro static site for personal writing, research notes and photo series.

## Requirements

Install Node.js 22 LTS or newer, Git, and optionally VS Code.

## Run locally

```bash
npm install
npm run dev
```
Open the local address shown in the terminal (usually http://localhost:4321).

For a production build:

```bash
npm run build
npm run preview
```

## Add a writing piece

Copy `src/data/writing/on-exhibitions.md` to a new filename such as `my-first-essay.md`. Change the fields between the `---` lines, then write Markdown below. The filename becomes the URL at `/writing/my-first-essay/`. Set `draft: true` to hide a work in progress.

## Add a photo series

Copy `src/data/photography/field-notes.md` to a new filename. Put optimized JPG/WebP photos inside `public/images/` and list them in the frontmatter:

```yaml
images:
  - src: "/images/photo-01.webp"
    alt: "A description of the scene"
  - src: "/images/photo-02.webp"
    alt: "A second scene"
```

Use web-size exports (e.g. around 1800–2200px wide), not uncompressed RAW files. Keep your originals backed up elsewhere.

## Edit site identity

- Header, navigation, and footer: `src/layouts/Base.astro`
- Introduction: `src/pages/index.astro`
- About page: `src/pages/about/index.astro`
- Fonts, spacing, and colors: `src/styles/global.css`
- Article metadata and collection rules: `src/content.config.ts`

**Important:** Current entries are marked as demonstration content. Replace or set `draft: true` before publishing. Check rights/consent for images and any non-public project information.

## Deploy to Cloudflare Pages (Git-connected)

1. Create a GitHub repository, e.g. `tow-archive`.
2. Push this project's *contents* to the repository.
3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Import existing Git repository.
4. Select framework **Astro**, command **`npm run build`**, output directory **`dist`**, production branch **`main`**.
5. Deploy and use the `*.pages.dev` address first. Buy/connect a custom domain only after the design is ready.
6. Every future `git push` to main can trigger a new deployment.

Note: Cloudflare also offers Workers-based paths for Astro, but this project is intentionally static and uses Pages.

## Sample first commit (from inside folder)

```bash
git init
git add .
git commit -m "Create experimental archive"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/tow-archive.git
git push -u origin main
```

Update URL to your repository. Do not upload secrets or private archives.
