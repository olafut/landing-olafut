'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { type FC, useEffect, useRef, useState } from 'react';
import { FaAccusoft } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import { NavLink } from './NavLink';
import { MenuIcon } from './ui/MenuIcon';

export const Header: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { root: null, threshold: 0 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={ref} className="h-5 w-full" />

      <header className="sticky top-5 z-50 h-18 container mx-auto font-alt px-4 md:px-0">
        <div
          className={twMerge(
            'flex flex-col rounded-xl px-4 transition-all duration-300 border border-transparent h-18 gap-4',
            isMenuOpen && 'h-[calc(100dvh-2rem)] md:h-full',
            (isScrolled || isMenuOpen) &&
              'bg-background/90 backdrop-blur-md border-neutral-300',
            'hover:bg-background/90 hover:backdrop-blur-md hover:border-neutral-300',
          )}
        >
          <div className="flex">
            <div className="w-full flex items-center h-18">
              <Link href="/" onClick={handleCloseMenu}>
                <h1 className="font-bold text-center flex items-center">
                  <FaAccusoft className="z-20 mr-4 text-indigo-500 text-3xl" />

                  <AnimatePresence>
                    {!isScrolled && (
                      <motion.span
                        className="relative z-10 overflow-hidden text-xl"
                        initial={{ width: 0, opacity: 0, left: -20 }}
                        animate={{ width: 'auto', opacity: 1, left: 0 }}
                        exit={{ width: 0, opacity: 0, left: -20 }}
                        transition={{ duration: 1, ease: 'backOut' }}
                      >
                        OLAFUT
                      </motion.span>
                    )}
                  </AnimatePresence>
                </h1>
              </Link>
            </div>

            <ul className="flex mx-auto w-full h-18 justify-end">
              <MenuIcon
                isOpen={isMenuOpen}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <NavLink className="hidden md:flex" href="/about">
                Acerca de
              </NavLink>
              <NavLink className="hidden md:flex" href="/blog">
                Blog
              </NavLink>
            </ul>
          </div>

          <ul className="h-full overflow-hidden">
            <NavLink
              className="w-full h-20"
              href="/about"
              onClick={handleCloseMenu}
            >
              Acerca de
            </NavLink>
            <NavLink
              className="w-full h-20"
              href="/blog"
              onClick={handleCloseMenu}
            >
              Blog
            </NavLink>
          </ul>
        </div>
      </header>
    </>
  );
};
