import { gql } from '@apollo/client'

export const PUBLISHED_PATHWAY_DEFINITIONS = gql`
  query GetPublishedPathwayDefinitions {
    publishedPathwayDefinitions {
      publishedPathwayDefinitions {
        id
        title
        dataPointDefinitions {
          id
          key
          valueType
          category
          title
          possibleValues {
            label
            value
          }
        }
      }
    }
  }
`
