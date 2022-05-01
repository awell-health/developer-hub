import { type FieldValues, UseFormRegister } from 'react-hook-form'

import { type Question } from '../../../../../types/generated/api.types'
import { Label } from '../Atoms'

interface SingleSelectProps {
  question: Question
  register: UseFormRegister<FieldValues>
}

export const SingleSelect = ({ question, register }: SingleSelectProps) => {
  const options = question.options || []

  return (
    <>
      <Label
        htmlFor={question.id}
        label={question.title}
        mandatory={question.questionConfig?.mandatory}
      />
      <select
        {...register(question.id, {
          required: question.questionConfig?.mandatory,
        })}
        id={question.id}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  )
}
