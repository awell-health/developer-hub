import { JSONSchema7Definition, JSONSchema7TypeName } from 'json-schema'

import { type Question } from '../../../../types/generated/api.types'

export const descriptionQuestionToJsonSchemaDefinition = (
  question: Question
): JSONSchema7Definition => {
  const type: JSONSchema7TypeName = 'null'

  const questionSchema = {
    /**
     * Back-end needs to send HTML instead of Plate nodes.
     * This is a temporary fix to make the example work.
     * Bug ticket is created.
     */
    title: JSON.parse(question.title)[0].children[0].text,
    type,
  }

  return questionSchema
}
