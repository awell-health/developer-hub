import { useMutation } from '@apollo/client'

import {
  type Activity,
  type QuestionResponseInput,
} from '../../../types/generated/api.types'
import { SUBMIT_FORM_RESPONSE } from './graphql/SubmitFormResponse'

type SubmitInput = {
  response: QuestionResponseInput[]
  activityId: string
}

interface UseSubmitFormResponseHook {
  submitFormResponse: ({
    response,
    activityId,
  }: SubmitInput) => Promise<Activity>
}

export const useSubmitFormResponse = (): UseSubmitFormResponseHook => {
  const [submitFormResponseMutation] = useMutation(SUBMIT_FORM_RESPONSE)

  const submitFormResponse = async ({ response, activityId }: SubmitInput) => {
    try {
      const { data } = await submitFormResponseMutation({
        variables: {
          input: {
            activity_id: activityId,
            response,
          },
        },
      })

      return data.submitFormResponse.activity
    } catch (error) {
      console.log(error)
    }
    return undefined
  }

  return {
    submitFormResponse,
  }
}
