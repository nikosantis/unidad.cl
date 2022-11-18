import { FaRegEnvelope, FaMobileAlt } from 'react-icons/fa'

type ContactItemProps = {
  name: string
  email: string
  phone?: string
}

export default function ContactItem({ name, email, phone }: ContactItemProps) {
  return (
    <div className='mb-6'>
      <p className='mb-4 text-center lg:text-left'>
        <strong>{name}</strong>
      </p>

      <div className='flex mb-2 justify-center lg:justify-start'>
        <div className='flex justify-center items-center mr-2'>
          <FaRegEnvelope />
        </div>
        <div className='flex justify-center items-center'>
          <a
            href={`mailto:${email}`}
            className='hover:text-u-orange-primary-500'
          >
            {email}
          </a>
        </div>
      </div>

      {phone && (
        <div className='flex mb-2 justify-center lg:justify-start'>
          <div className='flex justify-center items-center mr-2'>
            <FaMobileAlt />
          </div>
          <div className='flex justify-center items-center'>
            <a
              href={`tel:${phone}`}
              className='hover:text-u-orange-primary-500'
            >
              {phone}
            </a>
          </div>
        </div>
      )}
    </div>
  )
}
