import { useQuery } from '@apollo/client'

import { type PatientPathway } from '../../../types/generated/api.types'
import { GET_PATIENT_PATHWAYS } from './graphql/GetPatientPathways.graphql'

interface UsePatientPathwaysHook {
  patientPathways: Array<PatientPathway>
  loading: boolean
}

export const usePatientPathways = (
  patientId: string
): UsePatientPathwaysHook => {
  const { data, loading, error } = useQuery(GET_PATIENT_PATHWAYS, {
    variables: {
      patient_id: patientId,
    },
  })

  if (error) {
    console.log(error)
    return { loading: false, patientPathways: [] }
  }

  const patientPathways = data?.patientPathways.patientPathways ?? []

  return {
    patientPathways,
    loading,
  }
}
