import { gql } from '@apollo/client'

export const UPDATE_PATIENT = gql`
  mutation UpdatePatient($input: UpdatePatientInput!) {
    updatePatient(input: $input) {
      patient {
        ...Patient
      }
    }
  }
`
