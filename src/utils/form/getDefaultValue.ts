import { type AnswerValue } from '../../types/form.types'
import { Question, UserQuestionType } from '../../types/generated/api.types'

export const getDefaultValue = (question: Question): AnswerValue => {
  switch (question.userQuestionType) {
    case UserQuestionType.YesNo:
      return false
    case UserQuestionType.MultipleSelect:
      return []
    case UserQuestionType.Slider:
      return question.questionConfig?.slider?.min ?? 0
    default:
      return ''
  }
}
