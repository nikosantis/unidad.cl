import Image from 'next/image'

import diplomadoImg from 'public/images/diplomado.png'

export default function Diplomat() {
  return (
    <section className='pt-24 pb-8 lg:py-24 bg-[#cdcdcd] relative flex flex-col lg:flex-row'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12 lg:mb-0'>
        <div className='flex flex-col'>
          <div className='w-full lg:w-7/12 text-center lg:text-left'>
            <h5 className='text-zinc-700 font-light uppercase relative text-xl mb-2'>
              Diplomado Clínico Internacional
            </h5>
            <h3 className='uppercase text-u-blue-500 font-semibold relative text-2xl lg:text-3xl xl:text-4xl mb-2'>
              Psicoterapia para el Tratamiento de abuso de alcohol y drogas
            </h3>
            <h4 className='text-zinc-700 font-light uppercase mb-6 text-xl lg:text-3xl'>
              Aproximación Neuroafectiva Constructivista
            </h4>
            <a
              href='https://diplomadopsicoterapia.cl/'
              target='_blank'
              rel='noreferrer'
              className='py-2 px-4 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700'
            >
              Más Información
            </a>
          </div>
        </div>
      </div>

      <div className='relative lg:absolute lg:bottom-0 lg:z-10 lg:right-[5%] flex justify-center'>
        <div className='relative w-[350px] h-[423px] lg:w-[300px] lg:h-[373px]'>
          <Image
            src={diplomadoImg}
            placeholder='blur'
            alt='Diplomado Clínico Internacional'
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            className='object-cover'
          />
        </div>
      </div>
    </section>
  )
}
