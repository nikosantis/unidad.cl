import { compareSync } from 'bcrypt'
import dbConnect from 'utils/dbConnect'
import User from 'models/user'
import { setLoginSession } from '../../lib/auth'

export default async (req, res) => {
  const { body, method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const user = await User.findOne({
        username: body.username
      })
      if (!user) {
        return res.status(400).json({ error: 'El usuario no existe' })
      }

      const isPasswordValid = compareSync(body.password, user.password)

      if (!isPasswordValid) {
        return res.status(400).json({ error: 'El usuario no existe o el password es incorrecto' })
      }
      const session = {
        id: user.id,
        username: user.username
      }

      await setLoginSession(res, session)

      res.status(200).json({ success: true, message: 'Inicio de sesión satisfactorio.' })
    } catch (error) {
      console.log(error.message)
      res.status(error.statusCode || 400).json({ error: 'Error al iniciar sesión' })
    }
  }
}
