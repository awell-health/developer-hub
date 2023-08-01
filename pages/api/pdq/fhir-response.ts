import type { NextApiRequest, NextApiResponse } from 'next/types'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const fhirPatient = {
      resourceType: 'Patient',
      id: 'someInternalIdOfTheHospitalWeDontKnow',
      identifier: [
        {
          use: 'official',
          type: {
            coding: [
              {
                system: 'http://terminology.hl7.org/CodeSystem/v2-0203',
                code: 'SB',
                display: 'Social Beneficiary Identifier',
              },
            ],
          },
          system:
            'https://www.ehealth.fgov.be/standards/fhir/core/NamingSystem/ssin',
          value: '123456',
        },
      ],
      name: [
        {
          use: 'official',
          family: 'Doe',
          given: ['John'],
        },
      ],
      telecom: [
        {
          system: 'email',
          value: 'john.doe@acme.org',
        },
        {
          system: 'phone',
          value: '+32476111111',
          use: 'mobile',
        },
        {
          system: 'phone',
          value: '+3222222222',
          use: 'home',
        },
      ],
      gender: 'male',
      birthDate: '1993-11-30',
      address: [
        {
          use: 'home',
          text: 'Doe Street 1 Doe City, Doe State 6789',
          line: ['534 Erewhon St'],
          city: 'Doe City',
          state: 'Doe State',
          postalCode: '6789',
        },
      ],
    }

    return res
      .setHeader('Content-Type', 'application/json')
      .status(200)
      .send(fhirPatient)
  } else {
    res.setHeader('Allow', 'GET')
    res.status(405).end('Method Not Allowed')
  }
}
