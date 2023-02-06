import {} from 'graphiql'
import { GraphQLError, GraphQLSchema } from 'graphql'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

import { useGraphQLSchema } from '@/hooks/useGraphQLSchema'

/**
 * The graphiql library can only be rendered on the client side.
 * SSR is not supported.
 */
const DocExplorer = dynamic<{
  schema?: GraphQLSchema | null
  schemaErrors?: readonly GraphQLError[]
}>(() => import('graphiql').then((lib) => lib.DocExplorer), {
  ssr: false,
})

export const GraphQLExplorer = () => {
  const [isClientRendering, setIsClientRendering] = useState(false)
  const { schema } = useGraphQLSchema()

  /**
   * See https://github.com/graphql/graphiql/issues/2368
   */
  useEffect(() => {
    setIsClientRendering(true)
  }, [])

  return isClientRendering ? (
    <div id="graphiql-embed">
      <DocExplorer schema={schema} />
    </div>
  ) : null
}
