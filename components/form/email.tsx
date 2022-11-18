import { Fragment } from 'react'
import { Transition } from '@headlessui/react'

import { emailSchema } from 'lib/schemas/contact-form-schema'
import { useInput } from 'lib/hooks/use-input'
import Input from './input'
import { useFormContext } from './form-submit'

export default function Email() {
  const { isSuccess: isFormSuccess } = useFormContext()
  const { inputProps, errors, hasErrors, isSuccess } = useInput({
    baseValue: '',
    type: 'email',
    schema: emailSchema,
    placeholder: 'Escribe aquí tu correo electrónico',
    reset: isFormSuccess
  })

  return (
    <div className='w-full block'>
      <label htmlFor='email' className='text-sm block mb-2'>
        Correo electrónico *
      </label>
      <Input
        id='email'
        name='email'
        {...inputProps}
        invalid={hasErrors}
        valid={isSuccess}
      />
      <p
        className='mt-1 text-xs text-red-500 min-h-[16px]'
        id='email-helpertext'
      >
        <Transition
          as={Fragment}
          show={hasErrors}
          enter='transition-opacity duration-75'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='transition-opacity duration-150'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <span>
            {errors?.map(x => (
              <span key={x}> {x}.</span>
            ))}
          </span>
        </Transition>
      </p>
    </div>
  )
}
