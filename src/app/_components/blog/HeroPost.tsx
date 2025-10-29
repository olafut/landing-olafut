import Link from 'next/link';
import type { FC } from 'react';
import type { Author } from '@/interfaces/author';
import { DateFormatter } from '../DateFormatter';
import { Paragraph, Title } from '../ui';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';

interface HeroPostProps {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
}

export const HeroPost: FC<HeroPostProps> = ({
  author,
  coverImage,
  date,
  excerpt,
  slug,
  title,
}) => {
  return (
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
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
