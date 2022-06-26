import { AxiosError } from 'axios'
import { useState } from 'react'

import awellScoreRestClient from '../../../../clients/awellScoreRestClient'
import { type CalculationType } from '../../../../types/awell-score/awell-score.types'

interface UseCalculationsHook {
  loading: boolean
  response: unknown
  getCalculations: () => Promise<void>
}

export const useCalculations = (apiVersion: string): UseCalculationsHook => {
  const [response, setResponse] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  const endpoint = `/${apiVersion}/calculations`

  const getCalculations = async () => {
    try {
      const { data }: { data: CalculationType[] } =
        await awellScoreRestClient.get(endpoint)

      console.log('Full list calculations response:', data)
      setResponse(
        data.map((calc) => {
          return {
            calculation_id: calc.calculation_id,
            calculation_name: calc.calculation_name,
          }
        })
      )
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
    response,
    getCalculations,
  }
}
