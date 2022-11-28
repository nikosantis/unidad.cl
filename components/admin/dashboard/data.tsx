import { Contact } from '@prisma/client'
import useSWR, { Fetcher } from 'swr'
import Table from './table'
import TableSkeleton from './table-skeleton'

const fetcher: Fetcher<
  {
    message: string
    forms: Contact[]
  },
  string
> = (...args) => fetch(...args).then(res => res.json())

export default function DashboardData() {
  const { data, error } = useSWR('/api/forms', fetcher)
  console.log('🚀 ~ file: data.tsx ~ line 9 ~ DashboardData ~ {data, error}', {
    data,
    error
  })

  if (data && data.forms && !error) {
    return <Table data={data.forms} />
  }
  return <TableSkeleton />
}
