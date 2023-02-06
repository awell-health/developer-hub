import { DocExplorer } from 'graphiql'
import { useEffect, useState } from 'react'

import { useGraphQLSchema } from '@/hooks/useGraphQLSchema'

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
