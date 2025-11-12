'use client';

import type { FC } from 'react';
import { Paragraph, Title } from '@/app/_components/ui';
import { useTranslate } from '@/app/hooks/useTranslate';

interface BlogHeaderProps {
  postsCount: number;
}

export const BlogHeader: FC<BlogHeaderProps> = ({ postsCount }) => {
  const { t } = useTranslate('Blog');

  return (
    <section className="flex flex-col gap-4 py-16 md:py-20">
      <div className="flex flex-col gap-6">
        <Title level="h1" className="font-black tracking-tight">
          {t('title')}
        </Title>
        <Paragraph className="text-muted-foreground dark:text-foreground/80 max-w-2xl">
          {t('description')}
        </Paragraph>
      </div>

      {postsCount > 0 && (
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-foreground/80">
            <svg
              className="w-5 h-5"
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
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span className="font-medium">
              {t('publishedArticles', { count: postsCount })}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
