import { FaRegEnvelope, FaMobileAlt } from 'react-icons/fa'
import { Element } from 'react-scroll'
import { FormProvider } from 'contexts/form-context'
import Form from './form'

export default function Contact () {
  return (
    <Element name='contact'>
      <section className='contact' id='contacto'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center text-lg-left'>
              <h2>
                Contáctanos
              </h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6 mb-5 mb-lg-0 text-center text-lg-left'>
              <p>Utiliza nuestros canales de contacto o por medio del formulario de contacto</p>
              <div className='contact-box'>
                <div className='contact-info'>
                  <p>Claudia Miranda Zúñiga</p>
                  <div className='contact-data'>
                    <span className='icon'><FaRegEnvelope /></span>
                    <span className='link'><a href='mailto:claudia.miranda.z@usach.cl'>claudia.miranda.z@usach.cl</a></span>
                  </div>
                  <div className='contact-data'>
                    <span className='icon'><FaMobileAlt /></span>
                    <span className='link'><a href='tel:+56961742890'>+56 9 6174 2890</a></span>
                  </div>
                </div>
                <div className='contact-info'>
                  <p>Melissa Diaz Cruz</p>
                  <div className='contact-data'>
                    <span className='icon'><FaRegEnvelope /></span>
                    <span className='link'><a href='mailto:melissa.diaz@usach.cl'>melissa.diaz@usach.cl</a></span>
                  </div>
                  <div className='contact-data'>
                    <span className='icon'><FaMobileAlt /></span>
                    <span className='link'><a href='tel:++56961640345'>+56 9 6164 0345</a></span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <FormProvider>
                <Form />
              </FormProvider>
            </div>
          </div>
        </div>
        <style jsx>
          {`
          .contact {
            padding: 120px 0;
            background-color: #f8f9fa;
          }
          h2 {
            font-size: 2rem;
            margin-bottom: 25px;
            color: var(--ns-blue);
          }
          .contact-box {
            display: flex;
            width: 100%;
            flex-direction: column;
            @media (min-width: 576px) {
              flex-direction: row;
            }
            @media (min-width: 992px) {
              flex-direction: column;
            }
          }
          .contact-info {
            margin-bottom: 25px;
            display: flex;
            flex-direction: column;
            flex: 1;
          }
          .contact-data {
            margin-bottom: 10px;
            display: flex;
            text-align: center;
            flex: 1;
            justify-content: center;
            @media (min-width: 992px) {
              justify-content: flex-start;
            }
          }
          .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-right: 5px;
          }
          .link {
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
          }
        `}
        </style>
      </section>
    </Element>
  )
}
