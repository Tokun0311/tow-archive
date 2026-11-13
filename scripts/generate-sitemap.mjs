import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const base = 'https://tow-archive.pages.dev';
const urls = new Set();

async function crawl(folder) {
  for (const entry of await readdir(folder, { withFileTypes: true })) {
    const absolute = path.join(folder, entry.name);
    if (entry.isDirectory()) {
      await crawl(absolute);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      const relative = path.relative(dist, absolute).split(path.sep).join('/');
      if (relative === '404.html' || relative.startsWith('404/')) continue;
      // Astro's static pages are /index.html or /section/page/index.html.
      let pathname = relative === 'index.html' ? '/' : '/' + relative;
      if (pathname.endsWith('/index.html')) pathname = pathname.slice(0, -'index.html'.length);
      // Exclude HTML verification files and other non-site pages.
      if (!pathname.endsWith('/')) continue;
      urls.add(base + pathname);
    }
  }
}

function escapeXml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&apos;');
}

await crawl(dist);
if (!urls.has(base + '/')) throw new Error('Missing built homepage; sitemap not generated.');
const sorted = [...urls].sort();
const urlset = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  sorted.map(url => `  <url><loc>${escapeXml(url)}</loc></url>`).join('\n') +
  '\n</urlset>\n';
const index = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  `  <sitemap><loc>${base}/sitemap-0.xml</loc></sitemap>\n` +
  '</sitemapindex>\n';
await writeFile(path.join(dist, 'sitemap-0.xml'), urlset, 'utf8');
await writeFile(path.join(dist, 'sitemap-index.xml'), index, 'utf8');
console.log(`Sitemap generated: ${sorted.length} public pages`);
