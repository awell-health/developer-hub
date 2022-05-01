import { type QuestionResponseInput } from '../../types/generated/api.types'

export const keyValueObjectToQuestionResponseObject = (obj: {
  [key in string]: unknown
}): Array<QuestionResponseInput> =>
  //@ts-expect-error ignore
  Object.entries(obj).map((item) => {
    let value = item[1]
    /**
     * Arrays and booleans need to be serialized before being
     * sent to the backend.
     */
    if (typeof item[1] === 'object' || typeof item[1] === 'boolean') {
      value = JSON.stringify(item[1])
    }

    return {
      question_id: item[0],
      value,
    }
  })
