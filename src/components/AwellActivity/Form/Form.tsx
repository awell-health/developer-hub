import { useEffect, useState } from 'react'
import {
  type FieldValues,
  Control,
  Controller,
  useForm,
  UseFormRegister,
} from 'react-hook-form'

import { useEvaluateFormRules } from '../../../hooks/awell-orchestration/useEvaluateFormRules'
import { useForm as useFormQuery } from '../../../hooks/awell-orchestration/useForm'
import { useSubmitFormResponse } from '../../../hooks/awell-orchestration/useSubmitFormResponse'
import { QuestionWithVisibility } from '../../../types/form.types'
import { type Activity, Question } from '../../../types/generated/api.types'
import { keyValueObjectToQuestionResponseObject } from '../../../utils/dataPoints'
import { getInitialValues, updateVisibility } from '../../../utils/form'
import { FormSkeleton } from '../../Skeleton'
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
  question: QuestionWithVisibility,
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

const Form = ({
  questions,
  formActivity,
  onActivityCompleted,
}: {
  questions: Question[]
  formActivity: Activity
  onActivityCompleted: () => void
}) => {
  const { register, handleSubmit, control, watch, reset, getValues } = useForm({
    defaultValues: getInitialValues(questions),
  })
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [evaluateFormRules] = useEvaluateFormRules(formActivity.object.id)
  const [visibleQuestions, setVisibleQuestions] = useState<
    Array<QuestionWithVisibility>
  >([])
  const { submitFormResponse } = useSubmitFormResponse()

  const updateQuestionsVisibility = async () => {
    const data = keyValueObjectToQuestionResponseObject(getValues())
    const evaluationResults = await evaluateFormRules(data)
    setVisibleQuestions(updateVisibility(questions, evaluationResults))
  }

  const resetForm = async () => {
    reset()
    await updateQuestionsVisibility()
    setIsLoading(false)
  }

  useEffect(() => {
    const subscription = watch(() => updateQuestionsVisibility())
    return () => subscription.unsubscribe()
  }, [watch])

  useEffect(() => {
    resetForm()
  }, [questions])

  const onSubmit = () => {
    handleSubmit(async (data) => {
      setIsSubmittingForm(true)
      /**
       * We only want to submit data for the applicable/visible questions
       */
      const responseOfVisibleQuestionsOnly = Object.fromEntries(
        Object.entries(data).filter(([key]) =>
          visibleQuestions.find((question) => question.id === key)
            ? true
            : false
        )
      )

      const submittedForm = await submitFormResponse({
        activityId: formActivity.id,
        response: keyValueObjectToQuestionResponseObject(
          responseOfVisibleQuestionsOnly
        ),
      })
      if (submittedForm.status === 'DONE') {
        onActivityCompleted()
      }
      setIsSubmittingForm(false)
    })()
  }

  if (isLoading) return <Spinner message="Loading display logic" />

  return (
    <form
      className="max-w-xl mx-auto pb-12 text-left grid grid-cols-1 gap-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      {visibleQuestions.map((question) => {
        if (!question.visible) return null

        return (
          <div key={question.id}>
            {renderQuestion(question, register, control)}
          </div>
        )
      })}
      <input
        type="submit"
        disabled={isSubmittingForm ? true : false}
        value={isSubmittingForm ? 'Hang on...' : 'Submit'}
        className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      />
    </form>
  )
}

export const FormContainer = ({
  formActivity,
  onActivityCompleted,
}: FormProps) => {
  const { form, loading } = useFormQuery(formActivity.object.id)

  if (loading) return <FormSkeleton />

  return (
    <Form
      questions={form.questions}
      formActivity={formActivity}
      onActivityCompleted={onActivityCompleted}
    />
  )
}
