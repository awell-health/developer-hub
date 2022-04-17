import { gql } from '@apollo/client'

export const GET_PATIENT = gql`
  query GetPatient($patient_id: String!) {
    patient(id: $patient_id) {
      patient {
        ...Patient
      }
    }
  }
`
