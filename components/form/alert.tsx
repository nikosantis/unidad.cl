import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { useFormContext } from './form-submit'

export default function Alert() {
  const { isError, isSuccess } = useFormContext()
  if (isError) {
    return (
      <div className='w-full mt-6'>
        <div
          className='p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
          role='alert'
        >
          <span className='font-medium mr-1'>
            ¡Error al enviar el formulario!
          </span>
          Por favor inténtelo denuevo.
        </div>
      </div>
    )
  }
  return (
    <>
      <Transition
        as={Fragment}
        show={isSuccess}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-0'
        leaveTo='opacity-0'
        unmount
      >
        <div className='w-full mt-6'>
          <div
            className='p-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800'
            role='alert'
          >
            <span className='font-medium mr-1'>¡Formulario enviado!</span>Pronto
            nos contactaremos con usted.
          </div>
        </div>
      </Transition>

      <Transition
        as={Fragment}
        show={isError}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-0'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
        unmount
      >
        <div className='w-full mt-6'>
          <div
            className='p-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800'
            role='alert'
          >
            <span className='font-medium mr-1'>
              ¡Error al enviar el formulario!
            </span>
            Por favor inténtelo denuevo.
          </div>
        </div>
      </Transition>
    </>
  )
}
