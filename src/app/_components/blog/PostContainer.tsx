import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

export const PostContainer: FC<BaseProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <div className={twMerge('container mx-auto px-6', className)} style={style}>
      {children}
    </div>
  );
};
