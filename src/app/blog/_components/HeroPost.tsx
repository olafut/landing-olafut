'use client';

import Link from 'next/link';
import type { FC } from 'react';
import { Paragraph, Title } from '@/app/_components/ui';
import { useTranslate } from '@/app/hooks/useTranslate';
import type { Post } from '@/interfaces/post';
import { getReadingTime } from '@/utils';
import { Avatar } from './Avatar';
import { CoverImage } from './CoverImage';
import { DateFormatter } from './DateFormatter';

interface HeroPostProps {
  post: Post;
}

export const HeroPost: FC<HeroPostProps> = ({ post }) => {
  const { title, date, summary, author, slug, coverImage, content, category } =
    post;
  const { t } = useTranslate('Blog');

  const readingTime = getReadingTime(content);

  return (
    <section className="mb-16 md:mb-20">
      <div className="lg:grid lg:grid-cols-5 lg:gap-12">
        <div className="mb-6 lg:col-span-2">
          <CoverImage
            title={title}
            slug={slug}
            src={coverImage || ''}
            priority
          />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-3">
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
          <Title level="h2" className="leading-tight">
            <Link
              href={`/blog/${slug}`}
              className="hover:text-primary-500 transition-colors duration-300"
            >
              {title}
            </Link>
          </Title>

          {/* Date */}
          <div className="text-muted-foreground dark:text-foreground/80 flex items-center justify-between">
            <DateFormatter dateString={date} />
            <Avatar
              name={author?.name}
              avatar={author?.avatar}
              variant="compact"
              className="hidden lg:flex"
            />
          </div>

          {/* Summary */}
          <Paragraph className="text-muted-foreground dark:text-foreground/80 leading-relaxed">
            {summary}
          </Paragraph>

          {/* Author */}
          <Avatar
            name={author?.name}
            avatar={author?.avatar}
            variant="compact"
            className="lg:hidden"
          />

          {/* CTA */}
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-2 text-primary-500 font-semibold hover:gap-3 transition-all group"
          >
            {t('readArticle')}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
