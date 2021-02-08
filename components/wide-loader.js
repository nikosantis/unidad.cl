import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Loader from 'components/loader'
import { useAuth } from 'contexts/auth-context'

export default function WideLoader ({ children }) {
  const { user, isLoading, isError } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (router.pathname === '/admin') {
      if (!isLoading && !user && isError) {
        router.push('/admin/login')
      }
    }
    if (router.pathname === '/admin/login') {
      console.log(user)
      if (!isLoading && user) {
        router.push('/admin')
      }
    }
  }, [router, isLoading, user, isError])

  if (isLoading) {
    return (
      <div className='loader'>
        <div><Loader /></div>
        <style jsx>
          {`
          .loader {
            min-height: calc(100vh - (110px - 211px));
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}
        </style>
      </div>
    )
  }

  return children
}
