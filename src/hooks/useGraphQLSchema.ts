import { buildClientSchema, GraphQLSchema } from 'graphql'

import { schema } from '../config/graphSchema'

/**
 * Todo: get schema directly via Introspection query
 * and not via config file
 */
export const useGraphQLSchema = (): {
  schema: GraphQLSchema | null
} => {
  //@ts-expect-error ignore
  const graphQLSchema = buildClientSchema(schema.data)

  return { schema: graphQLSchema }
}
