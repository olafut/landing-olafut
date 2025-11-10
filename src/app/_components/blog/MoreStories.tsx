'use client';

import type { FC } from 'react';
import { useTranslate } from '@/app/hooks/useTranslate';
import type { Post } from '@/interfaces/post';
import { Title } from '../ui';
import { PostPreview } from './PostPreview';

type MoreStoriesProps = {
  posts: Post[];
};

export const MoreStories: FC<MoreStoriesProps> = ({ posts }) => {
  const { t } = useTranslate('Blog');

  return (
    <section className="mb-20">
      <Title level="h2" className="mb-12">
        {t('moreStories')}
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {posts.map((post) => (
          <PostPreview key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
};
