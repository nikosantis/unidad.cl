import { memo } from 'react'
import { firstNameSchema } from 'validations/contact.validation'
import { useFormState, useFormDispatch } from 'contexts/form-context'
import { useValidation } from 'hooks/use-validation'

function FirstName() {
  const { firstName } = useFormState()
  const { setValue } = useFormDispatch()
  const isValid = useValidation(firstNameSchema, { firstName })

  return (
    <>
      <label htmlFor='firstName'>Nombre*</label>
      <input
        type='text'
        className={`form-control${
          firstName.length === 0 ? '' : isValid ? ' is-valid' : ' is-invalid'
        }`}
        id='firstName'
        placeholder='Nombre'
        name='firstName'
        value={firstName}
        onChange={evt => setValue(evt.target.name, evt.target.value)}
      />
      <div className='invalid-feedback'>Ingrese Nombre</div>
    </>
  )
}

export default memo(FirstName)
