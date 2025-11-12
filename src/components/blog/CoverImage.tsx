import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

type CoverImageProps = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
};

export const CoverImage: FC<CoverImageProps> = ({
  title,
  slug,
  src,
  priority = false,
}) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={twMerge(
        'shadow-sm w-full h-auto object-cover aspect-3/2 rounded-lg',
        slug &&
          'hover:shadow-lg hover:scale-[1.02] transition-all duration-300 ease-in-out',
      )}
      width={1200}
      height={800}
      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
      decoding="sync"
      loading={priority ? 'eager' : 'lazy'}
      priority={priority}
    />
  );

  return (
    <div className="overflow-hidden rounded-lg">
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
