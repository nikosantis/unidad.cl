import Link from 'next/link'

export default function FormacionTecnica () {
  return (
    <section className='formacion-tecnica'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-9 text-center'>
            <h5>Programa de Formación Técnica</h5>
            <h3>Técnico en Prevención y Rehabilitación de Personas con Dependencia a Drogas</h3>
            <Link href='/formacion-tecnica'>
              <a className='btn btn-orange'>Más Información</a>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .formacion-tecnica {
            padding: 90px 0;
            background-color: var(--ns-bg-secondary);
            position: relative;
            min-height: 100vh;
            @media (min-width: 768px) {
              min-height: 0;
            }
            @media (min-width: 992px) {
              min-height: 0;
            }
          }
          h5 {
            color: #3e3b3b;
            font-weight: 300;
            text-transform: uppercase;
            font-size: 1.2rem;
            position: relative;
            z-index: 2;
          }
          h3 {
            color: var(--ns-blue);
            text-transform: uppercase;
            font-weight: 600;
            font-size: 1.5rem;
            position: relative;
            z-index: 2;
            margin-bottom: 30px;
            @media (min-width: 768px) {
              font-size: 2rem;
            }
          }
          .btn-orange {
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
