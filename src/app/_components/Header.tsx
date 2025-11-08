'use client';

import { AnimatePresence, motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { type FC, useEffect, useRef, useState } from 'react';
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
            <Link
              href="/"
              onClick={handleCloseMenu}
              className="flex h-10 items-center justify-center m-auto"
            >
              <h1
                className="font-bold text-left flex items-center h-full w-full overflow-hidden"
                title="Olafut"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isScrolled ? (
                    <motion.div
                      key="collapsed"
                      className="relative h-full aspect-square"
                      initial={{
                        left: -72,
                        opacity: 0.5,
                        clipPath: 'inset(0 0 0 70%)',
                      }}
                      animate={{
                        left: 0,
                        opacity: 1,
                        clipPath: 'inset(0 0 0 0%)',
                      }}
                      exit={{
                        left: -72,
                        opacity: 0.5,
                        clipPath: 'inset(0 0 0 70%)',
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Image
                        src="/assets/olafut_square.svg"
                        alt="Olafut"
                        width={72}
                        height={72}
                        priority
                        loading="eager"
                        decoding="sync"
                      />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="expanded"
                      className="relative"
                      initial={{
                        opacity: 0.5,
                        left: -280,
                        clipPath: 'inset(0 0 0 70%)',
                      }}
                      animate={{
                        opacity: 1,
                        left: 0,
                        clipPath: 'inset(0 0 0 0%)',
                      }}
                      exit={{
                        opacity: 0.5,
                        left: -280,
                        clipPath: 'inset(0 0 0 70%)',
                      }}
                      transition={{
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                    >
                      <Image
                        src="/assets/olafut.svg"
                        alt="Olafut Logo"
                        width={280}
                        height={72}
                        priority
                        loading="eager"
                        decoding="sync"
                        className="border"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </h1>
            </Link>

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

      <div ref={ref} className="w-full" />
    </>
  );
};
