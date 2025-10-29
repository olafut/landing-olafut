import { FaArrowRight } from 'react-icons/fa6';
import { useBrands } from '../hooks/useBrands';
import { BrandsCarousel } from './BrandsCarousel';
import { Button, Paragraph, Strong, Title } from './ui';

export const ContentSection = () => {
  const { brands } = useBrands();

  return (
    <section className="rounded-5xl text-background shadow-lg bg-linear-to-b from-white to-purple-100 z-20 py-10 md:py-20">
      <BrandsCarousel brands={brands} />

      <div className="container mx-auto px-10">
        <section className="grid grid-cols-1 lg:grid-cols-6 gap-20">
          <div className="lg:col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Title level="h2">¿Por qué nace</Title>
              <Title level="h2">Olafut?</Title>
            </div>
            <div className="flex flex-col gap-4 font-alt">
              <Paragraph>
                Esto no solo es un CLUB, es el inicio de una historia que
                empieza desde la afición y no al revés. Queremos un espacio
                donde las mujeres sean las protagonistas:
              </Paragraph>

              <Paragraph>
                En la <Strong>CANCHA</Strong>, <Strong>GRADA</Strong>, en los{' '}
                <Strong>MICRÓFONOS</Strong> y en la industria en general.
              </Paragraph>

              <Paragraph>
                ¡Unamos a todas las que viven el fútbol con{' '}
                <Strong>PASIÓN Y PROPÓSITO</Strong>!
              </Paragraph>
            </div>
          </div>

          <div className="grid lg:col-span-2 justify-center w-full gap-8">
            <div className="flex flex-col">
              <h4 className="font-thin text-primary text-5xl">466k+</h4>
              <p className="text-md font-alt">businesses served worldwide</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-thin text-primary text-5xl">9.1m+</h4>
              <p className="text-md font-alt">leads collected per month</p>
            </div>
            <div className="flex flex-col">
              <h4 className="font-thin text-primary text-5xl">5x</h4>
              <p className="text-md font-alt">
                more conversions than the industry average
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 flex justify-center">
          <Button>
            ¡Únete!
            <FaArrowRight />
          </Button>
        </section>
      </div>
    </section>
  );
};
