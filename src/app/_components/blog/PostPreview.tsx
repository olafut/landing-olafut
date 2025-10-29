import Link from 'next/link';
import type { FC } from 'react';
import type { Author } from '@/interfaces/author';
import { DateFormatter } from '../DateFormatter';
import { Title } from '../ui';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';

type PostPreviewProps = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export const PostPreview: FC<PostPreviewProps> = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <Title level="h4" className="mb-4">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </Title>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};
