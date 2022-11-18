import Image from 'next/image'

import formacionImg from 'public/images/formacion-tecnica.png'

export default function IntroImage() {
  return (
    <Image
      src={formacionImg}
      priority
      placeholder='blur'
      alt='Formación Técnica Nivel Superior en Rehabilitación de Alcohol y Drogas'
      fill
      sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
      className='object-contain'
    />
  )
}
