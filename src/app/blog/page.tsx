import { getAllPosts } from '@/lib/api';
import { HeroPost } from '../_components/blog/HeroPost';
import { MoreStories } from '../_components/blog/MoreStories';
import { PostContainer } from '../_components/blog/PostContainer';
import { Title } from '../_components/ui';

export default async function Blog() {
  const allPosts = await getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <PostContainer>
        <section className="flex-col md:flex-row flex items-center md:justify-between mt-10 mb-16 md:mb-12">
          <Title
            level="h1"
            className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8"
          >
            Blog
          </Title>
        </section>

        <HeroPost post={heroPost} />

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </PostContainer>
    </main>
  );
}
