import { useSession } from 'next-auth/react'

import Spin from 'components/spin'
import { useEffect } from 'react'
import Router from 'next/router'
import DashboardData from 'components/admin/dashboard/data'

export default function AdminDashboardPage() {
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.push('/admin')
    }
  }, [status])

  if (status === 'authenticated' && session) {
    return (
      <main role='main' className='bg-slate-900 w-full min-h-screen'>
        <header className='py-4 border-b-[0.5px] border-slate-700'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <h1 className='text-xl font-bold text-white'>Admin Dashboard</h1>
          </div>
        </header>
        <div className='w-full flex justify-center items-center py-16'>
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center'>
            <DashboardData />
          </div>
        </div>
      </main>
    )
  }
  return (
    <main role='main'>
      <div className='w-screen h-screen flex justify-center items-center bg-slate-900'>
        <Spin />
      </div>
    </main>
  )
}
