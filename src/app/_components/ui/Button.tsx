import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const Button: FC<BaseProps> = ({ children, className, style }) => {
  return (
    <button
      className={twMerge(
        'my-14 px-4 py-3 bg-lime-300 hover:bg-lime-400 text-background rounded-xl text-md font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full font-alt flex items-center gap-2 justify-center max-w-sm cursor-pointer',
        className,
      )}
      style={style}
      type="button"
    >
      {children}
    </button>
  );
};
