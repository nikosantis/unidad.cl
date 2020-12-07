import FirstName from './form/first-name'
import LastName from './form/last-name'
import Email from './form/email'
import Phone from './form/phone'
import Comment from './form/comment'
import Submit from './form/submit'

export default function Form () {
  const handleSubmit = async (e) => {
    e.preventDefault()
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
      <style jsx>
        {`
          .contact-wrapper {
            padding: 50px 30px;
            border-radius: 5px;
            background-color: #ffffff;
          }
        `}
      </style>
    </div>
  )
}
