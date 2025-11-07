import Link from 'next/link';
import type { FC } from 'react';
import type { BaseProps } from '@/interfaces/base';
import { Button } from './ui';

export const CallToActionButton: FC<BaseProps> = ({
  children,
  className,
  style,
}) => {
  return (
    <Button className={className} style={style}>
      <Link
        href="https://chat.whatsapp.com/FuurwY2lP1jHETF5xchlmI"
        target="_blank"
        rel="noopener noreferrer"
        className="w-full flex items-center justify-center gap-2"
      >
        {children}
      </Link>
    </Button>
  );
};
