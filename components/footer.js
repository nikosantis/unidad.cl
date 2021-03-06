import Image from 'next/image'

export default function Footer () {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          <div className='col-lg-3 col-md-3 col-12'>
            <div className='footer-logo'>
              <Image src='/images/logo-blanco.png' alt='Universidad de Santiago de Chile' width={255} height={131} layout='responsive' />
            </div>
          </div>
          <div className='col-lg-7 col-md-7 col-12'>
            <div className='footer-texts'>
              <div className='footer-box'>
                <p>
                  Unidad de Adicciones – Universidad de Santiago de Chile © 2020
                </p>
                <p>
                  <a href='https://goo.gl/maps/i1uc4cCk35gBvUNU7'>
                    Amapolas 2095, Providencia, Santiago
                  </a>
                </p>
                <p>
                  Tel <a href='tel:+56 2225 4000'>(562) 225 4000</a>
                </p>
                <p>
                  Correo Electrónico: <a href='mailto:melissa.diaz@usach.cl'>melissa.diaz@usach.cl</a> - <a href='mailto:jenniffer.ferrada@usach.cl'>jenniffer.ferrada@usach.cl</a>
                </p>
              </div>
            </div>
          </div>
          <div className='col-lg-2 col-md-2 col-12'>
            <div className='footer-texts'>
              <div className='footer-box'>
                <p>
                  Desarrollado por:
                </p>
                <p>
                  <a href='https://www.linkedin.com/in/nikosantis/'>Nikolas Santis</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer {
            background-color: var(--ns-footer-background);
            padding: 40px 0;
          }

          .footer-logo {
            width: 100%;
          }

          .footer-texts {
            color: var(--ns-intro-bg);
            text-align: center;
            height: 100%;
            align-items: center;
            display: flex;
            justify-content: center;

            &:first-of-type {
              margin-bottom: 20px;

              @media (min-width: 992px) {
                margin-bottom: 0px;
              }
            }
          }

          .footer-box {
            display: flex;
            flex-direction: column;
          }

          p {
            font-size: 0.785rem;
            margin: 0;
          }

          a {
            color: var(--ns-intro-bg);
            transition: color 0.2s ease;
          }

          a:hover {
            color: #fff;
          }
        `}
      </style>
    </footer>
  )
}
