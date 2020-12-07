import Image from 'next/image'

export default function Banner () {
  return (
    <>
      <div className='intro-float d-none d-xl-block'>
        <div className='intro-blue' />
      </div>
      <div className='intro-image d-none d-xl-block'>
        <Image src='/images/banner-unidad.png' alt='Unidad.cl' layout='fill' objectFit='contain' />
      </div>
      <div className='intro-block d-none d-xl-block'>
        <div className='number'>
          <span>25</span>
        </div>
        <div className='text'>
          <span>
            años de
            <br />
            trayectoria
          </span>
        </div>
      </div>

      <style jsx>
        {`
          .intro-float {
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            display: flex;
            z-index: 2;
            width: 430px;
            height: 100%;
          }
          .intro-blue {
            background-color: var(--ns-blue);
            width: 100%;
            height: 100%;
          }
          .intro-image {
            position: absolute;
            right: 45px;
            width: 600px;
            height: 100%;
            padding: 45px 0;
            top: 0;
            bottom: 0;
            z-index: 3;
          }
          .intro-block {
            position: absolute;
            bottom: 0;
            right: 160px;
            z-index: 5;
            height: 90px;
            display: flex;

            .number {
              background-color: var(--ns-orange);
              height: 90px;
              width: 90px;
              display: flex;
              justify-content: center;
              align-items: center;

              span {
                color: var(--ns-blue);
                font-size: 3rem;
                font-weight: 900;
              }
            }
            .text {
              text-transform: uppercase;
              color: #ffffff;
              font-size: 1.6rem;
              font-weight: 600;
              line-height: 1;
              display: flex;
              justify-content: center;
              align-items: flex-end;
              padding: 0 10px;
            }
          }
        `}
      </style>
    </>
  )
}
