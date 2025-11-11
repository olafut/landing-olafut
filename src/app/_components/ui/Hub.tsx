import type { FC } from 'react';
import type { BaseProps } from '@/interfaces/base';

export const Hub: FC<BaseProps> = ({ children }) => {
  return (
    <span className="relative inline-block px-3 py-1 mx-1">
      <span className="absolute inset-0 bg-primary-50 dark:bg-primary-900 border-2 border-primary-500 dark:border-primary-700 rounded-lg"></span>
      <span className="relative font-bold text-primary-500 dark:text-primary-100">
        {children}
      </span>
    </span>
  );
};
