import { gql } from '@apollo/client'

export const CREATE_PATIENT = gql`
  mutation CreatePatient($input: CreatePatientInput!) {
    createPatient(input: $input) {
      patient {
        id
        profile {
          email
          sex
          birth_date
          first_name
          last_name
          name
          phone
          mobile_phone
          preferred_language
          patient_code
          national_registry_number
          address {
            street
            city
            zip
            state
            country
          }
        }
      }
    }
  }
`
