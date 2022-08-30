import type { NextApiRequest, NextApiResponse } from 'next/types'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body)
    return res.status(200).json({ message: 'Webhook received.' })
  } else {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method is not allowed.' })
  }
}
