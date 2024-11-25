'use client';

import { useParams } from "next/navigation";
import {CursoPresencial} from "@/pages/CursoPresencial"; // Componente para cursos presenciales
import { CursoOnline } from '@/pages/CursoOnline'
import { MiraNuestrasClases } from '@/pages/CursoClases'
// import NotFoundPage from "@/components/NotFoundPage"; // Opcional

const Page = () => {
  const params = useParams();

  // Asegúrate de que params sea definido antes de acceder a sus propiedades
  const tipoCurso = params?.TipoCurso as string;

  // Mapeo de los valores del parámetro a componentes
  const pages: Record<string, JSX.Element> = {
    presencial: <CursoPresencial />,
    online: <CursoOnline />,
    clases: <MiraNuestrasClases />
    // online: <OnlineCoursePage />,
  };

  // Si no se encuentra el parámetro, renderiza un mensaje de error
  const ComponentToRender = pages[params.tipoCurso] || (
    <div>
      <h1>Componente no encontrado</h1>
      <p>Por favor, verifica la URL.</p>
    </div>
  );

  return <>{ComponentToRender}</>;
};

export default Page;
