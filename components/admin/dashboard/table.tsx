import { Contact } from '@prisma/client'

type TableProps = {
  data: Contact[]
}

export default function Table({ data }: TableProps) {
  return (
    <div className='w-full overflow-x-auto relative rounded-lg'>
      <table className='w-full table-auto'>
        <thead className='uppercase bg-slate-200'>
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
          {data &&
            data.map(contact => {
              return (
                <tr className='bg-slate-100 border-b' key={contact.id}>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.id}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {new Date(contact.createdAt).toLocaleDateString('es-CL')}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.first_name}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.last_name}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.email}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.phone}
                  </th>
                  <th
                    scope='row'
                    className='py-4 px-6 text-gray-900 whitespace-nowrap'
                  >
                    {contact.comment}
                  </th>
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}
