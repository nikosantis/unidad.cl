import { memo } from 'react'
import { emailSchema } from 'validations/contact.validation'
import { useFormState, useFormDispatch } from 'contexts/form-context'
import { useValidation } from 'hooks/use-validation'

function Email () {
  const { email } = useFormState()
  const { setValue } = useFormDispatch()
  const isValid = useValidation(emailSchema, { email })

  return (
    <>
      <label htmlFor='email'>Correo Electrónico*</label>
      <input
        type='email'
        className={
          `form-control${email.length === 0 ? '' : isValid ? ' is-valid' : ' is-invalid'}`
        }
        id='email'
        placeholder='Correo Electrónico'
        name='email'
        value={email}
        onChange={(evt) => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>
        Ingrese Correo Electrónico
      </div>
    </>
  )
}

export default memo(Email)
