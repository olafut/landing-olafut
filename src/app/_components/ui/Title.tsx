import { cva } from 'class-variance-authority';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

interface TitleProps extends BaseProps {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const variants = cva('', {
  variants: {
    headingLevel: {
      h1: 'text-4xl md:text-5xl lg:text-7xl leading-tight font-black',
      h2: 'text-3xl md:text-4xl lg:text-6xl leading-tight font-extrabold',
      h3: 'text-xl md:text-3xl lg:text-5xl leading-tight font-extrabold',
      h4: 'text-lg md:text-2xl lg:text-4xl leading-tight font-bold',
      h5: 'text-md md:text-xl lg:text-3xl leading-tight font-bold',
      h6: 'text-sm md:text-lg lg:text-2xl leading-tight font-semibold',
    },
  },
  defaultVariants: {
    headingLevel: 'h2',
  },
});

export const Title: FC<TitleProps> = ({
  children,
  className,
  style,
  level: headingLevel = 'h2',
}) => {
  const Tag = headingLevel;

  return (
    <Tag
      className={twMerge(variants({ headingLevel }), className)}
      style={style}
    >
      {children}
    </Tag>
  );
};
