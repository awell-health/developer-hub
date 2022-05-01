import { type FieldValues, UseFormRegister } from 'react-hook-form'

import { type Question } from '../../../../../types/generated/api.types'
import { Label } from '../Atoms'

interface DateProps {
  question: Question
  register: UseFormRegister<FieldValues>
}

export const Date = ({ question, register }: DateProps) => {
  return (
    <>
      <Label
        htmlFor={question.id}
        label={question.title}
        mandatory={question.questionConfig?.mandatory}
      />
      <div className="mt-1">
        <input
          {...register(question.id, {
            required: question.questionConfig?.mandatory,
          })}
          id={question.id}
          type="date"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
    </>
  )
}
