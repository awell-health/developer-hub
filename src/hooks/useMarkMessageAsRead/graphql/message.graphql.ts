import { gql } from '@apollo/client'

export const MARK_MESSAGE_AS_READ = gql`
  mutation MarkMessageAsRead($input: MarkMessageAsReadInput!) {
    markMessageAsRead(input: $input) {
      activity {
        id
        status
      }
    }
  }
`
