import Image from 'next/image'

export default function Professionals () {
  return (
    <section className='professionals'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-12 professional'>
            <div className='avatar'>
              <Image src='/images/humberto-guajardo.png' alt='Humberto Guajardo' layout='fill' objectFit='contain' />
            </div>
            <div className='info'>
              <h4>Prof. Dr. Humberto Guajardo Sáinz</h4>
              <h5>Director</h5>
            </div>
          </div>
          <div className='col-lg-3 col-12 professional'>
            <div className='avatar'>
              <Image src='/images/diana-kushner.png' alt='Humberto Guajardo' layout='fill' objectFit='contain' />
            </div>
            <div className='info'>
              <h4>Sra. Diana Kushner Lanis</h4>
            </div>
          </div>
          <div className='col-lg-3 col-12 professional'>
            <div className='avatar'>
              <Image src='/images/felipe-lecannelier.png' alt='Humberto Guajardo' layout='fill' objectFit='contain' />
            </div>
            <div className='info'>
              <h4>Sr. Felipe Lecannelier Acevedo</h4>
            </div>
          </div>
          <div className='col-lg-3 col-12 professional'>
            <div className='avatar'>
              <Image src='/images/javier-guajardo.png' alt='Humberto Guajardo' layout='fill' objectFit='contain' />
            </div>
            <div className='info'>
              <h4>Sr. Javier Guajardo</h4>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .professionals {
            padding: 40px 0;
          }
          .professional {
            margin-bottom: 25px;
            @media (min-width: 992px) {
              margin-bottom: 0;
            }
          }
          .avatar {
            width: 200px;
            height: 200px;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            margin: 0 auto;
            margin-bottom: 25px;
          }
          .info {
            h4 {
              font-size: 1.125rem;
              text-align: center;
            }
            h5 {
              font-size: 1rem;
              margin-bottom: 5px;
              text-align: center;
              font-weight: bolder;
            }
          }
        `}
      </style>
    </section>
  )
}
