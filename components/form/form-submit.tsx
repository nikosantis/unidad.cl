import {
  useCallback,
  useState,
  useRef,
  createContext,
  ReactNode,
  SyntheticEvent,
  useContext
} from 'react'

import { formSchema } from 'lib/schemas/contact-form-schema'
import { pushEvent } from 'lib/gtm'

interface FormContext {
  isFormValid: boolean
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  errorMsg: string | null
}

const FormContext = createContext<FormContext>({} as FormContext)

type FormValue = {
  value: string
}

type FormTypes = {
  firstname: FormValue
  lastname: FormValue
  email: FormValue
  phone: FormValue
  comments: FormValue
}

type FormSubmitProps = {
  children: ReactNode
  form: string
}

export default function FormSubmit({ children, form }: FormSubmitProps) {
  const [isFormValid, setFormValid] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [isSuccess, setSuccess] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setError] = useState<string | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const handleInput = useCallback(async () => {
    if (formRef.current) {
      const elements = formRef.current.elements
      const formElements = {
        firstname: (elements.namedItem('firstname') as HTMLInputElement).value,
        lastname: (elements.namedItem('lastname') as HTMLInputElement).value,
        email: (elements.namedItem('email') as HTMLInputElement).value,
        phone: (elements.namedItem('phone') as HTMLInputElement).value,
        comments: (elements.namedItem('comments') as HTMLTextAreaElement).value,
        form
      }
      try {
        const { success } = await formSchema.safeParseAsync(formElements)
        setFormValid(success)
      } catch (err) {}
    }
  }, [form])

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      const targets = e.target as typeof e.target & FormTypes
      try {
        setError(null)
        setSuccess(false)
        setIsError(false)
        setLoading(true)
        const response = await fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            firstname: targets.firstname.value,
            lastname: targets.lastname.value,
            email: targets.email.value,
            phone: targets.phone.value,
            comments: targets.comments.value,
            form: `Formulario ${form}`
          })
        })
        const resJson = await response.json()
        if (response.ok && resJson) {
          setSuccess(true)
          setLoading(false)
          pushEvent('submitOk', {
            form: `Formulario ${form}`
          })
        } else {
          setLoading(false)
          setError('Error al intentar enviar el formulario')
        }
      } catch (err) {
        setIsError(true)
        setLoading(false)
        setError('Error al intentar enviar el formulario')
      }
    },
    [form]
  )

  return (
    <form
      onSubmit={handleSubmit}
      onInput={handleInput}
      id='contact-form'
      ref={formRef}
      className='transition-all'
    >
      <FormContext.Provider
        value={{ isFormValid, isLoading, errorMsg, isSuccess, isError }}
      >
        {children}
      </FormContext.Provider>
    </form>
  )
}

export function useFormContext() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormSubmit')
  }
  return context
}
