import { useFormState, useFormDispatch } from 'contexts/form-context'
import { createEvent } from 'lib/tagmanager'
import FirstName from './form/first-name'
import LastName from './form/last-name'
import Email from './form/email'
import Phone from './form/phone'
import Comment from './form/comment'
import Submit from './form/submit'

export default function Form() {
  const state = useFormState()
  const { setValue, reset } = useFormDispatch()

  const handleSubmit = async e => {
    e.preventDefault()
    setValue('error', '')
    setValue('msg', '')
    setValue('loading', true)

    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: state.firstName,
        lastName: state.lastName,
        phone: state.phone,
        email: state.email,
        comment: state.comment,
        form: 'Formulario Contacto Inicio',
        mailTo: 'melissa.diaz@usach.cl',
        mailCc: 'tamara.silva@usach.cl'
      })
    })
    const text = await res.json()

    if (res.status === 200) {
      setValue('loading', false)
      reset()
      createEvent({
        event: 'submitOk',
        form: 'Formulario Contacto Inicio'
      })
      setValue('msg', text.message)
    } else {
      setValue('loading', false)
      setValue('error', text.error)
    }
  }

  return (
    <div className='contact-wrapper'>
      <form onSubmit={handleSubmit}>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <FirstName />
          </div>
          <div className='form-group col-md-6'>
            <LastName />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <Email />
          </div>
          <div className='form-group col-md-6'>
            <Phone />
          </div>
        </div>
        <div className='form-row'>
          <div className='form-group col-md-12'>
            <Comment />
          </div>
        </div>
        <Submit />
      </form>
      {state.msg && (
        <div className='alert alert-success' role='alert'>
          {state.msg}
        </div>
      )}
      {state.error && (
        <div className='alert alert-danger' role='alert'>
          {state.error}
        </div>
      )}
      <style jsx>
        {`
          .contact-wrapper {
            background-color: #f8f9fa;
            padding: 50px 30px;
            border-radius: 5px;
          }
        `}
      </style>
    </div>
  )
}
