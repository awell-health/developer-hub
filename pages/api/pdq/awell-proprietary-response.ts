import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const query = req.query
    const id = query?.['identifier:of-type']?.toString() || ''
    const params = id.split('|')

    if (
      params[0] !== 'http://terminology.hl7.org/CodeSystem/v2-0203' ||
      params[1] !== 'SB' ||
      params[2] !== '123456'
    )
      return res.status(404).send({ message: 'Not found' })

    const patient = {
      first_name: 'John',
      last_name: 'Doe',
      preferred_language: 'en',
      birth_date: '1993-11-30',
      sex: '1',
      patient_code: '123456',
      address: {
        city: 'Doe City',
        country: 'Doe Country',
        state: 'Doe State',
        street: 'Doe Street 1',
        zip: '6789',
      },
      email: 'john.doe@acme.org',
      national_registry_number: '987654321',
      mobile_phone: '+32476111111',
      phone: '+3222222222',
    }

    return res
      .setHeader('Content-Type', 'application/json')
      .status(200)
      .send(patient)
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
}
