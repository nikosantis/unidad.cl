import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import Banner from './banner'

export default function Intro () {
  return (
    <div className='hero'>
      <Banner />
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-lg-12'>
            <div className='logo-unidad'>
              <Image src='/images/fcm-logo.png' alt='Unidad.cl' layout='fill' objectFit='contain' />
            </div>
            <h1 className='title'>Formación Técnica Nivel Superior en Rehabilitación de Alcohol y Drogas</h1>
            <hr className='hr' />
            <h2 className='subtitle'><b>Aprende las competencias necesarias</b> <br /> para desarrollar tus capacidades y lograr verdaderos cambios.</h2>
            <div className='buttons'>
              <LinkScroll
                to='contact'
                className='btn btn-lg btn-orange'
                spy
                smooth
                duration={500}
              >
                POSTULA AQUÍ
              </LinkScroll>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
        .hero {
          background-color: #fff;
          width: 100vw;
          min-height: 500px;
          padding: 20px 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;

          @media (min-width: 992px) {
            padding: 106px 0;
          }
        }
        .logo-unidad {
          position: relative;
          width: 100%;
          height: 74.25px;
          margin-bottom: 20px;
        }
        .title {
          color: var(--ns-blue);
          text-transform: uppercase;
          font-weight: 600;
          font-size: 2.3rem;
          text-align: center;
        }
        .hr {
          border-color: var(--ns-blue);
          border-width: 2px;
        }
        .subtitle {
          font-size: 1.5rem;
          text-align: center;
          color: var(--ns-orange);
          margin-bottom: 26px;
        }
        .buttons {
          display: flex;
          justify-content: center;
        }
        :global(.btn-orange) {
          color: #fff;
          background-color: var(--ns-orange);
          border-color: var(--ns-orange);
          transition: all 0.2s ease;
          font-weight: 600;

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
      `}
      </style>
    </div>
  )
}
