import { useMutation } from '@apollo/client'

import { DELETE_PATIENT } from './graphql/DeletePatient.graphql'

interface UseDeletePatientHook {
  deletePatient: (patient_id: string) => Promise<boolean>
}

export const useDeletePatient = (): UseDeletePatientHook => {
  const [deletePatientMutation] = useMutation(DELETE_PATIENT)

  const deletePatient = async (patient_id: string) => {
    try {
      await deletePatientMutation({
        variables: {
          input: {
            patient_id,
          },
        },
      })
      return true
    } catch (error) {
      console.log(error)
    }
    return false
  }

  return {
    deletePatient,
  }
}
