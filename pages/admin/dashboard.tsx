import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useEffect } from 'react'
import Router from 'next/router'

import DashboardData from 'components/admin/dashboard/data'
import Spin from 'components/spin'

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
          <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center'>
            <div className='w-[121px]' />
            <h1 className='text-xl font-bold text-white'>Admin Dashboard</h1>
            <div>
              <Link
                href='/api/auth/signout'
                onClick={e => {
                  e.preventDefault()
                  signOut()
                }}
                className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700 inline-flex items-center'
              >
                Cerrar Sesión
              </Link>
            </div>
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
    <main role='main' className='bg-slate-90'>
      <div className='w-screen h-screen flex justify-center items-center'>
        <Spin />
      </div>
    </main>
  )
}
