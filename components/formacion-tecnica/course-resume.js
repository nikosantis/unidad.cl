import { FiEdit, FiClock, FiCalendar } from 'react-icons/fi'
import { MdLaptopMac } from 'react-icons/md'

export default function CourseResume () {
  return (
    <section className='course-resume'>
      <div className='container'>
        <div className='row mt-5 justify-content-center'>
          <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
            <div className='box'>
              <div className='box-icon'>
                <div className='icon'>
                  <FiEdit fontSize='30' color='#fff' />
                </div>
              </div>
              <div className='box-title'>
                <h3>Duración</h3>
              </div>

              <div className='box-text'>
                2 años / 4 Semestres
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
            <div className='box'>
              <div className='box-icon'>
                <div className='icon'>
                  <FiClock fontSize='30' color='#fff' />
                </div>
              </div>
              <div className='box-title'>
                <h3>Horario de Clases</h3>
              </div>

              <div className='box-text'>
                Martes y Jueves de 18:00 a 21:00 horas
                <br />
                Actividades prácticas dispuestas por la Dirección del programa
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
            <div className='box'>
              <div className='box-icon'>
                <div className='icon'>
                  <MdLaptopMac fontSize='30' color='#fff' />
                </div>
              </div>
              <div className='box-title'>
                <h3>Modalidad</h3>
              </div>

              <div className='box-text'>
                100% Online
              </div>
            </div>
          </div>

          <div className='col-lg-3 col-md-3 col-10 mb-5 mb-lg-0'>
            <div className='box'>
              <div className='box-icon'>
                <div className='icon'>
                  <FiCalendar fontSize='30' color='#fff' />
                </div>
              </div>
              <div className='box-title'>
                <h3>Inicio de Clases</h3>
              </div>

              <div className='box-text'>
                Marzo 2021
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .course-resume {
            padding: 120px 0;
            background-color: #f8f9fa;
          }
          .box {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }

          .box-icon {
            display: flex;
            justify-content: center;
            margin-bottom: 15px;
          }

          .icon {
            padding: 15px;
            background-color: var(--ns-orange);
            border-radius: 50%;
          }

          .box-title {
            text-align: center;
            margin-bottom: 15px;

            h3 {
              font-size: 1.2rem;
            }
          }

          .box-text {
            font-size: 1rem;
            text-align: center;
          }
        `}
      </style>
    </section>
  )
}
