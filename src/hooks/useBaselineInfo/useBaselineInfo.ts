import { useQuery } from '@apollo/client'

import { type BaselineDataPoint } from '../../types/generated/api.types'
import { BASELINE_INFO } from './graphql/GetBaselineInfo.graphql'

interface UseBaselineInfoHook {
  loading: boolean
  baselineDataPoints?: Array<BaselineDataPoint>
}

export const useBaselineInfo = (pathway_id: string): UseBaselineInfoHook => {
  const { data, loading, error } = useQuery(BASELINE_INFO, {
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
    baselineDataPoints: data?.baselineInfo?.baselineDataPoints ?? [],
  }
}
