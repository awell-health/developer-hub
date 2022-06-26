import { AxiosError } from 'axios'
import { useState } from 'react'

import awellScoreRestClient from '../../../../clients/awellScoreRestClient'
import { type SimulatedCalculationResultsType } from '../../../../types/awell-score/awell-score.types'

interface UseSimulateCalculationsHook {
  loading: boolean
  response: unknown
  simulateCalculation: (calculationId: string) => void
}

export const useSimulateCalculation = (
  apiVersion: string
): UseSimulateCalculationsHook => {
  const [response, setResponse] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  const simulateCalculation = async (calculationId: string) => {
    const endpoint = `/${apiVersion}/calculations/simulate/${
      calculationId === '' ? 'empty' : calculationId
    }`

    try {
      const { data }: { data: SimulatedCalculationResultsType } =
        await awellScoreRestClient.get(endpoint)
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
    response,
    simulateCalculation,
  }
}
