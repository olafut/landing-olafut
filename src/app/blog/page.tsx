import { getPostsFromCache } from '@/lib/notion';
import { HeroPost } from '../_components/blog/HeroPost';
import { MoreStories } from '../_components/blog/MoreStories';
import { PostContainer } from '../_components/blog/PostContainer';
import { Title } from '../_components/ui';

export default function Blog() {
  const posts = getPostsFromCache();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <main>
      <PostContainer>
        <section className="flex-col md:flex-row flex items-center md:justify-between py-16">
          <Title
            level="h1"
            className="font-bold tracking-tighter leading-tight"
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
