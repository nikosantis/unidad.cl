import { useState, useEffect } from 'react'

export function useValidation (schema, value) {
  const [isValid, setIsValid] = useState(false)

  useEffect(() => {
    const validate = schema.isValidSync(value)
    if (validate) {
      setIsValid(validate)
    }
  }, [schema, value])

  return isValid
}
