import { removeTokenCookie } from 'lib/auth-cookies'

export default async (req, res) => {
  const { method } = req

  if (method === 'POST') {
    try {
      removeTokenCookie(res)

      res.status(200).json({ success: true, message: 'Sesión terminada' })
    } catch (error) {
      res.status(error.statusCode || 400).json({ error: 'Error al cerrar sesión' })
    }
  }
}
