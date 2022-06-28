import { useMutation } from '@apollo/client'

import {
  type PatientProfileInput,
  type User,
} from '../../../types/generated/api.types'
import { UPDATE_PATIENT } from './graphql/UpdatePatient.graphql'

interface UseUpdatePatientHook {
  updatePatient: (profile: PatientProfileInput) => Promise<User>
}

export const useUpdatePatient = (patient_id: string): UseUpdatePatientHook => {
  const [updatePatientMutation] = useMutation(UPDATE_PATIENT)

  const updatePatient = async (profile: PatientProfileInput) => {
    try {
      const { data } = await updatePatientMutation({
        variables: {
          input: {
            patient_id,
            profile,
          },
        },
      })
      return data.updatePatient.patient
    } catch (error) {
      console.log(error)
    }
    return undefined
  }

  return {
    updatePatient,
  }
}
