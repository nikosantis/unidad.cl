import Avatar from './avatar'
import avatar1 from 'public/images/humberto-guajardo.png'
import avatar2 from 'public/images/diana-kushner.png'
import avatar3 from 'public/images/felipe-lecannelier.png'
import avatar4 from 'public/images/javier-guajardo.png'

export default function Us() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-y-8 gap-x-6'>
      <div className='w-full lg:w-3/12'>
        <Avatar
          src={avatar1}
          name='Prof. Dr. Humberto Guajardo Sáinz'
          title='Director'
          content='Médico Psiquiatra. Director de Postgrado de la Facultad de
                Ciencias Médicas de la Universidad de Santiago. Prof. Titular de
                Psiquiatría Facultad de Ciencias Médicas USACH'
        />
      </div>

      <div className='w-full lg:w-3/12'>
        <Avatar
          src={avatar2}
          name='Sra. Diana Kushner Lanis'
          content='Psicóloga Magister en Psicoterapia Cognitiva Postracionalista, USACH., Antropóloga social. Profesora en Prevención y Rehabilitación de Drogas de la Facultad de Ciencias Médicas de la Universidad de Santiago'
        />
      </div>

      <div className='w-full lg:w-3/12'>
        <Avatar
          src={avatar3}
          name='Sr. Felipe Lecannelier Acevedo'
          content='Dr. en Psicología Universidad Autónoma de Madrid - España'
        />
      </div>

      <div className='w-full lg:w-3/12'>
        <Avatar
          src={avatar4}
          name='Sr. Javier Guajardo'
          content='Psicólogo, Magister en Psicología Clínica, mención psicoterapia integrativa, Universidad Adolfo Ibáñez. Director Centro de Adolescentes CIAD'
        />
      </div>
    </div>
  )
}
