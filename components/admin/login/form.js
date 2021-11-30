import { useState, useCallback } from 'react'
import { useRouter } from 'next/router'
import Button from 'components/button'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('')
  const router = useRouter()

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault()

      try {
        setLoading(true)
        const config = {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            username,
            password
          })
        }
        const res = await fetch('/api/login', config)

        if (!res.ok) {
          setError('Error al iniciar sesión')
          setLoading(false)
        }

        const data = await res.json()
        if (data.success) {
          router.push('/admin')
        }
      } catch (error) {
        setLoading(false)
        setError(error.message)
      }
    },
    [username, password, router]
  )

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-row'>
        <div className='form-group col-12'>
          <label htmlFor='username'>Nombre de usuario</label>
          <input
            type='text'
            className='form-control'
            id='username'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group col-12'>
          <label htmlFor='password'>Contraseña</label>
          <input
            type='password'
            className='form-control'
            id='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
      </div>
      <Button
        type='submit'
        className='btn btn-primary mb-2'
        loading={loading}
        disabled={loading}
      >
        Iniciar Sesión
      </Button>
      {error && (
        <div className='alert alert-danger' role='alert'>
          {error}
        </div>
      )}
    </form>
  )
}
