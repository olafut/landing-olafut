import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import type { BaseProps } from '@/interfaces/base';

interface NavLinkProps extends BaseProps {
  href: string;
  onClick?: () => void;
}

export const NavLink: FC<NavLinkProps> = ({
  href,
  children,
  className,
  style,
  onClick,
}) => {
  return (
    <li
      className={twMerge(
        "relative w-fit h-full flex px-4 items-center justify-center before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 min-w-42",
        className,
      )}
      style={style}
    >
      <Link
        href={href}
        className="h-full w-full flex items-center justify-center text-md"
        onClick={onClick}
      >
        {children}
      </Link>
    </li>
  );
};
