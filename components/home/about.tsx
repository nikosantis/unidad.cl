import Us from 'components/us'

export default function About() {
  return (
    <section className='py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
        <div className='w-full lg:w-7/12 text-center mb-12'>
          <h2 className='text-4xl mb-6 font-semibold'>Quiénes somos</h2>
          <p>
            Grupo de profesionales de la Facultad de Ciencias Médicas de la
            Universidad de Santiago dedicados a la Investigación y Docencia en
            Abuso de Alcohol y Drogas
          </p>
        </div>

        <Us />
      </div>
    </section>
  )
}
