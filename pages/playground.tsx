import 'graphiql/graphiql.css'

import { createGraphiQLFetcher } from '@graphiql/toolkit'
import GraphiQL from 'graphiql'

export default function Playground() {
  if (typeof window === 'undefined') return null

  if (!process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL) {
    throw new Error('NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL is not defined')
  }

  // const GraphiQL = require('graphiql')
  // const { createGraphiQLFetcher } = require('@graphiql/toolkit')

  const fetcher = createGraphiQLFetcher({
    url: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL,
    headers: {
      apiKey: 'I0xHR9QOuOPhupv68kdKfVeR3CwIFkIe',
    },
  })

  return (
    <div className="h-screen">
      <GraphiQL fetcher={fetcher} editorTheme={'dracula'} />
    </div>
  )
}
