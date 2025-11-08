import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const PostTitle: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <h1
      className={twMerge(
        'text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left',
        className,
      )}
      style={style}
    >
      {children}
    </h1>
  );
};
