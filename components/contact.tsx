import clsx from 'clsx'
import { useScroll } from 'lib/contexts/scroll'

import ContactForm from './contact-form'
import ContactItem from './contact-item'

type ContactProps = {
  form: string
  bg?: string
}

export default function Contact({ form, bg }: ContactProps) {
  const { contactRef } = useScroll()
  const isFormation = form === 'Formación Técnica'
  return (
    <section className={clsx('py-24 relative', bg)} ref={contactRef}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-wrap'>
          <div className='w-full mb-6'>
            <h2 className='text-4xl font-medium text-center lg:text-left'>
              Contáctanos
            </h2>
          </div>

          <div className='w-full lg:w-6/12 lg:pr-3 mb-6 lg:mb-0'>
            <p className='mb-4 text-center lg:text-left'>
              Utiliza nuestros canales de contacto o por medio del formulario de
              contacto
            </p>

            <ContactItem
              name='Claudia Miranda Zúñiga'
              phone='+56 9 6174 2890'
              email='claudia.miranda.z@usach.cl'
            />
            <ContactItem
              name='Melissa Diaz Cruz'
              email='melissa.diaz@usach.cl'
              phone='+56 9 6164 0345'
            />
            {isFormation && (
              <>
                <p className='mb-4 text-center lg:text-left mt-6'>
                  Para aquellos postulantes que hayan llenado su formulario
                  durante el período de Noviembre a Diciembre se les contactará
                  a través de correo a partir del 10 de Enero para que puedan
                  asistir por vía zoom a una entrevista.
                </p>
                <p className='mb-4 text-center lg:text-left'>
                  Agradeceremos estar atentos a sus correos.
                </p>
              </>
            )}
          </div>

          <div className='w-full lg:w-6/12 lg:pl-3'>
            <div className='bg-slate-100 rounded-md py-12 px-8'>
              <ContactForm form={form} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
