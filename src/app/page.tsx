import { Hero } from '@/components/home/Hero'
import { Cursos } from '@/components/home/Cursos'
import { Servicios } from '@/components/home/Servicios'
import { ButtonLink } from '@/components/shared/Button';


export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <Cursos title='Cursos Profesionales' subtitle='Descubre nuestras modalidades de cursos de uñas, diseñado para adaptarse a tu estilo de vida. ¡Lleva tu pasión al siguente nivel!' header='Modalidades'>
          <div className='flex flex-col'>
            <ButtonLink text='Presencial' href='#'textColor='text-black' borderColor='border-[#ff5ba4]'/>
            <ButtonLink text='Online' href='#' textColor='text-black '  borderColor='border-[#ff5ba4]' />
            <ButtonLink text='Mirá nuestas clases' href='#'textColor='text-black' bgColor='bg-[#ff5ba4]'/>
          </div>
        </Cursos>
        <Servicios title='Nuestros Servicios' subtitle='Descubre nuestro servicio de uñas diseñados para realzar tu estilo, combinando arte y cuidado profesional para que luzcas manos impecables en cada ocasión'/>
    </div>
  );
}
