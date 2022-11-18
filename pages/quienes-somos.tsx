import RootLayout from 'layouts/root'
import { aboutSeoMetas } from 'lib/seo-metas'
import Us from 'components/us'
import Diplomat from 'components/home/diplomat'
import Formation from 'components/home/formation'
import Contact from 'components/contact'

export default function IndexPage() {
  return (
    <RootLayout customMeta={{ ...aboutSeoMetas }}>
      <main role='main' className='w-full h-full'>
        <section className='py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full text-center mb-20'>
              <h1 className='text-u-blue-500 text-4xl font-medium mb-2'>
                Bienvenidos a Unidad de Adicciones
              </h1>
              <h3 className='text-slate-500'>
                “Conocimiento e investigación al servicio del tratamiento en
                Adicciones”
              </h3>
            </div>

            <Us />
          </div>
        </section>

        <section className='py-24 bg-zinc-100'>
          <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-2'>
              Quiénes Somos
            </h2>
            <p className='mb-8'>
              Grupo de profesionales de la Facultad de Ciencias Médicas de la
              Universidad de Santiago dedicados a la Investigación y Docencia en
              Abuso de Alcohol y Drogas.
            </p>

            <h2 className='text-u-blue-500 text-3xl font-medium mb-2'>
              Nuestra Misión
            </h2>
            <p className='mb-8'>
              Generar conocimientos y desarrollar un Modelo de Psicoterapia que
              permita abordar el trabajo con pacientes que presentan Trastorno
              por abuso de Alcohol y Drogas.
            </p>

            <h2 className='text-u-blue-500 text-3xl font-medium mb-2'>
              Nuestros Valores
            </h2>
            <p className='mb-8'>
              Somos académicos de trayectoria, con amplia experiencia en
              investigación, publicaciones de libros y trabajos científicos con
              más de 25 años de dedicación a la docencia investigación y
              tratamiento. Universidad de Santiago de Chile
            </p>
          </div>
        </section>

        <Diplomat />
        <Formation />
        <Contact form='Quiénes Somos' />
      </main>
    </RootLayout>
  )
}
