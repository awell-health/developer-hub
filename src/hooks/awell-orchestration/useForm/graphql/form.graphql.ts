import { gql } from '@apollo/client'

export const GET_FORM = gql`
  query GetForm($id: String!) {
    form(id: $id) {
      form {
        id
        title
        metadata
        questions {
          id
          title
          metadata
          dataPointValueType
          options {
            id
            value
            label
          }
          questionType
          userQuestionType
          questionConfig {
            recode_enabled
            mandatory
            slider {
              min
              max
              step_value
              display_marks
              min_label
              max_label
              is_value_tooltip_on
              show_min_max_values
            }
          }
        }
      }
    }
  }
`
