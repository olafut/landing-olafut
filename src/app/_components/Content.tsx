'use client';

import { BrandsCarousel } from './BrandsCarousel';

export const Content = () => {
  return (
    <section className="rounded-5xl text-background shadow-lg bg-linear-to-b from-white to-purple-100 z-20">
      <BrandsCarousel
        brands={[
          {
            name: 'test 1',
            logoUrl: 'https://static.cdnlogo.com/logos/b/28/bandsports.svg',
          },
          {
            name: 'test 2',
            logoUrl:
              'https://static.cdnlogo.com/logos/t/85/tnt-sports-chile.svg',
          },
          {
            name: 'test 3',
            logoUrl:
              'https://static.cdnlogo.com/logos/f/25/federacion-mexicana-de-futbol.svg',
          },
          {
            name: 'test 4',
            logoUrl: 'https://static.cdnlogo.com/logos/b/28/bandsports.svg',
          },
          {
            name: 'test 5',
            logoUrl:
              'https://static.cdnlogo.com/logos/t/85/tnt-sports-chile.svg',
          },
          {
            name: 'test 6',
            logoUrl:
              'https://static.cdnlogo.com/logos/f/25/federacion-mexicana-de-futbol.svg',
          },
        ]}
      />
      <div className="w-screen max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-20">
        <div className="col-span-3">
          <h2 className="text-5xl font-extrabold">Proof is in the</h2>
          <h2 className="text-5xl font-bold bg-linear-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            performance
          </h2>
          <p className="font-thin text-xl mt-5 leading-8">
            Leadpages empowers you to drive more leads, backed by actionable
            conversion data and proven results. With millions of clicks per day,
            we let our results do the talking.
          </p>
        </div>
        <div className="cols-span-1">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </section>
  );
};
