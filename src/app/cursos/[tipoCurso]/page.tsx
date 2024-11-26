'use client';

import { useParams } from "next/navigation";
import CursoPresencial from "@/pages/CursoPresencial/CursoPresencial";
import CursoOnline from "@/pages/CursoOnline/CursoOnline";
import MiraNuestrasClases from "@/pages/CursoClases/CursoClases";

const Page = () => {
  const params = useParams();

  // Convertir params.tipoCurso en string si es un array, o manejar undefined
  const tipoCurso = Array.isArray(params?.tipoCurso)
    ? params.tipoCurso[0] // Tomar el primer elemento si es un array
    : params?.tipoCurso; // Si no, usarlo directamente como string

  // Mapeo de los valores del parámetro a componentes
  const pages: Record<string, JSX.Element> = {
    presencial: <CursoPresencial />,
    online: <CursoOnline />,
    clases: <MiraNuestrasClases />,
  };

  // Si no se encuentra el parámetro, renderiza un mensaje de error
  const ComponentToRender = tipoCurso && pages[tipoCurso]
    ? pages[tipoCurso]
    : (
      <div>
        <h1>Componente no encontrado</h1>
        <p>Por favor, verifica la URL.</p>
      </div>
    );

  return <>{ComponentToRender}</>;
};

export default Page;
