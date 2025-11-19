import type { MetadataRoute } from 'next';
import { getPostsFromCache } from '@/lib/notion';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://olafut.com';
  const posts = getPostsFromCache();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2025-11-19T00:00:00.000-05:00'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date('2025-11-19T00:00:00.000-05:00'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2025-11-19T00:00:00.000-05:00'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPosts];
}
