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
  const { title, date, summary, author, slug, coverImage } = post;

  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage || ''} />
      </div>
      <Title level="h3" className="mb-4">
        <Link href={`/blog/${slug}`} className="hover:underline">
          {title}
        </Link>
      </Title>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <Paragraph className="mb-6">{summary}</Paragraph>
      <Avatar name={author?.name} avatar={author?.avatar} />
    </div>
  );
};
