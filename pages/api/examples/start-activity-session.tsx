import type { NextApiRequest, NextApiResponse } from 'next/types'

import { type StartPathwayPayload } from '@/types/generated/api.types'

const AWELL_API_ENDPOINT = process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL || ''
const AWELL_API_KEY = process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_KEY || ''
const PATHWAY_DEFINITION_ID = 'yYZujfDZashg'
const PATIENT_ID = '0CDP6fmOYhwgcWXwnO57h'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      // Get data submitted in request's body.
      const requestBody = req.body

      // Guard clause checks for email
      // and returns early if they are not found
      if (!requestBody.email) {
        // Sends a HTTP bad request error code
        return res.status(400).json({ data: 'No email passed' })
      }

      const body = JSON.stringify({
        query: `
        mutation StartPathway($input: StartPathwayInput!) {
          startPathway(input: $input) {
            pathway_id
          }
        }`,
        variables: {
          input: {
            patient_id: PATIENT_ID,
            pathway_definition_id: PATHWAY_DEFINITION_ID,
            data_points: [
              {
                data_point_definition_id: 'wtZGTsIE9Dr-',
                value: requestBody.email,
              },
            ],
          },
        },
      })

      const pathway = await fetch(AWELL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          apiKey: AWELL_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
        cache: 'default',
      })
        .then((response) => response.json())
        .then((response) => response.data.startPathway as StartPathwayPayload)

      if (pathway) {
        res.status(200).send({
          message: `Check your inbox at ${requestBody.email}. We have started a pathway for your and you should have received a notification to complete an activity.`,
          pathway,
        })
      }

      res.status(500).send({ message: 'Something went wrong' })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
