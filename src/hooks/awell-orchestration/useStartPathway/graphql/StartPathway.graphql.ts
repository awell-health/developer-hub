import { gql } from '@apollo/client'

export const START_PATHWAY = gql`
  mutation StartPathway($input: StartPathwayInput!) {
    startPathway(input: $input) {
      pathway_id
    }
  }
`
