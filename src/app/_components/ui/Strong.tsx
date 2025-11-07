import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Strong: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <span
      className={twMerge('font-semibold text-primary-500', className)}
      style={style}
    >
      {children}
    </span>
  );
};
