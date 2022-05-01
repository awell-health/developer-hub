import { type Question } from './generated/api.types'

export type QuestionWithVisibility = Question & { visible: boolean }

export type AnswerValue = boolean | number | string | string[]
