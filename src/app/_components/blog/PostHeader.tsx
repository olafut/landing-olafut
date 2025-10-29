import type { FC } from 'react';
import type { Author } from '@/interfaces/author';
import { DateFormatter } from '../DateFormatter';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { PostTitle } from './PostTitle';

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
}

export const PostHeader: FC<PostHeaderProps> = ({
  title,
  coverImage,
  date,
  author,
}) => {
  console.log('PostHeader props:', { title, coverImage, date, author });
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
