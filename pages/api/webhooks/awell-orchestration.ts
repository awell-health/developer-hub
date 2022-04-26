import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    console.log(req.body)
    return res.status(200).send({ message: 'Webhook received.' })
  } else {
    return res.status(405).send({ message: 'Method is not allowed.' })
  }
}
