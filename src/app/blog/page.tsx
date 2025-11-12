import { getPostsFromCache } from '@/lib/notion';
import {
  BlogHeader,
  HeroPost,
  MoreStories,
  PostContainer,
} from './_components';

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
