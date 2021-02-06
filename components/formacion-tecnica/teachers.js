export default function Teachers () {
  return (
    <section className='teachers'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center modules-title'>
            <h2 className='title'>Profesores</h2>
          </div>
        </div>

        <div className='row justify-content-center'>
          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Prof. Dr. Humberto Guajardo Sáinz</h4>
                </div>
                <div className='sub'>
                  <p>Médico Psiquiatra. Director de Postgrado de la Facultad de Ciencias Médicas de la Universidad de Santiago.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Salud Pública:</h4>
                </div>
                <div className='sub'>
                  <p><b>Dr. Juan Salinas Véliz</b></p>
                  <p>Médico Psiquiatra. Magíster en Salud Pública con mención en Salud Mental.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Prevención en el Ámbito Escolar y Laboral:</h4>
                </div>
                <div className='sub'>
                  <p><b>Sr. René Donoso</b></p>
                  <p>Profesor de Estado. Jefe Depto. Extraescolar y Programas Formativos Complementarios del Ministerio de Educación.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Neurofisiología:</h4>
                </div>
                <div className='sub'>
                  <p><b>Sra. Nury Herdocio Peralta</b></p>
                  <p>Dra. en Ciencias Biológicas de la Universidad de Barcelona, España.</p>
                  <p><b>Sr. Juan Echegaray Taborga</b></p>
                  <p>Dr. en Ciencias Biológicas de la Universidad Autónoma de Barcelona, España.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Psicología General y Técnicas Integrativas de Rehabilitación:</h4>
                </div>
                <div className='sub'>
                  <p><b>Sr. Javier Guajardo Godoy</b></p>
                  <p>Psicólogo, Magister en Psicología Clínica, mención psicoterapia integrativa, Universidad Adolfo Ibáñez. Director Centro de Adolescentes CIAD.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Comunidad Terapéutica:</h4>
                </div>
                <div className='sub'>
                  <p><b>Sra. Paola González Recart</b></p>
                  <p>Psicóloga y Magister en Psicología Clínica mención Terapia Sistémica Familiar de pareja e individuo, Universidad de Los Andes.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Psicopatología y Técnicas de Terapia en Adicciones:</h4>
                </div>
                <div className='sub'>
                  <p><b>Prof. Dr. Humberto Guajardo Sáinz</b></p>
                  <p>Médico Psiquiatra. Director de Postgrado de la Facultad de Ciencias Médicas de la Universidad de Santiago.</p>
                  <p><b>Ps. Diana Kushner Lanis</b></p>
                  <p>Psicóloga. Magister en Psicoterapia Cognitiva Posracionaliesta, USACH, Profesora en Prevención y Rehabilitación de Drogas de la Facultad de Ciencias Médicas de la Universidad de Santiago.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='col-12 col-md-6 col-lg-4'>
            <div className='teacher-box'>
              <div className='teacher-content'>
                <div className='name'>
                  <h4>Coordinadora Académica:</h4>
                </div>
                <div className='sub'>
                  <p><b>Sra. Melissa Diaz Cruz</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .teachers {
            padding: 120px 0;
            background-color: #f8f9fa;
          }

          .title {
            margin-bottom: 50px;
            color: var(--ns-blue);
            font-size: 2rem;
          }
          .quote-left {
            margin-bottom: 25px;
            display: flex;
          }

          .quote-right {
            margin-top: 25px;
            display: flex;
            justify-content: flex-end;
          }

          p {
            text-align: center;

            @media (min-width: 992px) {
              font-size: 1.2rem;
            }
          }

          .teacher-box {
            display: flex;
            justify-content: center;
            flex-direction: column;
            padding: 0 30px;
            margin-bottom: 60px;
          }

          .teacher-content {
            display: flex;
            justify-content: center;
            flex-direction: column;
            text-align: center;
          }

          .name {
            h4 {
              font-size: 1.125rem;
            }
          }

          .sub {
            p {
              font-size: 1rem;
              margin-bottom: 5px;
            }
          }
        `}
      </style>
    </section>
  )
}
