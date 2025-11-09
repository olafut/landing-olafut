'use client';

import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';
import { useTranslate } from '../hooks';
import { Paragraph, Title } from './ui';

interface InitiativeCardProps extends BaseProps {
  title: ReactNode;
  description: ReactNode[];
  image?: ImageProps;
  comingSoon?: boolean;
  rtl?: boolean;
}

export const InitiativeCard: FC<InitiativeCardProps> = ({
  title,
  description,
  className,
  style,
  image: imgProps,
  comingSoon = false,
  rtl = false,
}) => {
  const { t } = useTranslate('Features');

  return (
    <article
      className={twMerge(
        // Base styles
        'bg-secondary/50 backdrop-blur-sm',
        'h-full',
        'py-10 px-6 md:p-10',
        'rounded-2xl',
        'grid grid-cols-1 md:grid-cols-12 lg:grid-cols-1 gap-8',
        'border border-foreground/10',
        'relative',
        // Hover state
        'transition-all duration-300',
        'hover:shadow-md hover:shadow-primary/10',
        'hover:-translate-y-1',
        'hover:border-primary/30',
        'hover:bg-secondary/70',
        'group/image',

        className,
      )}
      style={style}
    >
      {/* Coming Soon Badge */}
      {comingSoon && (
        <span className="absolute right-0 sm:-right-2 top-4 bg-foreground text-background rounded-tl-lg rounded-bl-lg sm:rounded-t-sm sm:rounded-bl-sm px-3 sm:px-4 py-2 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-lg z-10 before:content-[''] before:absolute before:right-0 before:top-full before:w-0 before:h-0 before:border-t-8 before:border-t-foreground/80 before:border-r-8 before:border-r-transparent before:hidden before:sm:block">
          {t('comingSoon')}
        </span>
      )}

      {/* Content */}
      <div
        className={twMerge(
          'flex flex-col gap-4 col-span-1 md:col-span-5 lg:col-span-1',
          rtl && 'order-first md:order-last lg:order-first',
        )}
      >
        <Title level="h4" className="font-black text-foreground">
          {title}
        </Title>

        {description.map((desc, idx) => (
          <Paragraph
            key={idx.toString()}
            className="text-foreground/80 leading-relaxed"
          >
            {desc}
          </Paragraph>
        ))}
      </div>

      {/* Image con parallax ✨ */}
      {imgProps?.src && imgProps.alt && (
        <div className="relative w-full h-auto mx-auto max-w-full aspect-3/4 md:aspect-5/4 rounded-lg overflow-hidden group/image flex col-span-1 md:col-span-7 lg:col-span-1">
          {/* Overlay en hover */}
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 z-10" />

          <Image
            className="object-cover group-hover/image:scale-110 transition-transform duration-500"
            fill
            {...imgProps}
          />
        </div>
      )}
    </article>
  );
};
