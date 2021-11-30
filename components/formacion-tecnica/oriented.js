export default function Oriented() {
  return (
    <section className='oriented'>
      <div className='container'>
        <div className='row justify-content-center text-center'>
          <div className='col-lg-9 col-12'>
            <h2 className='title'>Orientado a</h2>
            <p>
              Comunidades Terapéuticas (Programas ambulatorios o residenciales)
            </p>
            <p>
              Instituciones de Salud (Programas ambulatorios o residenciales)
            </p>
            <p>Personal de Educación y Colegios</p>
            <p>
              Empresas Públicas y Privadas (Funcionarios de Personal y
              Bienestar)
            </p>
            <p>Voluntarios de Instituciones</p>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .oriented {
            padding: 90px 0;
            background-color: #f8f9fa;
          }

          .title {
            margin-bottom: 30px;
            color: var(--ns-blue);
            font-size: 2rem;
          }
        `}
      </style>
    </section>
  )
}
