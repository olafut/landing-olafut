import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Strong: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <span
      className={twMerge(
        'inline-block font-bold text-primary-500 cursor-default transition-all',
        className,
      )}
      style={style}
    >
      {children}
    </span>
  );
};
