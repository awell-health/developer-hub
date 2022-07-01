import { gql } from '@apollo/client'

export const GET_PATIENT = gql`
  query GetPatient($patient_id: String!) {
    patient(id: $patient_id) {
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
