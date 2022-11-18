import Link from 'next/link'
import Image from 'next/image'

import bannerImg from 'public/images/banner-unidad.png'

export default function Intro() {
  return (
    <section className='py-24 bg-zinc-300 relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='w-full lg:w-6/12 xl:w-6/12'>
          <h5 className='uppercase text-u-blue-500 text-center lg:text-left font-semibold text-2xl lg:text-lg mb-5'>
            Somos Unidad de Adicciones
          </h5>
          <h1 className='uppercase text-center lg:text-left mb-5 font-semibold text-2xl lg:text-xl xl:text-3xl text-u-orange-primary-500'>
            Profesionales en Conocimiento e Investigación al servicio del
            Tratamiento y Adicciones
          </h1>

          <div className='pl-10 mb-6'>
            <ul className='lg:list-disc marker:text-u-orange-primary-500 list-outside text-center lg:text-left'>
              <li className='uppercase font-medium text-u-blue-500'>
                Diplomado en Psicoterapia
              </li>
              <li className='uppercase font-medium text-u-blue-500'>
                Tratamiento para pacientes con Trastorno por Abuso de Alcohol y
                Drogas
              </li>
              <li className='uppercase font-medium text-u-blue-500'>
                Programa Formación Técnica
              </li>
            </ul>
          </div>

          <div className='flex gap-2 justify-center lg:justify-start'>
            <Link
              href='/tratamientos'
              title='Tratamientos'
              className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700 inline-flex items-center'
            >
              Tratamientos
            </Link>
            <a
              href='https://diplomadopsicoterapia.cl/'
              title='Diplomado'
              target={'_blank'}
              rel='noreferrer'
              className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700 inline-flex items-center'
            >
              Diplomado
            </a>
            <Link
              href='/formacion-tecnica'
              title='Formación Técnica'
              className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700 inline-flex items-center'
            >
              Formación Técnica
            </Link>
          </div>
        </div>

        <div className='absolute z-10 top-0 right-0 bottom-0 lg:w-[330px] xl:w-[430px] h-full hidden lg:block'>
          <div className='w-full h-full bg-u-blue-500' />
        </div>

        <div className='absolute z-20 right-[45px] top-0 bottom-0 lg:pt-[130px] lg:pb-[70px] xl:py-[70px] hidden lg:block'>
          <div className='relative h-full lg:w-[450px] xl:w-[600px]'>
            <Image
              src={bannerImg}
              priority
              placeholder='blur'
              alt='Unidad.cl'
              fill
              sizes='(max-width: 1200px) 50vw, 33vw'
              className='object-contain'
            />
          </div>
        </div>

        <div className='absolute z-30 h-[90px] bottom-0 lg:right-24 xl:right-40 hidden lg:flex'>
          <div className='w-[90px] h-[90px] bg-u-orange-primary-500 flex items-center justify-center'>
            <span className='font-black text-5xl text-u-blue-500'>25</span>
          </div>

          <div className='flex items-end justify-center'>
            <div className='flex flex-col uppercase text-white px-[10px] text-2xl font-bold'>
              <span>años de</span>
              <span>trayectoria</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
