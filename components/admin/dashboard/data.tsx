import { Contact } from '@prisma/client'

import useSWR, { Fetcher } from 'swr'
import {
  createColumnHelper,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel
} from '@tanstack/react-table'

import Table from './table'
import TableSkeleton from './table-skeleton'
import clsx from 'clsx'
import { CSVLink } from 'react-csv'

export type FetchData = {
  forms: Contact[]
  total: number
}

const columnHelper = createColumnHelper<Contact>()

const columns = [
  columnHelper.accessor('id', {
    cell: info => info.getValue(),
    header: 'ID'
  }),
  columnHelper.accessor('createdAt', {
    cell: info => new Date(info.getValue()).toLocaleDateString('es-CL'),
    header: 'Fecha'
  }),
  columnHelper.accessor('form', {
    cell: info => info.getValue(),
    header: 'Formulario'
  }),
  columnHelper.accessor('first_name', {
    cell: info => info.getValue(),
    header: 'Nombre'
  }),
  columnHelper.accessor('last_name', {
    cell: info => info.getValue(),
    header: 'Apellido'
  }),
  columnHelper.accessor('email', {
    cell: info => info.getValue(),
    header: 'Correo Electrónico'
  }),
  columnHelper.accessor('phone', {
    cell: info => info.getValue(),
    header: 'Teléfono'
  }),
  columnHelper.accessor('comment', {
    cell: info => info.getValue(),
    header: 'Mensaje'
  })
]

const fetcher: Fetcher<FetchData, string> = (...args) =>
  fetch(...args).then(res => res.json())

export default function DashboardData() {
  const { data, error } = useSWR('/api/forms', fetcher, {
    revalidateOnFocus: false
  })

  const table = useReactTable({
    data: data && !!data.forms.length ? data.forms : [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel()
  })

  if (data && !!data.forms.length && !error) {
    return (
      <>
        {data && !!data.forms.length && (
          <div className='w-full flex justify-end mb-6'>
            <CSVLink
              data={data.forms}
              className={clsx(
                'py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center transition-all hover:bg-u-orange-primary-700',
                'disabled:cursor-not-allowed disabled:select-none disabled:bg-u-orange-primary-500/40 disabled:pointer-events-none',
                'inline-flex'
              )}
              filename={`base-de-datos-${new Date().toLocaleDateString(
                'es-CL'
              )}.csv`}
            >
              Descargar Lista
            </CSVLink>
          </div>
        )}
        <Table table={table} />
      </>
    )
  }
  return (
    <>
      <TableSkeleton />
    </>
  )
}
