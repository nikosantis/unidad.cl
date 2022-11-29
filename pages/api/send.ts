import type { NextApiRequest, NextApiResponse } from 'next'

import prisma from 'lib/prisma'

const EMAIL_URL = 'https://api.sendinblue.com/v3/smtp/email'

const RECAPTCHA_URL = 'https://www.google.com/recaptcha/api/siteverify'
const RECAPTCHA_SITE_SECRET = process.env.RECAPTCHA_SITE_SECRET

const mailTo = 'claudia.miranda.z@usach.cl'
// const mailTo = 'nikosantis@gmail.com'

type BodyType = {
  form: string
  firstname: string
  lastname: string
  email: string
  phone: string
  comments: string
  token: string
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
  if (!body.token) {
    return res.status(400).json({
      message: 'Invalid recaptcha'
    })
  }
  try {
    const reCaptchaRes = await fetch(
      `${RECAPTCHA_URL}?secret=${RECAPTCHA_SITE_SECRET}&response=${body.token}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    const reCaptchaJson = await reCaptchaRes.json()

    if (reCaptchaJson && reCaptchaJson.success && reCaptchaJson.score >= 0.5) {
      const checkIfExist = await prisma.contact.findFirst({
        where: {
          email: body.email
        }
      })
      if (checkIfExist) {
        return res.status(400).json({
          message: 'Email exist'
        })
      }
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
      const emailBody = {
        to: [
          {
            email: mailTo
          }
        ],
        templateId: 1,
        params: {
          formName: body.form,
          formFirstname: body.firstname,
          formLastname: body.lastname,
          formEmail: body.email,
          formPhone: body.phone,
          formMessage: body.comments
        }
      }
      const emailResult = await fetch(EMAIL_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': process.env.SENDINBLUE_API_KEY
        },
        body: JSON.stringify(emailBody)
      })
      const emailJson = await emailResult.json()

      if (emailResult.ok && emailJson.messageId) {
        return res.status(200).json({
          message: 'Message sent'
        })
      } else {
        return res.status(400).json({
          message: 'Error sending the message'
        })
      }
    }
    return res.status(400).json({
      message: 'Invalid recaptcha'
    })
  } catch (err) {
    const error = err as Error
    console.error(error)
    return res.status(500).json({ message: 'Error sending the message' })
  }
}
