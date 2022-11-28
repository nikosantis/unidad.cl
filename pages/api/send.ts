import type { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'

import prisma from 'lib/prisma'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const mailFrom = 'unidadclusach@gmail.com'
const mailTo = 'claudia.miranda.z@usach.cl'

type BodyType = {
  form: string
  firstname: string
  lastname: string
  email: string
  phone: string
  comments: string
}

type Data =
  | {
      error: string
    }
  | {
      message: string
    }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  const body = req.body as BodyType
  try {
    await prisma.contact.create({
      data: {
        first_name: body.firstname,
        last_name: body.lastname,
        phone: body.phone,
        email: body.email,
        form: body.form,
        comment: body.comments
      }
    })
    const result = await sendgrid.send({
      to: mailTo,
      from: mailFrom,
      templateId: 'd-ac3313fa082f4d8b92e1fa3449d2e181',
      dynamicTemplateData: {
        formName: body.form,
        firstname: body.firstname,
        lastname: body.lastname,
        email: body.email,
        phone: body.phone,
        message: body.comments
      }
    })
    if (result && result[0]) {
      return res.status(200).json({
        message: 'Message sent'
      })
    } else {
      return res.status(400).json({
        message: 'Error sending the message'
      })
    }
  } catch (err) {
    const error = err as Error
    console.error(error)
    return res.status(500).json({ message: 'Error sending the message' })
  }
}
