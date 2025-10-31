import Link from 'next/link';
import { FaHouse } from 'react-icons/fa6';
import { Button } from './_components/ui';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-[80dvh] px-10 text-center container mx-auto">
      <p className="uppercase text-xs font-alt">
        404 Error - Página no encontrada
      </p>
      <h2 className="text-5xl font-bold">No podemos encontrar esa página.</h2>
      <p>
        Pero no te preocupes, puedes encontrar muchas otras cosas en nuestra
        página de inicio.
      </p>

      <Link href="/" className="mt-10 w-full">
        <Button className=" w-full mx-auto">
          <FaHouse />
          Volver al inicio
        </Button>
      </Link>
    </div>
  );
}
