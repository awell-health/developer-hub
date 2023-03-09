import 'graphiql/graphiql.css'

import { createGraphiQLFetcher } from '@graphiql/toolkit'

import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

import { defaultQuery } from '../../src/config/graphiql/graphiql'
import { useGraphQLSchema } from '../../src/hooks/useGraphQLSchema'

export default function Playground() {
  const { schema } = useGraphQLSchema()
  // https://github.com/graphql/graphiql/issues/118
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { GraphiQL } = require('graphiql')

  if (typeof window === 'undefined') return null

  if (!process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL) {
    throw new Error('NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL is not defined')
  }

  const fetcher = createGraphiQLFetcher({
    url: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL,
  })

  return (
    <div id="graphql-embed" className="h-screen">
      <SEO
        title="GraphQL Playground"
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/playground`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/playground`}
      />
      <GraphiQL
        schema={schema}
        fetcher={fetcher}
        editorTheme={'dracula'}
        defaultQuery={defaultQuery}
        shouldPersistHeaders={true}
        tabs={true}
      />
    </div>
  )
}
