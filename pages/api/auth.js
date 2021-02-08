import dbConnect from 'utils/dbConnect'
import { getLoginSession } from '../../lib/auth'
import User from 'models/user'

export default async (req, res) => {
  const { method } = req

  if (method === 'GET') {
    try {
      await dbConnect()
      const session = await getLoginSession(req)
      if (!session) {
        return res.status(401).json({ error: 'Se debe iniciar sesión' })
      }

      const user = await User.findById(session.id)

      if (!user) {
        return res.status(401).json({ error: 'Error al iniciar sesión' })
      }

      const filteredUser = {
        username: user.username,
        id: user._id
      }

      res.status(200).json(filteredUser)
    } catch (error) {
      res.status(error.statusCode || 400).json({ error: 'Error al iniciar sesión' })
    }
  }
}
