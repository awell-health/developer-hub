import { AxiosError } from 'axios'
import { useState } from 'react'

import awellScoreRestClient from '../../../../clients/awellScoreRestClient'

interface UseCalculationResultHook {
  loading: boolean
  response: unknown
  getCalculationResult: (id: string) => Promise<void>
}

export const useCalculationResult = (
  apiVersion: string
): UseCalculationResultHook => {
  const [response, setResponse] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  const getCalculationResult = async (id: string) => {
    setLoading(true)
    setResponse(null)

    const endpoint = `/${apiVersion}/calculations/result/${id}`

    try {
      const { data } = await awellScoreRestClient.get(endpoint)
      setResponse(data)
    } catch (error) {
      const err = error as AxiosError

      if (err.response) {
        setResponse({
          status: err.response.status,
          headers: err.response.headers,
          data: err.response.data,
        })
      } else if (err.request) {
        // The request was made but no response was received
        setResponse({
          request: err.request,
        })
      } else {
        // Something happened in setting up the request that triggered an Error
        setResponse({
          message: err.message,
        })
      }
    }
    setLoading(false)
  }

  return {
    loading,
    getCalculationResult,
    response,
  }
}
