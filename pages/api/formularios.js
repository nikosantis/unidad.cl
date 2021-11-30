import dbConnect from 'utils/dbConnect'
import Contact from 'models/contact'

export default async function handler(req, res) {
  const { method } = req

  if (method === 'GET') {
    try {
      await dbConnect()
      const forms = await Contact.find({}).sort({ date: 'desc' })

      if (!forms) {
        return res.status(400).json({ error: 'Ha ocurrido un error' })
      }
      res.status(200).json(forms)
    } catch (error) {
      res
        .status(error.statusCode || 400)
        .json({ error: 'Ha ocurrido un error' })
    }
  }
}
