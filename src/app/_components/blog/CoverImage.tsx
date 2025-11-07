import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
};

export const CoverImage: FC<CoverImageProps> = ({ title, slug, src }) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={twMerge(
        'shadow-sm w-full',
        slug && 'hover:shadow-lg transition-shadow duration-200',
      )}
      width={400}
      height={267}
      decoding="sync"
      loading="eager"
      priority
    />
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
