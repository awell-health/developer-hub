import { gql } from '@apollo/client'

export const DELETE_PATIENT = gql`
  mutation DeletePatient($input: DeletePatientInput!) {
    deletePatient(input: $input) {
      success
    }
  }
`
