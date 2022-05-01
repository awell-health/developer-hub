import { useState } from 'react'
import {
  type FieldValues,
  Control,
  Controller,
  useForm,
  UseFormRegister,
} from 'react-hook-form'

import { useForm as useFormQuery } from '../../../hooks/useForm'
import { useSubmitFormResponse } from '../../../hooks/useSubmitFormResponse'
import {
  type Activity,
  type Question,
} from '../../../types/generated/api.types'
import { keyValueObjectToQuestionResponseObject } from '../../../utils/dataPoints'
import { Spinner } from '../../Spinner'
import {
  Boolean,
  Date,
  Description,
  LongText,
  MultipleSelect,
  Number,
  ShortText,
  SingleSelect,
  Slider,
} from './QuestionTypes'

interface FormProps {
  formActivity: Activity
  onActivityCompleted: () => void
}

const renderQuestion = (
  question: Question,
  register: UseFormRegister<FieldValues>,
  control: Control<FieldValues>
) => {
  switch (question.userQuestionType) {
    case 'NUMBER':
      return <Number question={question} register={register} />
    case 'LONG_TEXT':
      return <LongText question={question} register={register} />
    case 'DATE':
      return <Date question={question} register={register} />
    case 'MULTIPLE_CHOICE':
      return <SingleSelect question={question} register={register} />
    case 'YES_NO':
      return (
        <Controller
          name={question.id}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Boolean question={question} onChange={onChange} value={value} />
          )}
          defaultValue={false}
        />
      )
    case 'SHORT_TEXT':
      return <ShortText question={question} register={register} />
    case 'SLIDER':
      return <Slider question={question} register={register} />
    case 'DESCRIPTION':
      return <Description question={question} />
    case 'MULTIPLE_SELECT':
      return (
        <Controller
          name={question.id}
          control={control}
          render={({ field: { onChange } }) => (
            <MultipleSelect question={question} onChange={onChange} />
          )}
          defaultValue={false}
        />
      )
    default:
      return `Question with type ${question.userQuestionType} is not supported.`
  }
}

export const Form = ({ formActivity, onActivityCompleted }: FormProps) => {
  const { form, loading } = useFormQuery(formActivity.object.id)
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const { submitFormResponse } = useSubmitFormResponse()
  const { register, handleSubmit, control } = useForm()

  const onSubmit = () => {
    handleSubmit(async (data) => {
      setIsSubmittingForm(true)
      const response = keyValueObjectToQuestionResponseObject(data)
      const submittedForm = await submitFormResponse({
        activityId: formActivity.id,
        response,
      })
      if (submittedForm.status === 'DONE') {
        onActivityCompleted()
      }
      setIsSubmittingForm(false)
    })()
  }

  if (loading) return <Spinner message="Loading questions" />

  return (
    <form
      className="max-w-xl mx-auto pb-12 text-left grid grid-cols-1 gap-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {form.questions.map((question) => (
        <div key={question.id}>
          {renderQuestion(question, register, control)}
        </div>
      ))}
      <input
        type="submit"
        disabled={isSubmittingForm ? true : false}
        value={isSubmittingForm ? 'Hang on...' : 'Submit'}
        className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </form>
  )
}
