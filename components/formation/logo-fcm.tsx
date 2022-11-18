import Image from 'next/image'

import logoFcm from 'public/images/fcm-logo.png'

export default function LogoFCM() {
  return (
    <Image
      src={logoFcm}
      priority
      placeholder='blur'
      alt='Facultad de Ciencias Médicas | Universidad de Santiago de Chile'
      fill
      sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
      className='object-contain'
    />
  )
}
