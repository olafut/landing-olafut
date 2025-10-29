import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CoverImageProps = {
  title: string;
  srcMobile: string;
  srcTablet: string;
  srcDesktop: string;
  slug?: string;
};

export const CoverImage: FC<CoverImageProps> = ({
  title,
  slug,
  srcDesktop,
  srcMobile,
  srcTablet,
}) => {
  const image = (
    <>
      <Image
        src={srcMobile}
        alt={`Cover Image for ${title}`}
        className={twMerge(
          'block sm:hidden shadow-sm w-full',
          slug && 'hover:shadow-lg transition-shadow duration-200',
        )}
        width={400}
        height={267}
        decoding="async"
        loading="lazy"
      />

      <Image
        src={srcTablet}
        alt={`Cover Image for ${title}`}
        className={twMerge(
          'hidden sm:block lg:hidden md:block shadow-sm w-full',
          slug && 'hover:shadow-lg transition-shadow duration-200',
        )}
        width={400}
        height={267}
        decoding="async"
        loading="lazy"
      />

      <Image
        src={srcDesktop}
        alt={`Cover Image for ${title}`}
        className={twMerge(
          'hidden lg:block shadow-sm w-full',
          slug && 'hover:shadow-lg transition-shadow duration-200',
        )}
        width={400}
        height={267}
        decoding="async"
        loading="lazy"
      />
    </>
  );

  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link href={`/blog/${slug}`} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
