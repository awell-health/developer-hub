import type { NextApiRequest, NextApiResponse } from 'next/types'

import { isValidE164String } from '@/utils/string'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const phone = req.body?.phone || ''

    const isValid = isValidE164String(phone)

    res.status(200).send({ isValid })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
