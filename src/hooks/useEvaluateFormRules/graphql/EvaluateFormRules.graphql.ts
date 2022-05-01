import { gql } from '@apollo/client'

export const EVALUATE_FORM_RULES = gql`
  mutation evaluateFormRules($input: EvaluateFormRulesInput!) {
    evaluateFormRules(input: $input) {
      results {
        question_id
        rule_id
        satisfied
      }
    }
  }
`
