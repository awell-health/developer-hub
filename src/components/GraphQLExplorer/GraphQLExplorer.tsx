import { buildClientSchema } from 'graphql'

import { schema } from '../../../src/config/graphSchema'

export const GraphQLExplorer = () => {
  // https://github.com/graphql/graphiql/issues/118
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { DocExplorer } = require('graphiql')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const graphQLSchema = buildClientSchema(schema.data)

  return <DocExplorer schema={graphQLSchema} />
}
