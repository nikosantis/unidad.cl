import { useSession, signIn } from 'next-auth/react'

import Spin from 'components/spin'
import { useEffect } from 'react'
import Router from 'next/router'

export default function AdminIndexPage() {
  const { status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      Router.push('/admin/dashboard')
    }
  }, [status])

  if (status === 'unauthenticated') {
    return (
      <main role='main'>
        <div className='w-screen h-screen flex justify-center items-center bg-slate-900'>
          <div className='w-3/12 bg-slate-50 rounded-lg p-6 text-center'>
            <h1 className='text-xl font-bold mb-4 text-white'>
              Unidad.cl Admin
            </h1>
            {/* <a
              href='/api/auth/signin'
              onClick={e => {
                e.preventDefault()
                signIn()
              }}
              className='py-2 px-3 bg-u-orange-primary-500 text-white select-none rounded font-medium text-center hover:bg-u-orange-primary-700 inline-flex items-center'
            >
              Iniciar Sesión
            </a> */}
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
