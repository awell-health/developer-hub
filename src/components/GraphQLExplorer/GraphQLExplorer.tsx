import { useGraphQLSchema } from '../../hooks/useGraphQLSchema'

export const GraphQLExplorer = () => {
  // https://github.com/graphql/graphiql/issues/118
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { DocExplorer } = require('graphiql')
  const { schema } = useGraphQLSchema()

  return (
    <div id="graphiql-embed">
      <DocExplorer schema={schema} />
    </div>
  )
}
