import type { NextApiRequest, NextApiResponse } from 'next'

// const AWELL_API_ENDPOINT =
//   'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql'
// const AWELL_API_KEY = process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_KEY
// const YOUR_DOMAIN = 'https://your-domain.com'
// const PATHWAY_DEFINITION_ID = 'ABC'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.redirect(303, 'https://awell.health')
  //   if (req.method === 'POST') {
  //     return
  //     try {
  //       const query = JSON.stringify({
  //         query: `
  //         mutation StartAndCreatePathwaySession(
  //           $pathway_definition_id: String!,
  //           $success_url: String!,
  //           $cancel_url: String!
  //         ) {
  //           startAndCreatePathwaySession(
  //             $pathway_definition_id: String!,
  //             $success_url: String!,
  //             $cancel_url: String!,
  //           ) {
  //             session_url
  //           }
  //         }
  //       }`,
  //       })

  //       const session = fetch(AWELL_API_ENDPOINT, {
  //         method: 'POST',
  //         headers: {
  //           apiKey: AWELL_API_KEY,
  //           Accept: 'application/json',
  //           'Content-Type': 'application/json',
  //         },
  //         body: {
  //           query: query,
  //           variables: {
  //             $pathway_definition_id: PATHWAY_DEFINITION_ID,
  //             $success_url: `${YOUR_DOMAIN}?success=true`,
  //             $cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  //           },
  //         },
  //         cache: 'default',
  //       })

  //       res.redirect(303, session.session_url)
  //     } catch (err) {
  //       res.status(err.statusCode || 500).json(err.message)
  //     }
  //   } else {
  //     res.setHeader('Allow', 'POST')
  //     res.status(405).end('Method Not Allowed')
  //   }
}
