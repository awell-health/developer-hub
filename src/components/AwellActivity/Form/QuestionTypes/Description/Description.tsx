import { type Question } from '../../../../../types/generated/api.types'

interface DescriptionProps {
  question: Question
}

export const Description = ({ question }: DescriptionProps) => {
  return <div>{question.title}</div>
}
