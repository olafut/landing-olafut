import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Subtitle: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <h2
      className={twMerge(
        'text-md md:text-lg lg:text-xl text-center font-alt font-normal',
        className,
      )}
      style={style}
    >
      {children}
    </h2>
  );
};
