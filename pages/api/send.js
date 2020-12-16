import sendgrid from '@sendgrid/mail'
import dbConnect from 'utils/dbConnect'
import Contact from 'models/contact'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  const { body, method } = req
  await dbConnect()

  if (method === 'POST') {
    try {
      await Contact.create({
        first_name: body.firstName,
        last_name: body.lastName,
        phone: body.phone,
        email: body.email,
        comment: body.comment,
        form: body.form
      })

      await sendgrid.send({
        to: body.mailTo,
        cc: body.mailCc,
        from: 'hola@unidad.cl',
        subject: `${body.form} Unidad.cl`,
        text: `${body.form} Unidad.cl`,
        html: `
          <div>
            <p><b>Formulario: </b>${body.form}</p>
            <p><b>Nombre: </b>${body.firstName}</p>
            <p><b>Apellido: </b>${body.lastName}</p>
            <p><b>Correo Electrónico: </b>${body.email}</p>
            <p><b>Celular: </b>${body.phone}</p>
            <p><b>Comentario: </b>${body.comment}</p>
            <p>Mensaje enviado desde el landing <a href='https://unidad.cl/'>https://unidad.cl/</a></p>
          </div>
        `
      })
      res.status(200).json({ message: 'Mensaje enviado. Pronto nos contactaremos con usted.' })
    } catch (error) {
      res.status(error.statusCode || 500)
        .json({ error: 'Error al enviar el mensaje' })
    }
  }
}
