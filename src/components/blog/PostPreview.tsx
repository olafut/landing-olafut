'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Paragraph, Title } from '@/components/ui';
import { useTranslate } from '@/hooks';
import type { Post } from '@/interfaces/post';
import { getReadingTime } from '@/utils';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';

type PostPreviewProps = {
  post: Post;
};

export const PostPreview: FC<PostPreviewProps> = ({ post }) => {
  const { title, date, summary, author, slug, coverImage, content, category } =
    post;
  const { t } = useTranslate('Blog');

  const readingTime = getReadingTime(content);

  return (
    <article className="flex flex-col h-full group">
      {/* Image */}
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage || ''} />
      </div>

      {/* Content */}
      <div className="flex flex-col grow gap-4">
        {/* Metadata */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground dark:text-foreground/80">
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
        <Title level="h3" className="leading-tight">
          <Link
            href={`/blog/${slug}`}
            className="group-hover:text-primary-500 transition-colors duration-300"
          >
            {title}
          </Link>
        </Title>

        {/* Date */}
        <div className="text-sm text-muted-foreground dark:text-foreground/80">
          <DateFormatter dateString={date} />
        </div>

        {/* Summary */}
        <Paragraph className="text-muted-foreground dark:text-foreground/80 leading-relaxed line-clamp-3">
          {summary}
        </Paragraph>

        {/* Footer - Push to bottom */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <Avatar
            name={author?.name}
            avatar={author?.avatar}
            variant="compact"
          />

          {/* CTA - Hidden on mobile, visible on hover in desktop */}
          <Link
            href={`/blog/${slug}`}
            className="text-primary-500 font-semibold text-sm inline-flex items-center gap-1"
            aria-label={`Leer ${title}`}
          >
            Leer
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};
