import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const sliderQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'number'

  const questionSchema = {
    title: question.title,
    minimum: question.questionConfig?.slider?.min,
    maximum: question.questionConfig?.slider?.max,
    multipleOf: question.questionConfig?.slider?.step_value,
    type,
  }

  return questionSchema
}
