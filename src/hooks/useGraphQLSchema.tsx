import { buildClientSchema, GraphQLSchema } from 'graphql'

import { useIntrospection } from './useIntrospection'

export const useGraphQLSchema = (): {
  schema: GraphQLSchema | null
} => {
  const { introspection } = useIntrospection()

  let graphQLSchema = null

  if (introspection) {
    graphQLSchema = buildClientSchema(introspection)
  }

  return { schema: graphQLSchema }
}
