import { useMemo } from 'react'
import useSWR from 'swr'
import { CSVLink } from 'react-csv'
import { DateTime } from 'luxon'
import Table from './table'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Formularios () {
  const { data } = useSWR('api/formularios', fetcher)

  const columns = useMemo(
    () => [
      {
        Header: 'Formularios',
        columns: [
          {
            Header: 'Nombre',
            accessor: 'first_name'
          },
          {
            Header: 'Apellido',
            accessor: 'last_name'
          },
          {
            Header: 'Teléfono',
            accessor: 'phone'
          },
          {
            Header: 'Email',
            accessor: 'email'
          },
          {
            Header: 'Comentario',
            accessor: 'comment'
          },
          {
            Header: 'Fecha',
            accessor: 'date',
            Cell: ({ value }) =>
              DateTime.fromISO(value).toLocaleString(
                DateTime.DATETIME_SHORT_WITH_SECONDS
              )
          },
          {
            Header: 'Formulario',
            accessor: 'form'
          }
        ]
      }
    ],
    []
  )
  if (!data) return <div>loading...</div>

  return (
    <div className='formularios'>
      <div className='download'>
        <CSVLink data={data} className='btn btn-primary'>
          Descargar Lista
        </CSVLink>
      </div>
      <Table data={data} columns={columns} />

      <style jsx>
        {`
          .download {
            display: flex;
            width: 100%;
            justify-content: flex-end;
            margin-bottom: 35px;
          }
        `}
      </style>
    </div>
  )
}
