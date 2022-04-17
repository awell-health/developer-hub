import { useQuery } from '@apollo/client'

import { GET_PATIENTS } from './graphql/GetPatients.graphql'

interface UsePatientsHook {
  loading: boolean
  patients?: unknown[]
}

export const usePatients = (): UsePatientsHook => {
  const { data, loading, error } = useQuery(GET_PATIENTS)

  if (error) {
    console.log(error)
    return { loading: false }
  }
  if (loading) {
    return { loading: true }
  }

  return {
    loading: false,
    patients: data?.patients.patients,
  }
}
