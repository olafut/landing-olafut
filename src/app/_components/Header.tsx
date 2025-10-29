'use client';

import { AnimatePresence, motion } from 'motion/react';
import Link from 'next/link';
import { type FC, useEffect, useRef, useState } from 'react';
import { FaAccusoft } from 'react-icons/fa6';
import { twMerge } from 'tailwind-merge';
import { NavLink } from './NavLink';

export const Header: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);

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

      <header className="sticky top-5 z-50 h-18 max-w-7xl mx-auto font-alt px-4">
        <div
          className={twMerge(
            'flex flex-row rounded-xl px-4 transition-all duration-300 items-center border border-transparent h-18 gap-4 justify-start',
            isScrolled &&
              'bg-background/90 backdrop-blur-md border-neutral-800',
            'hover:bg-background/90 hover:backdrop-blur-md hover:border-neutral-800',
          )}
        >
          <Link href="/">
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
          <ul className="flex mx-auto items-center w-full h-full justify-end">
            <NavLink href="/about">Acerca de</NavLink>
            <NavLink href="/blog">Blog</NavLink>
          </ul>
        </div>
      </header>
    </>
  );
};
