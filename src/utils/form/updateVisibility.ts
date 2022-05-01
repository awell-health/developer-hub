import { find, isNil } from 'lodash/fp'

import { type QuestionWithVisibility } from '../../types/form.types'
import {
  type Question,
  type QuestionRuleResult,
} from '../../types/generated/api.types'

/**
 * Updates question visibility after rules evaluations
 */
export const updateVisibility = (
  questions: Array<Question>,
  evaluation_results: Array<QuestionRuleResult>
): Array<QuestionWithVisibility> =>
  questions.map((question) => {
    const result = find<QuestionRuleResult>(['question_id', question.id])(
      evaluation_results
    )
    const visible = isNil(result) ? true : result.satisfied
    return { ...question, visible }
  })
