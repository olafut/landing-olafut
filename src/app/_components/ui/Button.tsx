import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Button: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <button
      className={twMerge(
        ' bg-primary-500 hover:bg-primary-400 text-background rounded-xl text-sm md:text-md font-semibold transition-all duration-300 ',
        className,
      )}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};
