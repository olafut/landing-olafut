import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Subtitle: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <h2
      className={twMerge(
        'text-md lg:text-lg leading-relaxed font-alt w-full',
        className,
      )}
      style={style}
    >
      {children}
    </h2>
  );
};
