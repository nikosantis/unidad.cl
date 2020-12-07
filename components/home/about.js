import Professionals from 'components/professionals'

export default function About () {
  return (
    <section className='about'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center'>
            <h2>Quienes somos</h2>
            <p>
              Grupo de profesionales de la Facultad de Ciencias Médicas de la
              Universidad de Santiago dedicados a la Investigación y Docencia en Abuso
              de Alcohol y Drogas
            </p>
          </div>
        </div>
        <Professionals />
      </div>
      <style jsx>
        {`
          .about {
            padding: 90px 0;
          }
          h2 {
            font-size: 2rem;
            margin-bottom: 25px;
          }
          p {
            margin-bottom: 50px;
          }
        `}
      </style>
    </section>
  )
}
