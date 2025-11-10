import { getPostsFromCache } from '@/lib/notion';
import { BlogHeader } from '../_components/blog/BlogHeader';
import { HeroPost } from '../_components/blog/HeroPost';
import { MoreStories } from '../_components/blog/MoreStories';
import { PostContainer } from '../_components/blog/PostContainer';

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
