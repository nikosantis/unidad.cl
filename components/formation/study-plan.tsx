export default function StudyPlan() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-x-6 gap-y-10 lg:gap-y-0'>
      <div className='w-full lg:w-1/3'>
        <h4 className='font-semibold mb-6 text-center lg:text-left'>
          Semestre I
        </h4>
        <ul className='list-disc list-inside text-center lg:text-left'>
          <li>Introducción al Sistema Nervioso</li>
          <li>Salud Pública</li>
          <li>Prevención Escolar</li>
          <li>Comunidad Terapéutica I</li>
        </ul>
      </div>

      <div className='w-full lg:w-1/3'>
        <h4 className='font-semibold mb-6 text-center lg:text-left'>
          Semestre II
        </h4>
        <ul className='list-disc list-inside text-center lg:text-left'>
          <li>Psicología General</li>
          <li>Psicofarmacología</li>
          <li>Prevención Laboral</li>
          <li>Comunidad Terapéutica II</li>
        </ul>
      </div>

      <div className='w-full lg:w-1/3'>
        <h4 className='font-semibold mb-6 text-center lg:text-left'>
          Semestre III y IV
        </h4>
        <ul className='list-disc list-inside text-center lg:text-left'>
          <li>Técnicas Integrativas de Rehabilitación</li>
          <li>Psicopatología</li>
          <li>Técnicas Grupales de Autoayuda</li>
          <li>Primeros Auxilios</li>
          <li>Terapia Familiar</li>
        </ul>
      </div>
    </div>
  )
}
