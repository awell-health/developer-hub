import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const singleSelectQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'string'

  const questionSchema = {
    title: question.title,
    type,
    enum: question.options?.map((question) => question.value.toString()) || [],
    enumNames: question.options?.map((question) => question.label) || [],
  }

  return questionSchema
}
