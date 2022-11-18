import { FiEdit, FiClock, FiCalendar } from 'react-icons/fi'
import { MdLaptopMac } from 'react-icons/md'

import ContentBox from 'components/content-box'

export default function Content() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-x-6 gap-y-10 lg:gap-y-0'>
      <div className='w-full lg:w-1/4'>
        <ContentBox Icon={FiEdit} title='Duración'>
          2 años / 4 Semestres
        </ContentBox>
      </div>

      <div className='w-full lg:w-1/4'>
        <ContentBox Icon={FiClock} title='Horario de Clases'>
          <p>Martes y Jueves de 18:00 a 21:00 horas</p>
          <p>Actividades prácticas dispuestas por la Dirección del programa</p>
        </ContentBox>
      </div>

      <div className='w-full lg:w-1/4'>
        <ContentBox Icon={MdLaptopMac} title='Modalidad'>
          100% Online
        </ContentBox>
      </div>

      <div className='w-full lg:w-1/4'>
        <ContentBox
          Icon={FiCalendar}
          title='Inicio de Clases
'
        >
          Abril 2023
        </ContentBox>
      </div>
    </div>
  )
}
