import {} from 'graphiql'

import { useGraphQLSchema } from '@/hooks/useGraphQLSchema'

export const GraphQLExplorer = () => {
  const { schema } = useGraphQLSchema()
  // https://github.com/graphql/graphiql/issues/118
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const { DocExplorer } = require('graphiql')

  console.log(schema)

  if (typeof window === 'undefined') return null

  return (
    <div id="graphiql-embed">
      <p>Hello</p>
    </div>
  )
}
