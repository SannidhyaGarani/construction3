import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { WINE_LIST } from '../src/data/wines.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const siteUrl = (process.env.SITE_URL || 'https://ambivineyards.com').replace(/\/+$/, '');

const staticPaths = [
  '/',
  '/stores',
  '/book-tour',
  '/partner',
  '/our-story',
  '/our-vineyards',
  '/our-people',
  '/wishlist'
];

const categoryPaths = ['/wines/red', '/wines/white', '/wines/rose', '/wines/beer'];
const detailPaths = WINE_LIST.map(w => `/wine/${w.id}`);

const urls = [...staticPaths, ...categoryPaths, ...detailPaths];
const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${siteUrl}${u}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${u === '/' ? '1.0' : '0.7'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, xml, 'utf8');
console.log(`Sitemap generated: ${outPath}`);
