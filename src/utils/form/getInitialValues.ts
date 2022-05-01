import { compose, fromPairs, map } from 'lodash/fp'

import { type AnswerValue } from '../../types/form.types'
import { type Question } from '../../types/generated/api.types'
import { getDefaultValue } from './getDefaultValue'

export const getInitialValues = (
  questions: Array<Question>
): Record<string, AnswerValue> => {
  return compose(
    fromPairs,
    map<Question, [string, AnswerValue]>((question) => [
      question.id,
      getDefaultValue(question),
    ])
  )(questions)
}
