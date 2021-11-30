import Page from 'components/page'
import Footer from 'components/footer'
import Spacer from 'components/spacer'
import ExternalLink from 'components/external-link'
import Contact from 'components/tratamientos/contact'

export default function Tratamientos() {
  return (
    <Page
      title='Tratamientos | Unidad de Adicciones'
      description='Tratamientos. Unidad de Adicciones de la Universidad de Santiago de Chile. Tratamiento de adicciones, drogas y drogadicción.'
    >
      <Spacer height='110' />
      <main>
        <section className='intro'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Tratamientos</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <p>
                  La Unidad de Adicciones de la Facultad de Ciencias Médicas de
                  la Universidad de Santiago de Chile mantiene un convenio con
                  el CIAD (Centro Investigación y Atención Drogodependencias),
                  donde se realizan programas de tratamiento basados en el
                  Modelo de tratamiento de Adicciones desarrollado por docentes
                  de la Unidad.
                </p>
                <p>
                  En el CIAD se desarrolla estudios y prácticas que permiten
                  enriquecer la experiencia que se transmite a los alumnos de
                  los programas docentes.
                </p>
                <p>
                  Este enfoque implica un abordaje con características de
                  atención psicológica y psiquiátrica basada en los Modelos
                  Constructivistas sobre la construcción de la Identidad del
                  individuo.
                </p>
                <p>Desde esta perspectiva ofrece intervenciones en:</p>
                <ul>
                  <li>Consumo precoz de drogas</li>
                  <li>Dependencia a drogas</li>
                  <li>Consumo disfuncional de alcohol</li>
                  <li>Alcoholismo</li>
                  <li>Patologías duales</li>
                </ul>
                <p>
                  Este trabajo se realiza en el CIAD ubicado en calle Amapolas
                  2095 de la Comuna de Providencia.
                </p>
                <p>
                  El CIAD desarrolla programas de rehabilitación ambulatorios
                  para pacientes con abuso y consumo de sustancias.
                </p>
                <p>Para más información:</p>
                <div className='link'>
                  <ExternalLink
                    href='https://www.ciad.cl/'
                    text='Centro Investigación y Atención Drogodependencias'
                    className='btn-usach'
                  />
                </div>
                <h2>Modalidades</h2>
                <p>
                  El campo de la Psiquiatría, Psicología y de la Salud Mental en
                  general se ha caracterizado por permanentes desacuerdos en los
                  paradigmas teóricos y una proliferación de enfoques y escuelas
                  durante el último siglo. Esto no ha sido ajeno al trabajo en
                  prevención y rehabilitación de adicciones donde los diferentes
                  modelos terapéuticos han debido aceptar fracasos y cifras de
                  éxito muy limitadas.
                </p>
                <p>
                  Por esta razón hemos desarrollado un Modelo de Psicoterapia de
                  acercamiento al problema de las Adicciones. Este Modelo está
                  basado en conceptos modernos de Teoría de la Complejidad,
                  Neuroafectividad Vínculo y Apego, Constructivismo que buscan
                  puntos de encuentro entre los diferentes enfoques.
                </p>
                <p>
                  Nuestro Modelo considera que la Adicción a Drogas es un
                  Sintoma de una problemática mayor del Individuo.que involucra
                  aspectos del desarrollo histórico y evolutivo del individuo.
                </p>
                <p>
                  Durante sus estudios nuestros alumnos tienen la posibilidad de
                  familiarizarse con el Modelo de abordaje de los trastornos
                  Adictivos.
                </p>
                <p>
                  Este Modelo fue presentado por profesores de nuestra Facultad
                  en diferentes Congresos y países como España, Argentina, Costa
                  Rica, Ecuador entre otros.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
      <Footer />
      <style jsx>
        {`
          main {
            min-height: calc(100vh - (110px - 211px));
          }
          .intro {
            padding: 50px 0;

            h1 {
              color: var(--ns-blue);
              font-size: 3.5rem;
              text-align: center;
            }
          }
          .content {
            padding: 40px 0;
          }
          h2 {
            color: var(--ns-blue);
            font-size: 2rem;
            margin-top: 30px;
            margin-bottom: 35px;
            text-align: center;
            @media (min-width: 992px) {
              text-align: left;
            }
          }
          p {
            text-align: center;
            @media (min-width: 992px) {
              text-align: left;
            }
          }
          .link {
            text-align: center;
            @media (min-width: 992px) {
              text-align: left;
            }
          }
        `}
      </style>
    </Page>
  )
}
