export default function Contents() {
  return (
    <div className='w-full flex flex-col lg:flex-row gap-x-6 gap-y-10 lg:gap-y-0'>
      <div className='w-full lg:w-1/3 px-4 lg:px-0'>
        <ul className='list-disc list-outside'>
          <li>Desarrollo psicológico normal</li>
          <li>
            Drogas: características, manifestaciones sociales y ambientales
          </li>
          <li>Manifestaciones clínicas en personas dependientes</li>
          <li>Enfermedades físicas y mentales asociadas</li>
        </ul>
      </div>

      <div className='w-full lg:w-1/3 px-4 lg:px-0'>
        <ul className='list-disc list-outside'>
          <li>Legislación sobre drogas</li>
          <li>Prevención en la empresa</li>
          <li>Manejo de grupos de autoayuda emocional</li>
        </ul>
      </div>

      <div className='w-full lg:w-1/3 px-4 lg:px-0'>
        <ul className='list-disc list-outside'>
          <li>Proceso de rehabilitación</li>
          <li>Autocuidado de la salud</li>
          <li>
            Manejo de técnicas de rehabilitación individual, grupal y familiar
          </li>
        </ul>
      </div>
    </div>
  )
}
