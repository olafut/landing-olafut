import type { FC } from 'react';
import type { Post } from '@/interfaces/post';
import { DateFormatter } from '../DateFormatter';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { PostTitle } from './PostTitle';

interface PostHeaderProps {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const { title, date, author, coverImage } = post;

  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author?.name} avatar={author?.avatar} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage || ''} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author?.name} avatar={author?.avatar} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};
