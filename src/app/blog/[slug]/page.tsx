import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostBody } from '@/app/_components/blog/PostBody';
import { PostContainer } from '@/app/_components/blog/PostContainer';
import { PostHeader } from '@/app/_components/blog/PostHeader';
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
        <article className="mb-32">
          <PostBody content={content} />
        </article>
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

  const title = `${post.title} | Blog`;

  return {
    title,
    description: post.summary,
    metadataBase: new URL('https://olafut.com'),
    openGraph: {
      title,
      url: `https://olafut.com/blog/${post.slug}`,
      images: [post.coverImage || ''],
      type: 'article',
      description: post.summary,
      locale: 'es_MX',
    },
    twitter: {
      title,
      description: post.summary,
      images: [post.coverImage || ''],
      card: 'summary_large_image',
    },
  };
}
