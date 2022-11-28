export default function Info() {
  return (
    <div className='w-full grid lg:grid-cols-3 gap-x-6 gap-y-8 justify-center'>
      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full'>
          <h4 className='font-bold mb-2 text-xl'>Matrícula</h4>
          <p>2 Matrículas: $ 85.000.- c/u*</p>
        </div>
      </div>

      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full mb-2'>
          <h4 className='font-bold mb-2 text-xl'>Arancel</h4>
          <p>Arancel Anual de: $1.391.000*</p>
        </div>
        <p>
          <small>*(Todos los valores son referenciales 2022)</small>
        </p>
      </div>

      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full'>
          <h4 className='font-bold mb-2 text-xl'>Formas de pago Arancel</h4>
          <p>En 10 cuotas de $139.100.- c/u*</p>
        </div>
      </div>

      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full'>
          <h4 className='font-bold mb-2 text-xl'>
            Período de Postulación e Ingreso
          </h4>
          <p>Noviembre de 2022 a marzo 2023</p>
          <br className='hidden lg:block' />
        </div>
      </div>

      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full'>
          <h4 className='font-bold mb-2 text-xl'>Requisitos de Postulación</h4>
          <p>Ser mayor de 21 años</p>
          <p>Enseñanza Media completa</p>
        </div>
      </div>

      <div className='text-center flex flex-col items-center justify-start'>
        <div className='bg-slate-50 rounded-lg p-8 w-full mb-2'>
          <h4 className='font-bold mb-2 text-xl'>Procedimiento de Selección</h4>
          <p>Entrevista personal</p>
          <p>Examen de Admisión</p>
        </div>
      </div>
    </div>
  )
}
