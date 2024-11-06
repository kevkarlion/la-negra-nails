import { Hero } from '@/components/home/Hero'
import { Cursos } from '@/components/home/Cursos'
import { Servicios } from '@/components/home/Servicios'
import { ButtonLink } from '@/components/shared/Buttons';
import { Creaciones } from '@/components/home/Creaciones'
import { ImageCarrusel } from '@/components/home/Creaciones/ImagesCarrusel';
import { Banner } from '@/components/shared/Banner'
import { SobreMi } from '@/components/home/SobreMi'
export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <Cursos title='Cursos Profesionales' subtitle='Descubre nuestras modalidades de cursos de uñas, diseñado para adaptarse a tu estilo de vida. ¡Lleva tu pasión al siguente nivel!' header='Modalidades'>
          <div className='flex flex-col'>
            <ButtonLink text='Presencial' href='#'textColor='text-black' borderColor='border-[#ff5ba4]'border='border'/>
            <ButtonLink text='Online' href='#' textColor='text-black '  borderColor='border-[#ff5ba4]' border='border'/>
            <ButtonLink text='Mirá nuestas clases' href='#'textColor='text-black' bgColor='bg-[#ff5ba4]'/>
          </div>
        </Cursos>
        <Servicios title='Nuestros Servicios' subtitle='Descubre nuestro servicio de uñas diseñados para realzar tu estilo, combinando arte y cuidado profesional para que luzcas manos impecables en cada ocasión'/>
        <Creaciones title='Creaciónes' subtitle='Cada diseño de uñas es una expresión única de estilo y personalidad. Utilizamos técnicas innovadoras y productos de alta calidad para ofrecerte resultados que combinan arte y precisión.' images={
          ImageCarrusel
        }/>
        <Banner logoSrc='/logos/logo-negro.webp' bgColor='bg-[#efb810]'/>
        <SobreMi title='Sobre Mi' subtitle='Soy Maridania Garcia, y mi pasión por el cuidado de las uñas empezó como un hobby, pero pronto se convirtió en mi vocación. A lo largo de los años, me he formado en técnicas avanzadas que me permiten no solo crear diseños únicos y creativos, sino también asegurarme de que las uñas de mis clientas se mantengan saludables y fuertes. Para mí, el cuidado de las uñas va más allá de lo estético; es una combinación de belleza y salud. Estoy en constante aprendizaje para seguir perfeccionando mi trabajo y brindar una experiencia de calidad en cada servicio.' imageUrl='/images/sobre-mi.webp'> 
          <ButtonLink text='Contactanos' href='#'textColor='text-black' bgColor='bg-[#ffc0db]'/>
        </SobreMi>
    </div>
  );
}
