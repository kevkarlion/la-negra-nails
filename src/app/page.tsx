import { Hero } from '@/components/home/Hero'
import { Cursos } from '@/components/home/Cursos'
import { Servicios } from '@/components/home/Servicios'
import { ButtonLink } from '@/components/shared/Buttons';
import { Creaciones } from '@/components/home/Creaciones'

import { Banner } from '@/components/shared/Banner'
import { SobreMi } from '@/components/home/SobreMi'


export default function Home() {
  return (
    <div className='w-full'>
        <Hero />
        <Cursos title='Cursos Profesionales' subtitle='Descubre nuestras modalidades de cursos de uñas, diseñado para adaptarse a tu estilo de vida. ¡Lleva tu pasión al siguente nivel!' header='Modalidades'>
          <div className='flex flex-col'>
            <ButtonLink text='Presencial' href='/cursos/presencial'textColor='text-black' borderColor='border-[#ff5ba4]'border='border'/>
            <ButtonLink text='Online' href='/cursos/online' textColor='text-black '  borderColor='border-[#ff5ba4]' border='border'/>
            <ButtonLink text='Mirá nuestas clases' href='/cursos/clases'textColor='text-black' bgColor='bg-[#ff5ba4]'/>
          </div>
        </Cursos>
        <Servicios title='Nuestros Servicios' subtitle='Descubre nuestro servicio de uñas diseñados para realzar tu estilo, combinando arte y cuidado profesional para que luzcas manos impecables en cada ocasión'/>
        <Creaciones />
        <Banner logoSrc='/logos/logo-dorado-white-nvo.png' />
        <SobreMi />
    </div>
  );
}
