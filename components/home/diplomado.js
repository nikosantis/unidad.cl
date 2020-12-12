import Image from 'next/image'
import ExternalLink from 'components/external-link'

export default function Diplomado () {
  return (
    <section className='diplomado'>
      <div className='float'>
        <Image src='/images/diplomado.png' alt='Diplomado Clínico Internacional' layout='fill' objectFit='contain' />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-7'>
            <h5>Diplomado Clínico Internacional</h5>
            <h3>Psicoterapia para el Tratamiento de abuso de alcohol y drogas</h3>
            <h4>Aproximación Neuroafectiva Constructivista</h4>
            <div className='link'>
              <ExternalLink href='https://diplomadopsicoterapia.cl/' text='Más Información' className='btn-usach' />
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .diplomado {
            padding: 90px 0;
            background-color: var(--ns-intro-bg);
            position: relative;
            min-height: 100vh;
            @media (min-width: 768px) {
              min-height: 0;
            }
            @media (min-width: 992px) {
              min-height: 0;
            }
          }
          .float {
            position: absolute;
            bottom: 0;
            z-index: 1;
            right: 5%;
            width: 350px;
            height: 423px;
            @media (min-width: 768px) {
              width: 300px;
              height: 373px;
            }
          }
          h5 {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.2rem;
            position: relative;
            z-index: 2;
          }
          h3 {
            color: var(--ns-blue);
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            text-align: center;
            position: relative;
            z-index: 2;
            @media (min-width: 768px) {
              font-size: 2rem;
              text-align: left;
            }
          }
          h4 {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.2rem;
            text-align: center;
            margin-bottom: 25px;
            position: relative;
            z-index: 2;
            @media (min-width: 768px) {
              text-align: left;
            }
            @media (min-width: 992px) {
              font-size: 1.7rem;
              text-align: left;
            }
          }
          .link {
            text-align: center;
            @media (min-width: 768px) {
              text-align: left;
            }
          }
        `}
      </style>
    </section>
  )
}
