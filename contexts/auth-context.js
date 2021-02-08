import { createContext, useContext } from 'react'
import useSWR from 'swr'

const AuthContext = createContext()
const fetcher = async (...args) => {
  const res = await fetch(...args)

  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }

  return res.json()
}

const AuthProvider = (props) => {
  const { data, error } = useSWR('api/auth', fetcher, {
    revalidateOnFocus: false,
    shouldRetryOnError: false
  })

  return (
    <AuthContext.Provider
      value={{
        user: data,
        isLoading: !error && !data,
        isError: error
      }} {...props}
    />
  )
}

function useAuth () {
  const context = useContext(AuthContext)
  if (typeof context === 'undefined') {
    throw new Error('useAuth must be used within a FormProvider')
  }
  return context
}

export { AuthProvider, useAuth }
