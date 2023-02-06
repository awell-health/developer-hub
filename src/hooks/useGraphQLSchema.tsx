import { buildClientSchema, GraphQLSchema } from 'graphql'

import { useIntrospection } from './awell-orchestration/useIntrospection'

export const useGraphQLSchema = (): {
  schema: GraphQLSchema | null
} => {
  const { introspection } = useIntrospection()

  if (introspection) {
    return {
      schema: buildClientSchema(introspection),
    }
  }

  return { schema: null }
}
