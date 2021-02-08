import { hashSync, compareSync } from 'bcrypt'
import dbConnect from 'utils/dbConnect'
import User from 'models/user'

function encryptPassword (password) {
  return hashSync(password, 10)
}

export default async (req, res) => {
  const { body, method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      const encryptedPassword = encryptPassword(body.password)
      if (!encryptedPassword) {
        return res.status(400).json({ error: 'Error al crear un nuevo usuario' })
      }
      const newUser = await User.create({
        username: body.username,
        password: encryptedPassword
      })

      if (!newUser) {
        return res.status(400).json({ error: 'Error al crear un nuevo usuario' })
      }
      res.status(201).json({ success: true, message: `Se ha creado el usuario ${newUser.username}` })
    } catch (error) {
      res.status(error.statusCode || 400).json({ error: 'Error al crear un nuevo usuario' })
    }
  }
}
