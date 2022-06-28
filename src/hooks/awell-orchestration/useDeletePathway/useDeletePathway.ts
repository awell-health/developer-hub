import { useMutation } from '@apollo/client'

import { type DeletePathwayInput } from '../../../types/generated/api.types'
import { DELETE_PATHWAY } from './graphql/DeletePathway.graphql'

interface UseDeletePathwayHook {
  deletePathway: (input: DeletePathwayInput) => Promise<boolean>
}

export const useDeletePathway = (): UseDeletePathwayHook => {
  const [deletePathwayMutation] = useMutation(DELETE_PATHWAY)

  const deletePathway = async (input: unknown) => {
    try {
      await deletePathwayMutation({
        variables: {
          input,
        },
        refetchQueries: ['GetPatientPathways'],
      })
      return true
    } catch (error) {
      console.log(error)
    }
    return false
  }

  return {
    deletePathway,
  }
}
