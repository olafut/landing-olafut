import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Button: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <button
      className={twMerge(
        'px-4 py-3 bg-primary-400 hover:bg-primary-500 text-background rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 w-full font-alt flex items-center gap-2 justify-center cursor-pointer uppercase tracking-wider',
        className,
      )}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};
