import Link from 'next/link';
import type { FC } from 'react';
import type { Post } from '@/interfaces/post';
import { DateFormatter } from '../DateFormatter';
import { Paragraph, Title } from '../ui';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';

interface HeroPostProps {
  post: Post;
}

export const HeroPost: FC<HeroPostProps> = ({ post }) => {
  console.log('HeroPost props:', { post });
  const {
    title,
    date,
    excerpt,
    author,
    slug,
    coverImageMobile,
    coverImageTablet,
    coverImageDesktop,
  } = post;

  console.log('HeroPost 2 props:', { post });

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage
          title={title}
          slug={slug}
          srcMobile={coverImageMobile}
          srcTablet={coverImageTablet}
          srcDesktop={coverImageDesktop}
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <Title level="h3" className="mb-4">
            <Link href={`/blog/${slug}`} className="hover:underline">
              {title}
            </Link>
          </Title>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <Paragraph className="mb-4">{excerpt}</Paragraph>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};
