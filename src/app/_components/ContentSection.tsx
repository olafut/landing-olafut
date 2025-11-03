import { FaArrowRight } from 'react-icons/fa6';
import { Button, Paragraph, Strong, Title } from './ui';

export const ContentSection = () => {
  return (
    <section className="rounded-5xl text-background shadow-lg bg-foreground z-20 p-10 md:py-20 flex flex-col gap-20">
      <div className="container mx-auto flex flex-col gap-10">
        <section className="flex flex-col gap-10">
          <Title
            level="h2"
            className="text-center py-10 text-4xl lg:text-6xl max-w-2xl font-black mx-auto"
          >
            ¿Por qué nace Olafut?
          </Title>
          <div className="flex flex-col gap-4 text-center max-w-2xl mx-auto">
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

        <section className="flex justify-center my-10">
          <Button>
            ¡Únete!
            <FaArrowRight />
          </Button>
        </section>
      </div>
    </section>
  );
};
