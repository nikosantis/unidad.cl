import clsx from 'clsx'
import { useScroll } from 'lib/contexts/scroll'

import ContactForm from './contact-form'
import ContactItem from './contact-item'

type ContactProps = {
  form: string
  bg?: string
  isTechNotActive?: boolean
}

export default function Contact({ form, bg, isTechNotActive }: ContactProps) {
  const { contactRef } = useScroll()
  const isFormation = form === 'Formación Técnica'
  return (
    <section className={clsx('py-24 relative', bg)} ref={contactRef}>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {isFormation && isTechNotActive && (
          <div className='flex flex-wrap'>
            <div className='w-full mb-6'>
              <h2 className='text-2xl font-medium text-center'>
                Periodo de Postulación e Ingreso CERRADO
              </h2>
            </div>
          </div>
        )}
        {!isTechNotActive && (
          <div className='flex flex-wrap'>
            <div className='w-full mb-6'>
              <h2 className='text-4xl font-medium text-center lg:text-left'>
                {isFormation ? 'Postula Aquí' : 'Contáctanos'}
              </h2>
            </div>

            <div className='w-full lg:w-6/12 lg:pr-3 mb-6 lg:mb-0'>
              {isFormation && (
                <>
                  <p className='mb-4 text-center lg:text-left text-lg'>
                    Una vez completado este formulario te contactaremos a través
                    de correo a partir del <strong>10 de Enero</strong> para que
                    puedan asistir por vía zoom a una entrevista.
                  </p>
                  <p className='mb-6 text-center lg:text-left text-lg'>
                    Agradeceremos estar atentos a sus correos.
                  </p>
                </>
              )}

              <p className='mb-4 text-center lg:text-left'>
                Utiliza nuestros canales de contacto o por medio del formulario
                de contacto
              </p>

              <ContactItem
                name='Claudia Miranda Zúñiga'
                phone='+56 9 6174 2890'
                email='claudia.miranda.z@usach.cl'
              />
              {/* <ContactItem
              name='Melissa Diaz Cruz'
              email='melissa.diaz@usach.cl'
              phone='+56 9 6164 0345'
            /> */}
            </div>

            <div className='w-full lg:w-6/12 lg:pl-3'>
              <div className='bg-slate-100 rounded-md py-12 px-8'>
                <ContactForm form={form} />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
