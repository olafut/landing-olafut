import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  PostBody,
  PostContainer,
  PostHeader,
  ShareButtons,
} from '@/components/blog';
import { BASE_METADATA } from '@/constants/base-metadata';
import markdownToHtml from '@/lib/markdownToHtml';
import { getPost, getPostsFromCache } from '@/lib/notion';

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const post = await getPost(slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || '');

  return (
    <main className="py-16">
      <PostContainer>
        <PostHeader post={post} />
        <article className="mb-16">
          <PostBody content={content} />
        </article>

        {/* Share Section */}
        <div className="max-w-2xl mx-auto border-t border-gray-200 pt-12 mb-16">
          <ShareButtons title={post.title} slug={post.slug} />
        </div>
      </PostContainer>
    </main>
  );
}

export async function generateStaticParams() {
  const posts = getPostsFromCache();

  return posts.map((post) => ({
    slug: String(post.slug),
  }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPost(params.slug);

  if (!post) return notFound();

  const title = `${post.title} | Blog Olafut`;
  const url = `https://olafut.com/blog/${post.slug}/`;
  const imageUrl = post.coverImage ? post.coverImage : undefined;

  const smallImageUrl = imageUrl?.replace('.webp', '-small.webp');

  // Combine tags with base keywords
  const keywords = [
    'Olafut',
    'fútbol femenil México',
    'blog fútbol femenil',
    ...(post.tags || []),
    ...(post.category ? [post.category] : []),
  ];

  return {
    ...BASE_METADATA,
    title,
    description: post.summary,
    keywords,
    authors: post.author?.name ? [{ name: post.author.name }] : undefined,
    category: post.category || 'Fútbol Femenil',
    openGraph: {
      ...BASE_METADATA.openGraph,
      title,
      url,
      siteName: 'Olafut',
      images: [
        {
          url: imageUrl || '/assets/hero.webp',
          width: 1200,
          height: 630,
          alt: post.title,
        },
        {
          url: smallImageUrl || '/assets/hero.webp',
          width: 600,
          height: 315,
          alt: post.title,
        },
      ],
      type: 'article',
      description: post.summary,
      publishedTime: post.date,
      authors: post.author?.name ? [post.author.name] : undefined,
      tags: post.tags,
    },
    twitter: {
      ...BASE_METADATA.twitter,
      title,
      description: post.summary,
      images: [
        {
          url: imageUrl || '/assets/hero.webp',
          width: 1200,
          height: 628,
          alt: post.title,
        },
        {
          url: smallImageUrl || '/assets/hero.webp',
          width: 600,
          height: 314,
          alt: post.title,
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}
