import Image from 'next/image'
import BgOrange from './bg-orange'
import CienOline from './cien-online'
import BannerText from './banner-text'

export default function Banner () {
  return (
    <>
      <div className='bg-orange d-none d-xl-block'>
        <BgOrange />
      </div>
      <div className='cien-online d-none d-xl-block'><CienOline /></div>
      <div className='text d-none d-xl-block'><BannerText /></div>
      <div className='intro-image d-none d-xl-block'>
        <Image src='/images/formacion-tecnica.png' alt='Unidad.cl' layout='fill' objectFit='contain' />
      </div>
      <style jsx>
        {`
          .bg-orange {
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1;
          }
          .cien-online {
            position: absolute;
            z-index: 2;
            right: 5%;
          }
          .text {
            position: absolute;
            z-index: 4;
            right: 0;
            bottom: 0;
          }
          .intro-image {
            position: absolute;
            z-index: 3;
            width: 440px;
            height: 100%;
            right: 250px;
          }
        `}
      </style>
    </>
  )
}
