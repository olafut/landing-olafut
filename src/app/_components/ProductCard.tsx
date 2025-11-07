import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';
import { useTranslate } from '../hooks';
import { Paragraph, Title } from './ui';

interface ProductCardProps extends BaseProps {
  title: ReactNode;
  description: ReactNode[];
  image?: ImageProps;
  comingSoon?: boolean;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  className,
  style,
  image: imgProps = undefined,
  comingSoon = false,
}) => {
  const { t } = useTranslate('Features');

  return (
    <article
      className={twMerge(
        'bg-foreground/10 min-h-72 backdrop-blur-2xl p-10 rounded-2xl flex flex-col gap-10 justify-between border border-neutral-300 relative',
        className,
      )}
      style={style}
    >
      {comingSoon && (
        <span className="absolute -right-2 top-4 bg-primary-400 text-background rounded-t-sm rounded-bl-sm px-4 py-2 font-sans font-semibold text-sm before:content-[''] before:absolute before:right-0 before:top-full before:w-0 before:h-0 before:border-t-8 before:border-t-primary-700 before:border-r-8 before:border-r-transparent tracking-widest">
          {t('comingSoon')}
        </span>
      )}
      <section className="flex flex-col gap-4">
        <Title level="h4" className="font-black">
          {title}
        </Title>
        {description.filter(Boolean).map((desc, idx) => (
          <Paragraph key={String(idx)}>{desc}</Paragraph>
        ))}
      </section>

      {!!imgProps?.src && !!imgProps.alt && (
        <div className="relative w-96 h-auto max-w-full mx-auto aspect-3/4 lg:aspect-4/3 hover:transform-cpu hover:scale-[1.02] transition-transform duration-300">
          <Image
            className="absolute object-cover rounded-lg"
            fill
            {...imgProps}
          />
        </div>
      )}
    </article>
  );
};
