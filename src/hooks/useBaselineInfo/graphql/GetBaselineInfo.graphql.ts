import { gql } from '@apollo/client'

export const BASELINE_INFO = gql`
  query GetBaselineInfo($pathway_id: String!) {
    baselineInfo(pathway_id: $pathway_id) {
      baselineDataPoints {
        value
        definition {
          id
          title
          category
          key
          valueType
          possibleValues {
            label
            value
          }
          unit
          range {
            min
            max
          }
        }
      }
    }
  }
`
