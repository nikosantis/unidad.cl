import Image from 'next/image'
import BgOrange from './bg-orange'
import CienOline from './cien-online'
import BannerText from './banner-text'
import formacionImg from 'public/images/formacion-tecnica.png'

export default function Banner() {
  return (
    <>
      <div className='bg-orange d-none d-sm-none d-md-none d-lg-block'>
        <BgOrange />
      </div>
      <div className='cien-online d-none d-sm-none d-md-none d-lg-block'>
        <CienOline />
      </div>
      <div className='text d-none d-sm-none d-md-none d-lg-block'>
        <BannerText />
      </div>
      <div className='intro-image d-none d-sm-none d-md-none d-lg-block'>
        <Image
          src={formacionImg}
          placeholder='blur'
          alt='Unidad.cl'
          layout='fill'
          objectFit='contain'
        />
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
            width: 465px;
            right: 250px;
            height: 449px;
          }
        `}
      </style>
    </>
  )
}
