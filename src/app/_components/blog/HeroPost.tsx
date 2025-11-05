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
  const { title, date, summary, author, slug, coverImage } = post;

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} slug={slug} src={coverImage || ''} />
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
          <Paragraph className="mb-6">{summary}</Paragraph>
          <Avatar name={author?.name} avatar={author?.avatar} />
        </div>
      </div>
    </section>
  );
};
