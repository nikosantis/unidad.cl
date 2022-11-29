import type { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { unstable_getServerSession } from 'next-auth/next'

import prisma from 'lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET'])
    return res.status(405).end(`Method ${req.method} Not Allowed`)
  }
  try {
    const session = await unstable_getServerSession(req, res, authOptions)
    if (!session) {
      res.status(401).json({ message: 'You must be logged in.' })
      return
    }
    const getForms = await prisma.contact.findMany()
    if (getForms) {
      return res.status(200).json({
        forms: getForms,
        total: getForms.length
      })
    }
    return res.status(400).json({
      message: 'Error getting forms'
    })
  } catch (err) {
    const error = err as Error
    console.error(error)
    return res.status(500).json({ error: error.message })
  }
}
