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
        'bg-foreground/10 min-h-72 backdrop-blur-2xl p-10 rounded-2xl flex flex-col gap-10 justify-between border border-neutral-300',
        className,
      )}
      style={style}
    >
      <section className="flex flex-col gap-4">
        <Title level="h4" className="font-black">
          {title}
        </Title>
        <Paragraph>{description}</Paragraph>
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
