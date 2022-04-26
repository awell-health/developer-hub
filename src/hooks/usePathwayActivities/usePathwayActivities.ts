import { useQuery } from '@apollo/client'

import { type Activity } from '../../types/generated/api.types'
import { PATHWAY_ACTIVITIES } from './graphql/GetPathwayActivities.graphql'

interface UseBaselineInfoHook {
  loading: boolean
  activities?: Array<Activity>
}

export const usePathwayActivities = (
  pathway_id: string
): UseBaselineInfoHook => {
  const { data, loading, error } = useQuery(PATHWAY_ACTIVITIES, {
    variables: {
      pathway_id,
    },
  })

  if (error) {
    console.log(error)
    return { loading: false }
  }
  if (loading) {
    return { loading: true }
  }

  return {
    loading: false,
    activities: data?.pathwayActivities?.activities ?? [],
  }
}
