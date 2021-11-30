import Image from 'next/image'
import { CgCheckO } from 'react-icons/cg'
import { Link as LinkScroll } from 'react-scroll'
import logoFcm from 'public/images/fcm-logo.png'
import formacionImg from 'public/images/formacion-tecnica.png'

export default function MobileBanner() {
  return (
    <div className='col-12 d-block d-lg-none px-0'>
      <div className='logo-unidad'>
        <Image
          src={logoFcm}
          priority
          placeholder='blur'
          alt='Unidad.cl'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='intro-image'>
        <Image
          src={formacionImg}
          placeholder='blur'
          alt='Unidad.cl'
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='bg-orange' />
      <div className='intro-blue'>
        <p>
          Formación Técnica Nivel Superior en Rehabilitación de Alcohol y Drogas
        </p>
      </div>
      <div className='intro-orange'>
        <p>100% ONLINE</p>
      </div>
      <div className='text-box'>
        <h2 className='subtitle'>
          <b>Aprende las competencias necesarias</b> <br /> para desarrollar tus
          capacidades y lograr verdaderos cambios.
        </h2>
      </div>

      <div className='checks'>
        <div className='check'>
          <div className='icon'>
            <CgCheckO color='var(--ns-orange)' size='25' />
          </div>
          <div className='text'>No se requiere PDT/ PSU</div>
        </div>

        <div className='check'>
          <div className='icon'>
            <CgCheckO color='var(--ns-orange)' size='25' />
          </div>
          <div className='text'>No necesitas estudios previos</div>
        </div>

        <div className='check'>
          <div className='icon'>
            <CgCheckO color='var(--ns-orange)' size='25' />
          </div>
          <div className='text'>Debes tener al menos 21 años</div>
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
      <style jsx>
        {`
          .logo-unidad {
            position: relative;
            width: 100%;
            height: 74.25px;
            z-index: 2;
          }
          .intro-image {
            width: 100%;
            height: 410px;
            position: relative;
            z-index: 2;
          }
          .bg-orange {
            position: absolute;
            background-color: var(--ns-orange);
            z-index: 1;
            width: 100%;
            height: 160px;
            top: 300px;
          }
          .intro-blue {
            position: relative;
            background-color: var(--ns-blue);
            padding: 20px 25px;
            margin-top: -38px;
            z-index: 3;

            p {
              margin: 0;
              color: #fff;
              text-align: center;
              font-size: 1.5rem;
              text-transform: uppercase;
              line-height: 1.3;
            }
          }
          .intro-orange {
            position: relative;
            background-color: var(--ns-orange);
            padding: 20px 25px;
            z-index: 3;
            margin-bottom: 25px;

            p {
              margin: 0;
              color: #fff;
              text-align: center;
              font-size: 2rem;
              font-weight: bold;
              text-transform: uppercase;
              line-height: 1.3;
            }
          }
          .text-box {
            padding: 0 20px;
          }
          .subtitle {
            font-size: 1.3rem;
            text-align: center;
            color: var(--ns-orange);
            margin-bottom: 26px;
            font-weight: 300;
            b {
              font-weight: 600;
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
