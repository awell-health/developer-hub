import { gql } from '@apollo/client'

export const GET_PATIENT_PATHWAYS = gql`
  query GetPatientPathways($patient_id: String!) {
    patientPathways(patient_id: $patient_id) {
      patientPathways {
        ...PatientPathway
      }
    }
  }
`
