import { FaRegEnvelope, FaMobileAlt } from 'react-icons/fa'
import { FormProvider } from 'contexts/form-context'
import Form from './form'

export default function Contact () {
  return (
    <section className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            <h2>
              Contáctanos
            </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-6 mb-5 mb-lg-0'>
            <p>Utiliza nuestros canales de contacto o por medio del formulario de contacto</p>
            <div className='contact-info'>
              <p>Mylenne Monard</p>
              <div className='contact-data'>
                <span className='icon'><FaRegEnvelope /></span>
                <span className='link'><a href='mailto:secretaria@ciad.cl'>secretaria@ciad.cl</a></span>
              </div>
              <div className='contact-data'>
                <span className='icon'><FaMobileAlt /></span>
                <span className='link'><a href='tel:+56222254444'>+56 2 2225 4444</a></span>
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
          }
          .contact-info {
            margin-bottom: 25px;
          }
          .contact-data {
            margin-bottom: 10px;
            display: flex;
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
          }
        `}
      </style>
    </section>
  )
}
