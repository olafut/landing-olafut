import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Button: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <button
      className={twMerge(
        'px-6 py-4 bg-primary-500 hover:bg-primary-400 text-background rounded-xl text-sm md:text-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full font-alt flex items-center gap-2 justify-center cursor-pointer uppercase tracking-wider',
        className,
      )}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};
