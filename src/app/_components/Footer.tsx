'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapLocation,
  FaXTwitter,
} from 'react-icons/fa6';
import { useTranslate } from '../hooks';

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/olafut10/',
    icon: FaInstagram,
    hoverColor: 'group-hover:text-[#E4405F]',
  },
  {
    name: 'X',
    href: 'https://x.com/olafut10',
    icon: FaXTwitter,
    hoverColor: 'group-hover:text-foreground',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/olafut',
    icon: FaLinkedin,
    hoverColor: 'group-hover:text-[#0A66C2]',
  },
] as const;

const NAVIGATION_LINKS = [
  { key: 'home', href: '/' },
  { key: 'about', href: '/about' },
  { key: 'blog', href: '/blog' },
] as const;

export const Footer = () => {
  const { t: tNav } = useTranslate('Common.Navigation');
  const { t: tFooter } = useTranslate('Footer');
  const path = usePathname();
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoHome = () => {
    if (path === '/') return scrollToTop();
    router.push('/');
  };

  return (
    <footer className="relative bg-foreground dark:bg-neutral-800 text-background dark:text-foreground mt-16 overflow-hidden rounded-t-5xl font-sans">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <button
              onClick={handleGoHome}
              aria-label={tFooter('logoAriaLabel')}
              type="button"
              className="inline-block cursor-pointer"
            >
              <Image
                src="/assets/olafut_white.svg"
                alt={tFooter('logoAlt')}
                width={160}
                height={53}
                className="transition-opacity hover:opacity-80"
              />
            </button>

            <p className="text-sm text-secondary font-alt leading-relaxed max-w-sm">
              {tFooter('description')}
            </p>
          </motion.div>

          {/* Navigation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">
              {tFooter('navigation.title')}
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary hover:text-primary-400 transition-colors font-alt inline-block"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">
              {tFooter('social.title')}
            </h3>
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Seguir a Olafut en ${social.name} (abre en nueva ventana)`}
                    whileTap={{ scale: 0.95 }}
                    className="group w-11 h-11 rounded-lg bg-background/10 dark:bg-neutral-900 flex items-center justify-center text-background/70 hover:bg-background/20 transition-all duration-300 border border-background/10 hover:border-primary-600"
                  >
                    <Icon
                      className={`text-lg transition-colors dark:text-foreground ${social.hoverColor}`}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">
              {tFooter('contact.title')}
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href={`mailto:${tFooter('contact.email')}`}
                  className="text-sm text-background/70 hover:text-primary-400 transition-colors flex items-start gap-3 group w-fit"
                >
                  <FaEnvelope
                    className="text-primary-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <span className="text-secondary font-alt">
                    {tFooter('contact.email')}
                  </span>
                </Link>
              </li>
              <li>
                <div className="text-sm text-background/70 flex items-start gap-3 w-fit">
                  <FaMapLocation
                    className="text-primary-500 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-secondary font-alt">
                    {tFooter('contact.location')}
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="h-px bg-background/10 dark:bg-foreground/10 my-8" />

        <div className="flex items-center justify-center gap-4">
          <p className="text-secondary font-sans text-xs text-center">
            © {new Date().getFullYear()} {tFooter('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};
