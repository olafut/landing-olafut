import { FaArrowRight } from 'react-icons/fa6';
import { useBrands } from '../hooks/useBrands';
import { BrandsCarousel } from './BrandsCarousel';
import { Button, Paragraph, Strong, Title } from './ui';

export const ContentSection = () => {
  const { brands } = useBrands();

  return (
    <section className="rounded-5xl text-background shadow-lg bg-linear-to-b from-white to-primary to-600% z-20 py-10 md:py-20">
      <BrandsCarousel brands={brands} />

      <div className="container px-10 md:px-20 lg:px-48 mx-auto">
        <section className="text-left flex flex-col gap-10">
          <Title level="h2" className="text-center">
            ¿Por qué nace Olafut?
          </Title>
          <div className="flex flex-col gap-6 text-center">
            <Paragraph>
              Esto no solo es un CLUB, es el inicio de una historia que empieza
              desde la afición y no al revés. Queremos un espacio donde las
              mujeres sean las protagonistas:
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
        </section>

        <section className="mt-20 flex justify-center">
          <Button>
            ¡Únete!
            <FaArrowRight />
          </Button>
        </section>
      </div>
    </section>
  );
};
