'use client';

import type { FC } from 'react';
import { useTranslate } from '@/app/hooks/useTranslate';
import type { Post } from '@/interfaces/post';
import { getReadingTime } from '@/utils';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';
import { PostTitle } from './PostTitle';

interface PostHeaderProps {
  post: Post;
}

export const PostHeader: FC<PostHeaderProps> = ({ post }) => {
  const { title, date, author, coverImage, content, category, tags } = post;
  const { t } = useTranslate('Blog');

  const readingTime = getReadingTime(content);

  return (
    <header className="mb-12">
      {/* Category & Reading Time */}
      <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground dark:text-foreground/80 mb-6">
        {category && (
          <>
            <span className="font-semibold text-primary-500 uppercase tracking-wide">
              {category}
            </span>
            <span>•</span>
          </>
        )}
        <span>{t('readingTime', { minutes: readingTime })}</span>
      </div>

      {/* Title */}
      <PostTitle>{title}</PostTitle>

      {/* Author & Date */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 md:mb-12">
        <Avatar name={author?.name} avatar={author?.avatar} />
        <div className="text-muted-foreground">
          <DateFormatter dateString={date} />
        </div>
      </div>

      {/* Cover Image */}
      <div className="mb-12">
        <CoverImage title={title} src={coverImage || ''} priority />
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-primary-50 text-primary-700 dark:bg-primary-700 dark:text-primary-50 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </header>
  );
};
