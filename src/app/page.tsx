import { Hero } from "@/components/home/Hero";
import { Cursos } from "@/components/home/Cursos";
import { Servicios } from "@/components/home/Servicios";
import { ButtonLink } from "@/components/shared/Buttons";
import { Creaciones } from "@/components/home/Creaciones";

import { Banner } from "@/components/shared/Banner";
import { SobreMi } from "@/components/home/SobreMi";

export default function Home() {
  return (
    <div className="w-full relative z-0">
      <Hero />
      <Cursos
        title="Cursos Profesionales"
        subtitle="Transforma tu pasión en una profesión. Aprende a proteger la
                salud de las uñas mientras dominas técnicas avanzadas y usas
                materiales de alta calidad. Nuestros cursos combinan fundamentos
                sólidos con las últimas tendencias, para que desarrolles
                confianza, creatividad y destaque en el mundo de la manicura
                profesional!"
        header="Modalidades"
      >
        <div className="flex flex-col">
          <ButtonLink
            text="Presencial"
            href="/cursos/presencial"
            textColor="text-black"
          />
          {/* <ButtonLink
            text="Online (Próximamente)"
            href="/cursos/online"
            textColor="text-black "
          /> */}
          
          <ButtonLink
            text="Online (Próximamente)"
            href="/cursos/online"
            textColor="text-black "
          />
          
        </div>
      </Cursos>
      <Servicios
        // title="Nuestros Servicios"
        // subtitle="Descubre nuestro servicio de uñas diseñados para realzar tu estilo, combinando arte y cuidado profesional para que luzcas manos impecables en cada ocasión"
      />
      <Creaciones />
      <Banner logoSrc="/logos/logo-dorado-white-nvo.png" />
      <SobreMi />
    </div>
  );
}
