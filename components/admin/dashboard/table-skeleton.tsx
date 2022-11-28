export default function TableSkeleton() {
  return (
    <div className='w-full overflow-x-auto relative rounded-lg'>
      <table className='w-full table-auto'>
        <thead className='uppercase bg-slate-200 text-sm'>
          <tr>
            <th scope='col' className='py-3 px-6'>
              ID
            </th>
            <th scope='col' className='py-3 px-6'>
              Fecha
            </th>
            <th scope='col' className='py-3 px-6'>
              Nombre
            </th>
            <th scope='col' className='py-3 px-6'>
              Apellido
            </th>
            <th scope='col' className='py-3 px-6'>
              Correo Electrónico
            </th>
            <th scope='col' className='py-3 px-6'>
              Teléfono
            </th>
            <th scope='col' className='py-3 px-6'>
              Mensaje
            </th>
          </tr>
        </thead>

        <tbody>
          {[...Array(4).keys()].map((undefined, index) => {
            return (
              <tr className='bg-slate-100 border-b' key={index}>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
                <th
                  scope='row'
                  className='py-4 px-6 text-gray-900 whitespace-nowrap'
                >
                  <div className='bg-slate-700 rounded w-full h-2 animate-pulse' />
                </th>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
