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
      h1: 'text-4xl md:text-5xl lg:text-6xl leading-none font-black w-full',
      h2: 'text-3xl md:text-4xl lg:text-5xl leading-none font-extrabold w-full',
      h3: 'text-xl md:text-3xl lg:text-4xl leading-none font-extrabold w-full',
      h4: 'text-lg md:text-2xl lg:text-3xl leading-none font-bold w-full',
      h5: 'text-md md:text-xl lg:text-2xl leading-none font-bold w-full',
      h6: 'text-sm md:text-lg lg:text-xl leading-none font-semibold w-full',
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
