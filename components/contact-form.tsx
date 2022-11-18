import Firstname from './form/firstname'
import Lastname from './form/lastname'
import Email from './form/email'
import Phone from './form/phone'
import Comments from './form/comments'
import SubmitButton from './form/submit-button'
import FormSubmit from './form/form-submit'
import Alert from './form/alert'

type ContactFormProps = {
  form: string
}

export default function ContactForm({ form }: ContactFormProps) {
  return (
    <FormSubmit form={form}>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-6/12 block lg:pr-3 mb-1'>
          <Firstname />
        </div>

        <div className='w-full lg:w-6/12 block lg:pl-3 mb-1'>
          <Lastname />
        </div>

        <div className='w-full lg:w-6/12 block lg:pr-3 mb-1'>
          <Email />
        </div>

        <div className='w-full lg:w-6/12 block lg:pl-3 mb-1'>
          <Phone />
        </div>

        <div className='w-full mb-4'>
          <Comments />
        </div>

        <div className='w-full'>
          <SubmitButton />
        </div>

        <Alert />
      </div>
    </FormSubmit>
  )
}
