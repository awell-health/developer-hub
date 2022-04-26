import { gql } from '@apollo/client'

export const PATHWAY_ACTIVITIES = gql`
  query PathwayActivities($pathway_id: String!) {
    pathwayActivities(pathway_id: $pathway_id) {
      success
      activities {
        stream_id
        id
        status
        action
        date
        object {
          id
          type
          name
        }
      }
    }
  }
`
