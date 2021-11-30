import { memo } from 'react'
import { phoneSchema } from 'validations/contact.validation'
import { useFormState, useFormDispatch } from 'contexts/form-context'
import { useValidation } from 'hooks/use-validation'

function Phone() {
  const { phone } = useFormState()
  const { setValue } = useFormDispatch()
  const isValid = useValidation(phoneSchema, { phone })

  return (
    <>
      <label htmlFor='phone'>Teléfono*</label>
      <input
        type='text'
        className={`form-control${
          phone.length === 0 ? '' : isValid ? ' is-valid' : ' is-invalid'
        }`}
        id='phone'
        placeholder='Teléfono'
        name='phone'
        value={phone}
        onChange={evt => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>Ingrese Teléfono</div>
    </>
  )
}

export default memo(Phone)
