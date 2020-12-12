import { memo } from 'react'
import { lastNameSchema } from 'validations/contact.validation'
import { useFormState, useFormDispatch } from 'contexts/form-context'
import { useValidation } from 'hooks/use-validation'

function LastName () {
  const { lastName } = useFormState()
  const { setValue } = useFormDispatch()
  const isValid = useValidation(lastNameSchema, { lastName })

  return (
    <>
      <label htmlFor='lastName'>Apellido*</label>
      <input
        type='text'
        className={
          `form-control${lastName.length === 0 ? '' : isValid ? ' is-valid' : ' is-invalid'}`
        }
        id='lastName'
        placeholder='Apellido'
        name='lastName'
        value={lastName}
        onChange={(evt) => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>
        Ingrese Apellido
      </div>
    </>
  )
}

export default memo(LastName)
