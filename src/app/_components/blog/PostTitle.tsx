import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const PostTitle: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <h1
      className={twMerge(
        'text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left',
        className,
      )}
      style={style}
    >
      {children}
    </h1>
  );
};
