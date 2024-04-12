/* eslint-disable simple-import-sort/imports */
import React from 'react'
import dynamic from 'next/dynamic'
import { GraphQLSchema } from 'graphql'
import { createGraphiQLFetcher } from '@graphiql/toolkit'

import 'graphiql/graphiql.css'

import { useGraphQLSchema } from '@/hooks/useGraphQLSchema'
import { defaultQuery } from '@/config/graphiql/graphiql'

// Dynamically import the GraphiQL component to disable SSR
const GraphiQLWithNoSSR = dynamic(
  () =>
    import('graphiql').then((mod) => {
      const fetcher = createGraphiQLFetcher({
        url: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL || '',
      })
      const GraphiQLComponent = ({
        schema,
      }: {
        schema: GraphQLSchema | undefined
      }) => (
        <mod.GraphiQL
          schema={schema}
          fetcher={fetcher}
          defaultQuery={defaultQuery}
          headers={JSON.stringify({ apiKey: 'YOUR-API-KEY-HERE' })}
          shouldPersistHeaders={true}
        />
      )

      GraphiQLComponent.displayName = 'GraphiQLComponent'

      return GraphiQLComponent
    }),
  { ssr: false }
)

export default function GraphqlPlayground() {
  const { schema } = useGraphQLSchema()

  if (!schema) return <div>Loading...</div>

  return (
    <div style={{ height: '100vh' }}>
      <GraphiQLWithNoSSR schema={schema} />
    </div>
  )
}
