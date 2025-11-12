'use client';

import type { FC } from 'react';
import { FaRegNewspaper } from 'react-icons/fa6';
import { Paragraph, Title } from '@/components/ui';
import { useTranslate } from '@/hooks';

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
            <FaRegNewspaper />
            <span className="font-medium">
              {t('publishedArticles', { count: postsCount })}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};
