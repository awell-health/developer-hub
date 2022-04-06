import { DocExplorer } from 'graphiql'
import { buildClientSchema } from 'graphql'

import { schema } from '../../../src/config/graphSchema'

export const GraphQLExplorer = () => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const graphQLSchema = buildClientSchema(schema.data)

  return <DocExplorer schema={graphQLSchema} />
}
