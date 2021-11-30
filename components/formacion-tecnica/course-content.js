export default function CourseContent() {
  return (
    <section className='plan'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center modules-title'>
            <h2 className='title'>Contenidos</h2>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-lg-4'>
            <ul className='plan-list'>
              <li>Desarrollo psicológico normal</li>
              <li>
                Drogas: características, manifestaciones sociales y ambientales
              </li>
              <li>Manifestaciones clínicas en personas dependientes</li>
              <li>Enfermedades físicas y mentales asociadas</li>
            </ul>
          </div>
          <div className='col-12 col-lg-4'>
            <ul className='plan-list'>
              <li>Legislación sobre drogas</li>
              <li>Prevención en la empresa</li>
              <li>Manejo de grupos de autoayuda emocional</li>
            </ul>
          </div>
          <div className='col-12 col-lg-4'>
            <ul className='plan-list'>
              <li>Proceso de rehabilitación</li>
              <li>Autocuidado de la salud</li>
              <li>
                Manejo de técnicas de rehabilitación individual, grupal y
                familiar
              </li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .plan {
            padding: 120px 0;
            background-color: #fff;
          }
          .title {
            margin-bottom: 50px;
            color: var(--ns-blue);
            font-size: 2rem;
          }

          .pre-title {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1rem;
          }

          .plan-list {
            padding-left: 25px;

            li {
              font-size: 0.875rem;
            }
          }

          .btn-usach {
            color: #fff;
            background-color: var(--ns-orange);
            border-color: var(--ns-orange);
            transition: all 0.2s ease;

            &:hover {
              background-color: var(--ns-orange-hover);
              border-color: var(--ns-orange-hover);
            }

            &:disabled {
              color: #fff;
              opacity: 0.5;
              cursor: not-allowed;
            }
          }
        `}
      </style>
    </section>
  )
}
