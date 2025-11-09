'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaMapLocation,
  FaXTwitter,
} from 'react-icons/fa6';

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

export const Footer = () => {
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
    <footer className="relative bg-foreground text-background mt-16 overflow-hidden rounded-t-5xl font-sans">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-1 space-y-6"
          >
            <button
              onClick={handleGoHome}
              aria-label="Ir a la página principal de Olafut"
              type="button"
              className="inline-block cursor-pointer"
            >
              <Image
                src="/assets/olafut_white.svg"
                alt="OlaFut - Primer club femenil independiente de México"
                width={160}
                height={53}
                className="transition-opacity hover:opacity-80"
              />
            </button>

            <p className="text-sm text-background/80 leading-relaxed max-w-sm">
              OLAFUT es el HUB del futbol femenil: el corazón que une gradas,
              canchas, micrófonos y mentes creativas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">Síguenos</h3>
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
                    className="group w-11 h-11 rounded-lg bg-background/10 flex items-center justify-center text-background/70 hover:bg-background/20 transition-all duration-300 border border-background/10 hover:border-primary-500/50"
                  >
                    <Icon
                      className={`text-lg transition-colors ${social.hoverColor}`}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-3 lg:col-span-1"
          >
            <h3 className="text-lg font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:olafut10@gmail.com"
                  className="text-sm text-background/70 hover:text-primary-400 transition-colors flex items-start gap-3 group w-fit"
                >
                  <FaEnvelope
                    className="text-primary-500 mt-0.5 shrink-0 group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  />
                  <span>olafut10@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="text-sm text-background/70 flex items-start gap-3 w-fit">
                  <FaMapLocation
                    className="text-primary-500 mt-0.5 shrink-0"
                    aria-hidden="true"
                  />
                  <span>Ciudad de México, México</span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="h-px bg-background/10 my-8" />

        <div className="flex items-center justify-center gap-4">
          <p className="text-background/60 text-xs">
            © {new Date().getFullYear()} OlaFut. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
