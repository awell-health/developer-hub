import { gql } from '@apollo/client'

export const SUBMIT_FORM_RESPONSE = gql`
  mutation SubmitFormResponse($input: SubmitFormResponseInput!) {
    submitFormResponse(input: $input) {
      activity {
        id
        status
      }
    }
  }
`
