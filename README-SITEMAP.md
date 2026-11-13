# Tow Archive Sitemap update

This update changes only `package.json`, adds `scripts/generate-sitemap.mjs`, and adds `public/robots.txt`. It does **not** change the exhibition articles.

## Install
Copy the three items above into the root of your existing local `tow-archive` GitHub repository. Do **not** copy `dist` from another folder.

## Build and deploy
Run `npm run build` in that repo. It builds the Astro site and automatically writes `dist/sitemap-index.xml` and `dist/sitemap-0.xml`. Push the source changes with GitHub Desktop so Cloudflare rebuilds the site.

After deployment, visit `https://tow-archive.pages.dev/sitemap-index.xml` and check that it displays XML. In Google Search Console > サイトマップ submit `sitemap-index.xml`.

IMPORTANT: Keep your Search Console verification file at `public/googlef7551791a83c5902.html` in **your local repository**. This archive does not contain it and must not overwrite or delete it.
