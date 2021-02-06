import PlanItem from 'components/formacion-tecnica/plan-item'

export default function Plan () {
  return (
    <section className='plan'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 text-center modules-title'>
            <h2 className='title'>Plan General de Estudios</h2>
            <h3 className='subtitle'>Actividades</h3>
          </div>
        </div>

        <div className='row'>
          <div className='col-12 col-md-4 col-lg-4'>
            <PlanItem
              title='Semestre I'
            >
              <ul className='plan-list'>
                <li>Introducción al Sistema Nervioso</li>
                <li>Salud Pública</li>
                <li>Prevención en Drogas en el ámbito escolar</li>
                <li>Comunidad Terapéutica I</li>
                <li>Trabajos Grupales de Observación e Investigación</li>
              </ul>
            </PlanItem>
          </div>
          <div className='col-12 col-md-4 col-lg-4'>
            <PlanItem
              title='Semestre II'
            >
              <ul className='plan-list'>
                <li>Psicología General</li>
                <li>Psicofarmacología</li>
                <li>Prevención en Drogas en el ámbito escolar</li>
                <li>Comunidad Terapéutica I</li>
                <li>Trabajos Grupales de Observación e Investigación</li>
              </ul>
            </PlanItem>
          </div>
          <div className='col-12 col-md-4 col-lg-4'>
            <PlanItem
              title='Semestre III y IV'
            >
              <ul className='plan-list'>
                <li>Técnicas Integrativas de Rehabilitación</li>
                <li>Psicopatología y Técnicas de Terapia en Adicciones</li>
                <li>Reuniones Clínicas</li>
                <li>Neurociencias</li>
                <li>Terapia Familiar</li>
              </ul>
            </PlanItem>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .plan {
            padding: 120px 0;
            background-color: #ffffff;
          }
          .title {
            margin-bottom: 30px;
          }
          .subtitle {
            margin-bottom: 50px;
          }

          .pre-title {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1rem;
          }

          .title {
            color: var(--ns-blue);
            font-size: 2rem;
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
              opacity: .5;
              cursor: not-allowed;
            }
          }
        `}
      </style>
    </section>
  )
}
