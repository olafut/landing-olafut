import Link from 'next/link';
import type { FC } from 'react';
import type { Post } from '@/interfaces/post';
import { DateFormatter } from '../DateFormatter';
import { Paragraph, Title } from '../ui';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';

type PostPreviewProps = {
  post: Post;
};

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
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

  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          srcMobile={coverImageMobile}
          srcTablet={coverImageTablet}
          srcDesktop={coverImageDesktop}
        />
      </div>
      <Title level="h3" className="mb-4">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </Title>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <Paragraph className="mb-6">{excerpt}</Paragraph>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};
