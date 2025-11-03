import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PostBody } from '@/app/_components/blog/PostBody';
import { PostContainer } from '@/app/_components/blog/PostContainer';
import { PostHeader } from '@/app/_components/blog/PostHeader';
import { getAllPosts, getPostBySlug } from '@/lib/api';
import markdownToHtml from '@/lib/markdownToHtml';

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

  const post = getPostBySlug(slug);

  if (!post) return notFound();

  const content = await markdownToHtml(post.content || '');

  return (
    <main>
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
  const posts = await getAllPosts();

  return posts.map((post) => ({
    slug: String(post.slug),
  }));
}

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) return notFound();

  const title = `${post.title} | Blog`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title,
      images: [post.ogImage.url],
      type: 'article',
      description: post.excerpt,
      locale: 'es_MX',
    },
    twitter: {
      title,
      description: post.excerpt,
      images: [post.ogImage.url],
      card: 'summary_large_image',
    },
  };
}
