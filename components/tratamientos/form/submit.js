import { useState, useEffect } from 'react'
import { contactSchema } from 'validations/contact.validation'
import { useFormState } from 'contexts/form-context'
import Button from 'components/button'

export default function Submit () {
  const { firstName, lastName, email, phone, loading } = useFormState()
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const validate = contactSchema.isValidSync({ firstName, lastName, email, phone })
    if (validate) {
      setIsValid(validate)
    }
  }, [firstName, lastName, email, phone])

  return (
    <Button type='submit' disabled={!isValid} loading={loading}>
      Enviar
    </Button>
  )
}
