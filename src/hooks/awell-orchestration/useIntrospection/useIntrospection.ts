import { useQuery } from '@apollo/client'
import { type IntrospectionQuery } from 'graphql'

import { INTROSPECTION } from './graphql/introspection.graphql'

interface UseIntrospectionHook {
  loading: boolean
  introspection?: IntrospectionQuery
}

export const useIntrospection = (): UseIntrospectionHook => {
  const { data, loading, error } = useQuery(INTROSPECTION)

  if (error) {
    console.log(error)
    return { loading: false }
  }
  if (loading) {
    return { loading: true }
  }

  return {
    loading: false,
    introspection: data,
  }
}
