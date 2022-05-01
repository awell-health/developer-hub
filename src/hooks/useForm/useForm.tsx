import { ApolloError, useQuery } from '@apollo/client'

import type { Form } from '../../types/generated/api.types'
import { GET_FORM } from './graphql/form.graphql'

interface UseFormHook {
  loading: boolean
  error?: ApolloError
  form: Form
}

export const useForm = (formId: string): UseFormHook => {
  const { data, loading, error } = useQuery(GET_FORM, {
    variables: {
      id: formId,
    },
  })

  if (error) {
    console.log(error)
  }

  return {
    loading,
    error,
    form: data?.form.form,
  }
}
