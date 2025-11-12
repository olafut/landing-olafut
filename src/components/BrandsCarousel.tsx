import Image from 'next/image';
import type { FC } from 'react';

type Brand = {
  name: string;
  logoUrl: string;
};

interface BrandsCarouselProps {
  brands?: Brand[];
}

export const BrandsCarousel: FC<BrandsCarouselProps> = ({ brands }) => {
  if (!brands || brands.length === 0) return null;

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] pb-10 lg:pb-20">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 lg:[&_li]:mx-8 animate-infinite-scroll">
        {brands.map((brand) => (
          <li
            key={`${brand.name}-spacer`}
            className="relative grid w-20 md:w-32 lg:w-76 h-12"
          >
            <Image
              key={brand.name}
              src={brand.logoUrl}
              alt={brand.name}
              className="object-contain"
              fill
              decoding="async"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-6 lg:[&_li]:mx-8 animate-infinite-scroll">
        {brands.map((brand) => (
          <li
            key={`${brand.name}-spacer`}
            className="relative grid w-20 md:w-32 lg:w-76 h-12"
          >
            <Image
              key={brand.name}
              src={brand.logoUrl}
              alt={brand.name}
              className="object-contain"
              fill
              priority
              decoding="sync"
              loading="eager"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
