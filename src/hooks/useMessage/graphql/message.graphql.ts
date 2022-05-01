import { gql } from '@apollo/client'

export const MESSAGE = gql`
  query GetMessage($id: String!) {
    message(id: $id) {
      message {
        id
        body
        format
        subject
        attachments {
          id
          name
          url
          type
        }
      }
    }
  }
`

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
