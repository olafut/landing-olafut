import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Paragraph: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <p
      className={twMerge(
        'font-regular text-md lg:text-lg leading-relaxed',
        className,
      )}
      style={style}
    >
      {children}
    </p>
  );
};
