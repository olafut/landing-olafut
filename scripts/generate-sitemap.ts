import fs from 'node:fs';
import path from 'node:path';
import type { Post } from '@/interfaces';

export async function generateSitemap(posts: Post[]) {
  const baseUrl = 'https://olafut.com';

  const staticPages = [
    {
      url: '',
      priority: '1.0',
      changefreq: 'monthly',
      lastmod: new Date('2025-11-10T00:00:00.000-05:00').toISOString(),
    },
    {
      url: '/blog',
      priority: '0.9',
      changefreq: 'monthly',
      lastmod: new Date('2025-11-10T00:00:00.000-05:00').toISOString(),
    },
    {
      url: '/about',
      priority: '0.8',
      changefreq: 'monthly',
      lastmod: new Date('2025-11-10T00:00:00.000-05:00').toISOString(),
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join('\n')}
${posts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`,
  )
  .join('\n')}
</urlset>`;

  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('✓ Sitemap generated successfully');
}
