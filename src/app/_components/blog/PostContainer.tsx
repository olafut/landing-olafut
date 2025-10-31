import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const PostContainer: FC<BaseProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div
      className={twMerge('container mx-auto px-4 md:px-10 xl:px-40', className)}
      style={style}
    >
      {children}
    </div>
  );
};
