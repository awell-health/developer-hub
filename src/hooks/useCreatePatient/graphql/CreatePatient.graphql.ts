import { gql } from '@apollo/client'

export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
      patient {
        ...Patient
      }
    }
  }
`
