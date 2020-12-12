import Banner from 'components/home/banner'
import Link from 'next/link'

export default function Intro () {
  return (
    <section className='intro'>
      <div className='container'>
        <div className='row justify-content-center justify-content-lg-center justify-content-xl-start'>
          <div className='col-md-10 col-lg-10 col-xl-6'>
            <h5>Somos Unidad de Adicciones</h5>
            <h1>
              Profesionales en Conocimiento e Investigación al servicio del
              Tratamiento y Adicciones
            </h1>
            <div className='intro-list'>
              <ul className='d-none d-xl-block'>
                <li>Diplomado en Psicoterapia</li>
                <li>
                  Tratamiento para pacientes con Trastorno por Abuso de Alcohol
                  y Drogas
                </li>
                <li>Programa Formación Técnica</li>
              </ul>
              <div className='d-block d-xl-none'>
                <p>Diplomado en Psicoterapia</p>
                <p>
                  Tratamiento para pacientes con Trastorno por Abuso de Alcohol
                  y Drogas
                </p>
                <p>Programa Formación Técnica</p>
              </div>
            </div>
            <div className='intro-links'>
              <Link href='/tratamientos'>
                <a className='btn btn-orange'>Tratamientos</a>
              </Link>
              <a
                href='https://diplomadopsicoterapia.cl/'
                className='btn btn-orange'
              >
                Diplomado
              </a>
              <Link href='/formacion-tecnica'>
                <a className='btn btn-orange'>Formación Técnica</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Banner />
      <style jsx>
        {`
          .intro {
            padding: 95px 0;
            background-color: var(--ns-intro-bg);
            position: relative;
          }
          h5 {
            color: var(--ns-blue);
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            text-align: center;
            margin-bottom: 20px;

            @media (min-width: 992px) {
              text-align: left;
            }
          }
          h1 {
            color: var(--ns-orange);
            text-transform: uppercase;
            font-weight: 600;
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 20px;

            @media (min-width: 992px) {
              font-size: 1.8rem;
              text-align: left;
              margin-bottom: 20px;
            }
          }
          .intro-list {
            margin-bottom: 30px;
            text-align: center;
            @media (min-width: 992px) {
              text-align: left;
            }
            div {
              p {
                text-transform: uppercase;
                color: var(--ns-blue);
                font-weight: 500;
                margin-bottom: 0px;
              }
            }
            ul {
              li {
                text-transform: uppercase;
                color: var(--ns-blue);
                font-weight: 500;
                &::marker {
                  color: var(--ns-orange);
                }
              }
            }
          }
          .intro-links {
            display: flex;
            :global(.btn) {
              margin-right: 10px;
            }
            justify-content: center;
            @media (min-width: 992px) {
              justify-content: left;
            }
          }
          .btn-orange {
            color: #fff;
            background-color: var(--ns-orange);
            border-color: var(--ns-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--ns-orange-hover);
              border-color: var(--ns-orange-hover);
            }

            &:disabled {
              color: #fff;
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
          .btn-blue {
            color: #fff;
            background-color: var(--ns-blue);
            border-color: var(--ns-blue);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--ns-blue-hover);
              border-color: var(--ns-blue-hover);
            }

            &:disabled {
              color: #fff;
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
        `}
      </style>
    </section>
  )
}
