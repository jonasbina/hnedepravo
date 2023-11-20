import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';
import globby from 'globby';

function generateSitemap() {
  const pageFiles = globby.sync('pages/**/*{.js,.mdx}');
  const urls = pageFiles.map((file) => {
    const htmlString = fs.readFileSync(file, 'utf8');
    const $ = cheerio.load(htmlString);
    return $(`meta[property='og:url']`).attr('content');
  });
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
    <url>
      <loc>${url}</loc>
      <changefreq>daily</changefreq>
      <priority>0.7</priority>
    </url>`
      )
      .join('')}
  </urlset>`;
  fs.writeFileSync(path.join('./.next/static', 'sitemap.xml'), sitemap);
}

generateSitemap();