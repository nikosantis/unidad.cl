import Contact from 'components/contact'
import Content from 'components/formation/content'
import Contents from 'components/formation/contents'
import Info from 'components/formation/info'
import Intro from 'components/formation/intro'
import OrientedTo from 'components/formation/oriented-to'
import StudyPlan from 'components/formation/study-plan'
import Teachers from 'components/formation/teachers'
import RootLayout from 'layouts/root'
import { formacionTecnicaSeoMetas } from 'lib/seo-metas'

export default function IndexPage() {
  return (
    <RootLayout customMeta={{ ...formacionTecnicaSeoMetas }}>
      <main role='main' className='w-full h-full'>
        <section className='pb-10 lg:py-24 bg-zinc-200 relative'>
          <Intro />
        </section>

        <section className='py-24'>
          <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-4 text-center'>
              Postula al Programa de Formación Técnica en Nivel Superior
            </h2>
            <h3 className='text-xl font-medium mb-12 text-center'>
              Bienvenidos al programa {'"'}Técnico en prevención y
              rehabilitación de personas con dependencia a drogas{'"'}
            </h3>
            <p className='mb-4 text-center'>
              El programa tiene como objetivo formar personal especializado, con
              alto grado de preparación para realizar las actividades propias
              del Decreto N°04 de 2010 del Ministerio de Salud.
            </p>
            <p className='mb-4 text-center'>
              Los técnicos serán capacitados para desempeñarse en instituciones
              públicas y privadas en actividades de prevención y rehabilitación
              del consumo de sustancias adictivas.
            </p>
            <p className='mb-12 text-center'>
              Serán capacitados para trabajar en programas de prevención en:
            </p>

            <div className='w-full flex flex-col lg:flex-row gap-x-6 gap-y-10 lg:gap-y-0'>
              <div className='w-full lg:w-1/3'>
                <p className='mb-4 text-center'>
                  <strong>
                    Desde esta perspectiva ofrece intervenciones en:
                  </strong>
                </p>
                <p className='mb-2 text-center'>Colegios</p>
                <p className='mb-2 text-center'>Empresas Privadas</p>
                <p className='mb-2 text-center'>Empresas del Estado</p>
                <p className='mb-2 text-center'>Municipalidades</p>
              </div>

              <div className='w-full lg:w-1/3'>
                <p className='mb-4 text-center'>
                  <strong>
                    Serán capacitados para incorporarse en la gestión de
                    programas de rehabilitación:
                  </strong>
                </p>
                <p className='mb-2 text-center'>Consultorios - COSAM</p>
                <p className='mb-2 text-center'>Instituciones privadas</p>
                <p className='mb-2 text-center'>Comunidades Terapéuticas</p>
              </div>

              <div className='w-full lg:w-1/3'>
                <p className='mb-4 text-center'>
                  <strong>Internación</strong>
                </p>
                <p className='mb-2 text-center'>Servicios de Psiquiatría</p>
                <p className='mb-2 text-center'>Comunidades Terapéuticas</p>
                <p className='mb-2 text-center'>Clínicas Privadas</p>
              </div>
            </div>
          </div>
        </section>

        <section className='py-24 bg-zinc-100'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full flex flex-col lg:flex-row gap-x-6 gap-y-10 lg:gap-y-0'>
              <Content />
            </div>
          </div>
        </section>

        <section className='py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-8 text-center'>
              Contenidos
            </h2>

            <Contents />
          </div>
        </section>

        <section className='py-24 bg-zinc-100'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-8 text-center'>
              Orientado a
            </h2>

            <OrientedTo />
          </div>
        </section>

        <section className='py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-8 text-center'>
              Plan General de Estudios
            </h2>

            <h3 className='text-xl font-medium mb-12 text-center'>
              Actividades
            </h3>

            <StudyPlan />
          </div>
        </section>

        <section className='py-24 bg-zinc-100'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-8 text-center'>
              Profesores
            </h2>

            <Teachers />
          </div>
        </section>

        <section className='py-24 bg-zinc-200'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <Info />
          </div>
        </section>

        <Contact form='Formación Técnica' />
      </main>
    </RootLayout>
  )
}
