import { useMutation } from '@apollo/client'

import { type StartPathwayInput } from '../../types/generated/api.types'
import { START_PATHWAY } from './graphql/StartPathway.graphql'

interface UseStartPathwayHook {
  startPathway: (input: StartPathwayInput) => Promise<string>
}

export const useStartPathway = (): UseStartPathwayHook => {
  const [startPathwayMutation] = useMutation(START_PATHWAY)

  const startPathway = async (input: StartPathwayInput) => {
    try {
      const { data } = await startPathwayMutation({
        variables: {
          input,
        },
      })
      return data.startPathway.pathway_id
    } catch (error) {
      console.log(error)
    }

    return undefined
  }

  return { startPathway }
}
