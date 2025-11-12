import {
  BlogHeader,
  HeroPost,
  MoreStories,
  PostContainer,
} from '@/components/blog';
import { getPostsFromCache } from '@/lib/notion';

export default function Blog() {
  const posts = getPostsFromCache();
  const heroPost = posts[0];
  const morePosts = posts.slice(1);

  return (
    <main>
      <PostContainer>
        <BlogHeader postsCount={posts.length} />

        {heroPost && <HeroPost post={heroPost} />}

        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </PostContainer>
    </main>
  );
}
