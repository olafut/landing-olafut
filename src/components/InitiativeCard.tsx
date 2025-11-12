'use client';

import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import type { Initiative } from '@/interfaces';
import type { BaseProps } from '@/interfaces/base';
import { useTranslate } from '../hooks';
import { Paragraph, Title } from './ui';

type InitiativeCardMetaProps = Pick<Initiative, 'comingSoon' | 'rtl' | 'icon'>;

interface InitiativeCardProps extends BaseProps, InitiativeCardMetaProps {
  title: ReactNode;
  description: ReactNode[];
  image?: ImageProps;
}

export const InitiativeCard: FC<InitiativeCardProps> = ({
  title,
  description,
  className,
  style,
  image: imgProps,
  comingSoon = false,
  rtl = false,
  icon: Icon,
}) => {
  const { t } = useTranslate('Features');

  return (
    <article
      className={twMerge(
        // Base styles
        'bg-secondary/50 backdrop-blur-sm',
        'dark:bg-neutral-800 dark:backdrop-blur-none',
        'h-full',
        'py-10 px-6 md:p-10',
        'rounded-2xl',
        'grid grid-cols-1 md:grid-cols-12 lg:grid-cols-1 gap-8',
        'border border-foreground/10',
        'relative',
        // Hover state
        'transition-all duration-300',
        'lg:hover:shadow-md lg:hover:shadow-primary/10',
        'lg:hover:-translate-y-1',
        'lg:hover:border-primary/30',
        'lg:hover:bg-secondary/70 dark:lg:hover:bg-neutral-800/70',
        'active:scale-95',
        'lg:active:scale-100',
        'group/image',

        className,
      )}
      style={style}
    >
      {comingSoon && (
        <span className="absolute -right-2 top-2 md:top-3 lg:top-4 bg-linear-to-br from-accent-400 via-accent-500 to-accent-600 text-white rounded-l-xl px-3 py-2 font-sans font-bold text-xs md:text-xs tracking-wider uppercase shadow-lg z-30 before:content-[''] before:absolute before:right-0 before:top-full before:w-0 before:h-0 before:border-t-8 before:border-t-accent-800 before:border-r-8 before:border-r-transparent">
          {t('comingSoon')}
        </span>
      )}

      {/* {comingSoon && (
        <div
          className="absolute inset-0 rounded-2xl z-20 flex items-center justify-center border-2 border-accent-500/50"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
            backgroundColor: 'rgba(255,255,255,0.65)',
          }}
        />
      )} */}

      {/* <div className="flex flex-col items-center gap-2 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-xl border border-accent-500/20">
          <span className="flex items-center gap-2 text-accent-600 font-bold text-base uppercase tracking-wider">
            <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            {t('comingSoon')}
          </span>
        </div> */}

      <div
        className={twMerge(
          'flex flex-col gap-4 col-span-1 md:col-span-5 lg:col-span-1',
          rtl && 'order-first md:order-last lg:order-first',
        )}
      >
        <Title level="h4" className="font-black text-foreground">
          {Icon && (
            <Icon className="inline-block mr-3 mb-1 w-8 h-8 text-primary" />
          )}
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

      {imgProps?.src && imgProps.alt && (
        <div className="relative w-full h-auto mx-auto max-w-full aspect-3/4 md:aspect-5/4 rounded-lg overflow-hidden group/image flex col-span-1 md:col-span-7 lg:col-span-1">
          <div className="absolute inset-0 bg-linear-to-t from-foreground/80 dark:from-background/80 via-transparent to-transparent opacity-0 active:group-active/image-opacity-100 lg:group-hover/image:opacity-100 transition-opacity duration-300 z-10" />

          <Image
            className="object-cover active:group-active:image-scale-110 lg:group-hover/image:scale-110 transition-transform duration-500"
            fill
            {...imgProps}
          />
        </div>
      )}
    </article>
  );
};
