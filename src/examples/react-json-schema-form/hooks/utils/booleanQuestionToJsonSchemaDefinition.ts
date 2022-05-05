import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const booleanQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'boolean'

  const questionSchema = {
    title: question.title,
    type,
  }

  return questionSchema
}
