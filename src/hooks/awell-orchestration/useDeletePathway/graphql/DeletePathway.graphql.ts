import { gql } from '@apollo/client'

export const DELETE_PATHWAY = gql`
  mutation DeletePathway($input: DeletePathwayInput!) {
    deletePathway(input: $input) {
      success
    }
  }
`
