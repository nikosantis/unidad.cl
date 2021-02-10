import Page from 'components/page'
import Footer from 'components/footer'
import Spacer from 'components/spacer'
import Intro from 'components/formacion-tecnica/intro'
import CourseResume from 'components/formacion-tecnica/course-resume'
import CourseContent from 'components/formacion-tecnica/course-content'
import Oriented from 'components/formacion-tecnica/oriented'
import Plan from 'components/formacion-tecnica/plan'
import Teachers from 'components/formacion-tecnica/teachers'
import Price from 'components/formacion-tecnica/price'
import Contact from 'components/formacion-tecnica/contact'

export default function FormacionTecnica () {
  return (
    <Page title='Formación Técnica | Unidad de Adicciones' description='Formación Técnica. Unidad de Adicciones de la Universidad de Santiago de Chile. Tratamiento de adicciones, drogas y drogadicción.'>
      <Spacer height='96' />
      <Intro />
      <main>
        <section className='intro' id='introduccion'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h3>Postula al Programa de Formación Técnica en Nivel Superior</h3>
                <h5>Bienvenidos al programa "Técnico en prevención y rehabilitación de personas con dependencia a drogas"</h5>
              </div>
            </div>
          </div>
        </section>
        <section className='content'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 col-lg-8 text-center mb-5'>
                <p>
                  El programa tiene como objetivo formar personal especializado, con alto grado de preparación para realizar las actividades propias del Decreto N°04 de 2010 del Ministerio de Salud.
                </p>
                <p>
                  Los técnicos serán capacitados para desempeñarse en instituciones públicas y privadas en actividades de prevención y rehabilitación del consumo de sustancias adictivas.
                </p>
                <p>
                  Serán capacitados para trabajar en programas de prevención en:
                </p>
              </div>

              <div className='col-12 col-lg-6 text-center mb-5'>
                <p><b>Desde esta perspectiva ofrece intervenciones en:</b></p>
                <p>Colegios</p>
                <p>Empresas Privadas</p>
                <p>Empresas Privadas</p>
                <p>Municipalidades</p>
                <p>Empresas del Estado</p>
              </div>

              <div className='col-12 col-lg-6 text-center mb-5'>
                <p><b>Serán capacitados para incorporarse en la gestión de programas de rehabilitación:</b></p>
                <p><b>Ambulatorios</b></p>
                <p>Consultorios – COSAM</p>
                <p>Instituciones privadas</p>
                <p>Comunidades Terapéuticas</p>
                <p><b>Internación</b></p>
                <p>Servicios de Psiquiatría</p>
                <p>Comunidades Terapéuticas</p>
                <p>Clínicas Privadas</p>
              </div>

            </div>
          </div>
        </section>
        <CourseResume />
        <CourseContent />
        <Oriented />
        <Plan />
        <Teachers />
        <Price />
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

            h3 {
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
          h5 {
            text-align: center;
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
