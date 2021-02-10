import Image from 'next/image'
import { Link as LinkScroll } from 'react-scroll'
import { CgCheckO } from 'react-icons/cg'
import Banner from './banner'
import MobileBanner from './mobile-banner'

export default function Intro () {
  return (
    <div className='hero'>
      <Banner />
      <div className='container'>
        <div className='row'>
          <MobileBanner />
          <div className='col-xl-6 col-lg-12 d-none d-sm-none d-md-none d-lg-block'>
            <div className='logo-unidad'>
              <Image src='/images/fcm-logo.png' alt='Unidad.cl' layout='fill' objectFit='contain' />
            </div>
            <h1 className='title'>Formación Técnica Nivel Superior en Rehabilitación de Alcohol y Drogas</h1>
            <hr className='hr' />
            <h2 className='subtitle'><b>Aprende las competencias necesarias</b> <br /> para desarrollar tus capacidades y lograr verdaderos cambios.</h2>
            <div className='checks'>
              <div className='check'>
                <div className='icon'>
                  <CgCheckO color='var(--ns-orange)' size='25' />
                </div>
                <div className='text'>
                  No se requiere PDT/ PSU
                </div>
              </div>

              <div className='check'>
                <div className='icon'>
                  <CgCheckO color='var(--ns-orange)' size='25' />
                </div>
                <div className='text'>
                  No necesitas estudios previos
                </div>
              </div>

              <div className='check'>
                <div className='icon'>
                  <CgCheckO color='var(--ns-orange)' size='25' />
                </div>
                <div className='text'>
                  Debes tener al menos 21 años
                </div>
              </div>
            </div>
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
          padding: 20px 0;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 30px 0;
          min-height: 500px;
          @media (min-width: 992px) {
            padding: 106px 0;
            background-color: #ccc;
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
        .checks {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 30px;
        }
        .check {
          display: flex;
        }
        .icon {
          margin-right: 10px;
        }
        .text {
          font-size: 1.2rem;
        }
      `}
      </style>
    </div>
  )
}
