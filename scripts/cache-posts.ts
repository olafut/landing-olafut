import fs from 'node:fs';
import path from 'node:path';
import type { Post } from '@/interfaces';
import { fetchPublishedPosts, getPostFromNotion } from '../src/lib/notion';

async function generateSitemap(posts: Post[]) {
  const baseUrl = 'https://olafut.com';

  const staticPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/blog', priority: '0.9', changefreq: 'monthly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
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

async function cachePosts() {
  try {
    console.log('Fetching posts from Notion...');
    const posts = await fetchPublishedPosts();

    const allPosts = [];

    for (const post of posts) {
      const postDetails = await getPostFromNotion(post.id);
      if (postDetails) {
        allPosts.push(postDetails);
      }
    }

    await generateSitemap(allPosts);

    const cachePath = path.join(process.cwd(), 'posts-cache.json');
    fs.writeFileSync(cachePath, JSON.stringify(allPosts, null, 2));

    console.log(`Successfully cached ${allPosts.length} posts.`);
  } catch (error) {
    console.error('Error caching posts:', error);
    process.exit(1);
  }
}

cachePosts();
