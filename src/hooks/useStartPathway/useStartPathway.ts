import { useMutation } from '@apollo/client'

import { START_PATHWAY } from './graphql/StartPathway.graphql'

type StartPathwayInput = {
  patientId: string
  pathwayDefinitionId: string
  data_points: {
    data_point_definition_id: string
    value: string
  }
}

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
