import { useQuery } from '@apollo/client'

import { PUBLISHED_PATHWAY_DEFINITIONS } from './graphql/GetPublishedPathwayDefinitions.graphql'

interface UsePublishedPathwayDefinitionsHook {
  loading: boolean
  publishedPathwayDefinitions?: unknown
}

export const usePublishedPathwayDefinitions =
  (): UsePublishedPathwayDefinitionsHook => {
    const { data, loading, error } = useQuery(PUBLISHED_PATHWAY_DEFINITIONS)

    if (error) {
      console.log(error)
      return { loading: false, publishedPathwayDefinitions: [] }
    }
    if (loading) {
      return { loading: true }
    }

    return {
      loading: false,
      publishedPathwayDefinitions:
        data?.publishedPathwayDefinitions.publishedPathwayDefinitions,
    }
  }
