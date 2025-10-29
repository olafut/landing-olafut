import Link from 'next/link';
import type { FC, PropsWithChildren } from 'react';

interface NavLinkProps extends PropsWithChildren {
  href: string;
}

export const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <li className="relative w-fit h-full px-4 flex items-center justify-center before:content-[''] before:absolute before:left-1/2 before:bottom-0 before:w-0 before:h-0.5 before:bg-current before:transition-all before:duration-300 hover:before:w-full hover:before:left-0 text-sm lg:text-lg">
      <Link
        href={href}
        className="h-full w-full flex items-center justify-center"
      >
        {children}
      </Link>
    </li>
  );
};
