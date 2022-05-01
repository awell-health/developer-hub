import { type FieldValues, UseFormRegister } from 'react-hook-form'

import { type Question } from '../../../../../types/generated/api.types'
import { Label } from '../Atoms'

interface LongTextProps {
  question: Question
  register: UseFormRegister<FieldValues>
}

export const LongText = ({ question, register }: LongTextProps) => {
  return (
    <>
      <Label
        htmlFor={question.id}
        label={question.title}
        mandatory={question.questionConfig?.mandatory}
      />
      <div className="mt-1">
        <textarea
          {...register(question.id, {
            required: question.questionConfig?.mandatory,
          })}
          id={question.id}
          rows={3}
          className="shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
        />
      </div>
    </>
  )
}
