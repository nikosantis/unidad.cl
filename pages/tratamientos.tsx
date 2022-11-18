import RootLayout from 'layouts/root'
import { tratamientosSeoMetas } from 'lib/seo-metas'
import Contact from 'components/contact'

export default function IndexPage() {
  return (
    <RootLayout customMeta={{ ...tratamientosSeoMetas }}>
      <main role='main' className='w-full h-full'>
        <section className='py-24'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='w-full text-center'>
              <h1 className='text-u-blue-500 text-4xl font-medium'>
                Tratamientos
              </h1>
            </div>
          </div>
        </section>

        <section className='py-24 bg-zinc-100'>
          <div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-slate-600'>
            <p className='mb-4'>
              La Unidad de Adicciones de la Facultad de Ciencias Médicas de la
              Universidad de Santiago de Chile mantiene un convenio con el CIAD
              (Centro Investigación y Atención Drogodependencias), donde se
              realizan programas de tratamiento basados en el Modelo de
              tratamiento de Adicciones desarrollado por docentes de la Unidad.
            </p>

            <p className='mb-4'>
              En el CIAD se desarrolla estudios y prácticas que permiten
              enriquecer la experiencia que se transmite a los alumnos de los
              programas docentes.
            </p>

            <p className='mb-4'>
              Este enfoque implica un abordaje con características de atención
              psicológica y psiquiátrica basada en los Modelos Constructivistas
              sobre la construcción de la Identidad del individuo.
            </p>
            <p className='mb-4'>
              Desde esta perspectiva ofrece intervenciones en:
            </p>
            <ul>
              <li>Consumo precoz de drogas</li>
              <li>Dependencia a drogas</li>
              <li>Consumo disfuncional de alcohol</li>
              <li>Alcoholismo</li>
              <li>Patologías duales</li>
            </ul>
            <p className='mb-4'>
              Este trabajo se realiza en el CIAD ubicado en calle Amapolas 2095
              de la Comuna de Providencia.
            </p>
            <p className='mb-4'>
              El CIAD desarrolla programas de rehabilitación ambulatorios para
              pacientes con abuso y consumo de sustancias.
            </p>
            <p className='mb-4'>Para más información:</p>
            <p className='mb-10'>
              <a
                href='https://www.ciad.cl/'
                target='_blank'
                className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700'
                rel='noreferrer'
              >
                Centro Investigación y Atención Drogodependencias
              </a>
            </p>
            <h2 className='text-u-blue-500 text-3xl font-medium mb-4'>
              Modalidades
            </h2>
            <p className='mb-4'>
              El campo de la Psiquiatría, Psicología y de la Salud Mental en
              general se ha caracterizado por permanentes desacuerdos en los
              paradigmas teóricos y una proliferación de enfoques y escuelas
              durante el último siglo. Esto no ha sido ajeno al trabajo en
              prevención y rehabilitación de adicciones donde los diferentes
              modelos terapéuticos han debido aceptar fracasos y cifras de éxito
              muy limitadas.
            </p>
            <p className='mb-4'>
              Por esta razón hemos desarrollado un Modelo de Psicoterapia de
              acercamiento al problema de las Adicciones. Este Modelo está
              basado en conceptos modernos de Teoría de la Complejidad,
              Neuroafectividad Vínculo y Apego, Constructivismo que buscan
              puntos de encuentro entre los diferentes enfoques.
            </p>
            <p className='mb-4'>
              Nuestro Modelo considera que la Adicción a Drogas es un Sintoma de
              una problemática mayor del Individuo.que involucra aspectos del
              desarrollo histórico y evolutivo del individuo.
            </p>
            <p className='mb-4'>
              Durante sus estudios nuestros alumnos tienen la posibilidad de
              familiarizarse con el Modelo de abordaje de los trastornos
              Adictivos.
            </p>
            <p>
              Este Modelo fue presentado por profesores de nuestra Facultad en
              diferentes Congresos y países como España, Argentina, Costa Rica,
              Ecuador entre otros.
            </p>
          </div>
        </section>

        <Contact form='Tratamientos' />
      </main>
    </RootLayout>
  )
}
