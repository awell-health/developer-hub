import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const dateQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'string'

  const questionSchema = {
    title: question.title,
    type,
    format: 'date',
  }

  return questionSchema
}
