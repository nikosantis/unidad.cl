import LogoFCM from './logo-fcm'
import IntroImage from './intro-image'

export default function BannerMobile() {
  return (
    <div className='block lg:hidden w-full relative mb-12 bg-white pt-12'>
      <div className='w-full flex justify-center relative h-[75px] mb-2 z-10'>
        <LogoFCM />
      </div>

      <div className='w-full h-[410px] relative z-10'>
        <IntroImage />
      </div>

      <div className='w-full bg-u-orange-primary-500 h-[160px] absolute top-[60%] z-0' />

      <div className='w-full relative bg-u-blue-500 text-center py-5 px-4 -mt-6 z-20'>
        <span className='uppercase text-white text-2xl font-semibold'>
          Formación Técnica Nivel Superior en Rehabilitación de Alcohol y Drogas
        </span>
      </div>

      <div className='w-full bg-u-orange-primary-500 text-center py-5'>
        <span className='uppercase text-4xl font-extrabold text-white'>
          100% online
        </span>
      </div>
    </div>
  )
}
