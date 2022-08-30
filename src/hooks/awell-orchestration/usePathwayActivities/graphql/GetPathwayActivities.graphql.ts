import { gql } from '@apollo/client'

export const PATHWAY_ACTIVITIES = gql`
  query PathwayActivities($pathway_id: String!) {
    pathwayActivities(pathway_id: $pathway_id) {
      success
      activities {
        id
        stream_id
        status
        date
        subject {
          type
          name
        }
        action
        object {
          id
          type
          name
        }
        indirect_object {
          id
          type
          name
        }
      }
    }
  }
`
