import fs from 'node:fs';
import path from 'node:path';
import type { PageObjectResponse } from '@notionhq/client';
import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import type { Post } from '@/interfaces/post';
import { generateSlug } from '@/utils';
import { downloadImage } from '@/utils/downloadImage';

export const notion = new Client({ auth: process.env.NOTION_TOKEN });
export const n2m = new NotionToMarkdown({ notionClient: notion });

type NotionProperties = {
  // biome-ignore lint/suspicious/noExplicitAny: Needed for dynamic properties
  [key: string]: any;
};

export async function getDatabaseStructure() {
  const database = await notion.databases.retrieve({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
  });
  return database;
}

export function getWordCount(content: string): number {
  const cleanText = content
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleanText.split(' ').length;
}

export function getPostsFromCache(): Post[] {
  const cachePath = path.join(process.cwd(), 'posts-cache.json');
  if (fs.existsSync(cachePath)) {
    try {
      const cache = fs.readFileSync(cachePath, 'utf-8');
      const posts: Post[] = JSON.parse(cache);
      return posts.concat(posts, posts).map((post, index) => ({
        ...post,
        slug: `${post.slug}-${index}`, // Ensure unique slugs
        id: `${post.id}-${index}`, // Ensure unique IDs
      }));
    } catch (error) {
      console.error('Error reading posts cache:', error);
      return [];
    }
  }
  return [];
}

export async function fetchPublishedPosts() {
  // This function is now intended to be used only by the caching script.
  const posts = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID ?? '',
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'Published',
          },
        },
      ],
    },
    sorts: [
      {
        property: 'Published Date',
        direction: 'descending',
      },
    ],
  });

  return posts.results as PageObjectResponse[];
}

export async function getPost(slug: string): Promise<Post | null> {
  const posts = getPostsFromCache();
  const post = posts.find((p) => p.slug === slug);
  return post || null;
}

export async function getPostFromNotion(pageId: string): Promise<Post | null> {
  try {
    const page = (await notion.pages.retrieve({
      page_id: pageId,
    })) as PageObjectResponse;
    const mdBlocks = await n2m.pageToMarkdown(pageId);

    const properties = page.properties as NotionProperties;

    // Extract title
    const title = properties.Title.title[0]?.plain_text || 'Untitled';

    // Generate slug
    const slug = generateSlug(title);

    // Get and download cover image
    const imageUrl = properties['Featured Image'].files?.[0]?.file.url;
    const extension = imageUrl
      ? imageUrl.split('.').pop().split('?')[0]
      : 'jpg';

    if (imageUrl) {
      downloadImage(
        imageUrl,
        path.join(
          process.cwd(),
          'public',
          'assets',
          'blog',
          `${slug}.${extension}`,
        ),
      )
        .then((message) => console.log(message))
        .catch((error) => console.error('Error downloading image:', error));
    }

    // Generate markdown content
    const { parent: contentString } = n2m.toMarkdownString(mdBlocks);

    // Generate summary from Description or use first 160 chars of content
    const paragraphs = contentString
      .split('\n')
      .filter((line: string) => line.trim().length > 0);

    const firstParagraph = paragraphs[0] || '';

    const description =
      firstParagraph.slice(0, 160) + (firstParagraph.length > 160 ? '...' : '');

    const summary =
      properties.Description?.rich_text[0]?.plain_text || description;

    // Get publish date
    const publishDate =
      properties['Published Date']?.date?.start || new Date().toISOString();

    // Get author info and download avatar image
    const authorName = properties.Author?.people[0]?.name || 'author';
    const authorAvatar = properties.Author?.people[0]?.avatar_url || '';
    const authorSlug = generateSlug(authorName);

    if (authorAvatar) {
      downloadImage(
        authorAvatar,
        path.join(
          process.cwd(),
          'public',
          'assets',
          'blog',
          'authors',
          `${authorSlug}.jpg`,
        ),
      )
        .then((message) => console.log(message))
        .catch((error) =>
          console.error('Error downloading author avatar:', error),
        );
    }

    // Get SEO tags
    const tags =
      properties.Tags?.multi_select?.map((tag: { name: string }) => tag.name) ||
      [];

    // Get category
    const category = properties.Category?.select?.name;

    // Construct Post object
    const post: Post = {
      id: page.id,
      title,
      slug,
      coverImage: imageUrl ? `/assets/blog/${slug}.${extension}` : undefined,
      summary,
      date: publishDate,
      content: contentString,
      author: {
        name: authorName,
        avatar: authorAvatar ? `/assets/blog/authors/${authorSlug}.jpg` : '',
      },
      tags,
      category,
    };

    return post;
  } catch (error) {
    console.error('Error getting post:', error);
    return null;
  }
}
