import { useScroll } from 'lib/contexts/scroll'
import { CgCheckO } from 'react-icons/cg'

import Banner from './banner'
import BannerMobile from './banner-mobile'
import LogoFCM from './logo-fcm'

export default function Intro() {
  const { contactRef } = useScroll()

  const handleScroll = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth'
      })
    }
  }
  return (
    <>
      <BannerMobile />
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <Banner />
        <div className='w-full lg:w-6/12 relative z-50'>
          <div className='w-full hidden lg:flex justify-center relative h-[75px] mb-6'>
            <LogoFCM />
          </div>

          <h1 className='text-center uppercase text-u-blue-500 font-semibold text-4xl mb-2 hidden lg:block'>
            Formación Técnica Nivel Superior en Rehabilitación de Alcohol y
            Drogas
          </h1>

          <hr className='border-0 border-t-u-blue-500 border-t-2 mt-4 mb-4 hidden lg:block' />

          <h2 className='text-center font-medium text-u-orange-primary-500 text-2xl mb-6'>
            <strong>Aprende las competencias necesarias</strong>
            <br />
            para desarrollar tus capacidades y lograr verdaderos cambios.
          </h2>

          <div className='flex flex-col mb-6 items-center'>
            <div className='flex'>
              <div className='flex justify-center items-center mr-2'>
                <CgCheckO className='text-u-orange-primary-500' size='25' />
              </div>
              <div>
                <span className='text-xl'>No se requiere PAES/PDT/PSU</span>
              </div>
            </div>

            <div className='flex'>
              <div className='flex justify-center items-center mr-2'>
                <CgCheckO className='text-u-orange-primary-500' size='25' />
              </div>
              <div>
                <span className='text-xl'>No necesitas estudios previos</span>
              </div>
            </div>

            <div className='flex'>
              <div className='flex justify-center items-center mr-2'>
                <CgCheckO className='text-u-orange-primary-500' size='25' />
              </div>
              <div>
                <span className='text-xl'>Debes tener al menos 21 años</span>
              </div>
            </div>
          </div>

          <div className='flex justify-center'>
            <button
              className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded text-center hover:bg-u-orange-primary-700 uppercase font-semibold'
              onClick={handleScroll}
            >
              Postula Aquí
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
