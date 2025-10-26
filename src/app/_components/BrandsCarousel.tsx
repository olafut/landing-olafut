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
    <div className="w-full inline-flex flex-nowrap overflow-hidden mask-[linear-gradient(to_right,transparent_0,black_128px,black_calc(100%-128px),transparent_100%)] mt-10">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 animate-infinite-scroll">
        {brands.map((brand) => (
          <li
            key={`${brand.name}-spacer`}
            className="relative w-32 h-16 shrink-0"
          >
            <Image
              key={brand.name}
              src={brand.logoUrl}
              alt={brand.name}
              className="object-contain"
              fill
              priority
            />
          </li>
        ))}
      </ul>
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-20 animate-infinite-scroll">
        {brands.map((brand) => (
          <li
            key={`${brand.name}-spacer`}
            className="relative w-32 h-16 shrink-0"
          >
            <Image
              key={brand.name}
              src={brand.logoUrl}
              alt={brand.name}
              className="object-contain"
              fill
              priority
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
