import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const multipleSelectQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'array'
  const itemType: JSONSchema7TypeName = 'number'

  const questionSchema = {
    title: question.title,
    type,
    items: {
      type: itemType,
      enum: question.options?.map((option) => option.value) || [],
      enumNames: question.options?.map((option) => option.label) || [],
    },
    uniqueItems: true,
  }

  return questionSchema
}
