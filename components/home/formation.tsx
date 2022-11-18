import Link from 'next/link'

export default function Formation() {
  return (
    <section className='py-24 bg-zinc-200 relative'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-center'>
          <div className='w-full lg:w-9/12 text-center'>
            <h5 className='text-zinc-700 font-light uppercase relative text-xl mb-2'>
              Programa de Formación Técnica
            </h5>
            <h3 className='uppercase text-u-blue-500 font-semibold relative text-2xl lg:text-3xl xl:text-4xl mb-8'>
              Técnico en Prevención y Rehabilitación de Personas con Dependencia
              a Drogas
            </h3>

            <Link
              href='/formacion-tecnica'
              title='Formación Técnica'
              className='py-2 px-4 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700'
            >
              Más Información
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
