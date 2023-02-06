import {} from 'graphiql'

import { useGraphQLSchema } from '@/hooks/useGraphQLSchema'

export const GraphQLExplorer = () => {
  const { schema } = useGraphQLSchema()
  // https://github.com/graphql/graphiql/issues/118
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { DocExplorer } = require('graphiql')

  if (typeof window === 'undefined') return null

  return (
    <div id="graphiql-embed">
      <DocExplorer schema={schema} />
    </div>
  )
}
