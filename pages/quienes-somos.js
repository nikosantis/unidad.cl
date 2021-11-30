import Page from 'components/page'
import Footer from 'components/footer'
import Spacer from 'components/spacer'
import Professionals from 'components/professionals'

export default function QuienesSomos() {
  return (
    <Page
      title='Quienes Somos | Unidad de Adicciones'
      description='Quienes Somos. Unidad de Adicciones de la Universidad de Santiago de Chile. Tratamiento de adicciones, drogas y drogadicción.'
    >
      <Spacer height='110' />
      <main>
        <section className='intro'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1>Bienvenidos a Unidad de Adicciones</h1>
                <h3>
                  “Conocimiento e investigación al servicio del tratamiento en
                  Adicciones”
                </h3>
              </div>
            </div>
          </div>
        </section>
        <Professionals />
        <section className='content'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h2>Quienes Somos</h2>
                <p>
                  Grupo de profesionales de la Facultad de Ciencias Médicas de
                  la Universidad de Santiago dedicados a la Investigación y
                  Docencia en Abuso de Alcohol y Drogas.
                </p>
                <h2>Nuestra Misión</h2>
                <p>
                  Generar conocimientos y desarrollar un Modelo de Psicoterapia
                  que permita abordar el trabajo con pacientes que presentan
                  Trastorno por abuso de Alcohol y Drogas.
                </p>
                <h2>Nuestros Valores</h2>
                <p>
                  Somos académicos de trayectoria, con amplia experiencia en
                  investigación, publicaciones de libros y trabajos científicos
                  con más de 25 años de dedicación a la docencia investigación y
                  tratamiento.
                </p>
              </div>
            </div>
          </div>
        </section>
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
              font-size: 2.2rem;
              text-align: center;
            }
            h3 {
              color: #3e3b3b;
              font-size: 1.2rem;
              text-align: center;
              font-weight: 300;
            }
          }
          .professionals {
            padding: 40px 0;
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
          .avatar {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
          }
        `}
      </style>
    </Page>
  )
}
