import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';
import { Paragraph, Title } from './ui';

interface ProductCardProps extends BaseProps {
  title: string;
  description: string;
  image?: ImageProps;
}

export const ProductCard: FC<ProductCardProps> = ({
  title,
  description,
  className,
  style,
  image: imgProps = undefined,
}) => {
  return (
    <article
      className={twMerge(
        'bg-neutral-300/50 min-h-72 backdrop-blur-2xl p-10 rounded-3xl shadow-sm flex flex-col gap-10 justify-between',
        className,
      )}
      style={style}
    >
      <section className="flex flex-col gap-4">
        <Title level="h4" className="text-3xl lg:text-4xl font-black">
          {title}
        </Title>
        <Paragraph>{description}</Paragraph>
      </section>

      {!!imgProps?.src && !!imgProps.alt && (
        <div className="relative w-96 h-auto max-w-full mx-auto rounded-2xl aspect-square hover:transform-cpu hover:scale-[1.02] transition-transform duration-300">
          <Image
            className="absolute rounded-2xl object-cover"
            fill
            {...imgProps}
          />
        </div>
      )}
    </article>
  );
};
