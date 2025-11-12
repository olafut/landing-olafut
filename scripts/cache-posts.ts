import fs from 'node:fs';
import path from 'node:path';
import { fetchPublishedPosts, getPostFromNotion } from '../src/lib/notion';
import { generateSitemap } from './generate-sitemap';

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
