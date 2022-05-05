import { type UiSchema } from '@rjsf/core'
import {
  JSONSchema7,
  JSONSchema7Definition,
  JSONSchema7TypeName,
} from 'json-schema'
import { mapValues } from 'lodash'

import { type Form, type Question } from '../../../types/generated/api.types'
import {
  booleanQuestionToJsonSchemaDefinition,
  dateQuestionToJsonSchemaDefinition,
  descriptionQuestionToJsonSchemaDefinition,
  longTextQuestionToJsonSchemaDefinition,
  multipleSelectQuestionToJsonSchemaDefinition,
  numberQuestionToJsonSchemaDefinition,
  shortTextQuestionToJsonSchemaDefinition,
  singleSelectQuestionToJsonSchemaDefinition,
  sliderQuestionToJsonSchemaDefinition,
} from './utils'

export const useReactJsonSchemaForm = (
  form: Form
): { schema: JSONSchema7; uiSchema: UiSchema } => {
  let uiSchema: UiSchema = {}

  const questionsAsKeyValuePair: { [questionId: string]: Question } =
    //@ts-expect-error ignore
    form.questions.reduce((r, question) => ((r[question.id] = question), r), {})

  const questions: { [questionId: string]: JSONSchema7Definition } = mapValues(
    questionsAsKeyValuePair,
    (question) => {
      if (question.userQuestionType === 'MULTIPLE_CHOICE') {
        return singleSelectQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'MULTIPLE_SELECT') {
        return multipleSelectQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'DATE') {
        return dateQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'LONG_TEXT') {
        uiSchema = Object.assign(
          {
            [question.id]: {
              'ui:widget': 'textarea',
              'ui:options': {
                rows: 5,
              },
            },
          },
          uiSchema
        )
        return longTextQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'SHORT_TEXT') {
        return shortTextQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'NUMBER') {
        return numberQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'YES_NO') {
        return booleanQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'DESCRIPTION') {
        return descriptionQuestionToJsonSchemaDefinition(question)
      }
      if (question.userQuestionType === 'SLIDER') {
        uiSchema = Object.assign(
          {
            [question.id]: {
              'ui:widget': 'range',
            },
          },
          uiSchema
        )
        return sliderQuestionToJsonSchemaDefinition(question)
      }

      throw new Error(
        `No matching JSON schema found for question type ${question.userQuestionType}`
      )
    }
  )

  const requiredQuestions = form.questions
    .filter((question) => question.questionConfig?.mandatory === true)
    .map((question) => question.id)

  const type: JSONSchema7TypeName = 'object'

  const schema = {
    title: form.title,
    type,
    properties: questions,
    required: requiredQuestions,
  }

  return { schema, uiSchema }
}
