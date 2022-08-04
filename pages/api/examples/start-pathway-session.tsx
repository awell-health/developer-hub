import type { NextApiRequest, NextApiResponse } from 'next/types'

import { type StartHostedPathwaySessionPayload } from '@/types/generated/api.types'

const AWELL_API_ENDPOINT = process.env.DEVELOPMENT_GRAPHQL_API_URL || ''
const AWELL_API_KEY = process.env.DEVELOPMENT_SANDBOX_GRAPHQL_API_KEY || ''
const PATHWAY_DEFINITION_ID = '_cuXJDlNd4S8'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const body = JSON.stringify({
        query: `
        mutation StartHostedPathwaySession(
          $input: StartHostedPathwaySessionInput!,
        ) {
          startHostedPathwaySession(input: $input) {
            session_id
            session_url
            patient_id
            pathway_id
          }
        }`,
        variables: {
          input: {
            pathway_definition_id: PATHWAY_DEFINITION_ID,
            success_url: `${req.headers.origin}/awell-orchestration/examples/hosted-pathway?success=true`,
            cancel_url: `${req.headers.origin}/awell-orchestration/examples/hosted-pathway?canceled=true`,
          },
        },
      })

      const session = await fetch(AWELL_API_ENDPOINT, {
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
        .then(
          (response) =>
            response.data
              .startHostedPathwaySession as StartHostedPathwaySessionPayload
        )

      const SESSION_URL = `https://hosted-pages.vercel.app/${session.session_url}`

      res.redirect(303, SESSION_URL)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
