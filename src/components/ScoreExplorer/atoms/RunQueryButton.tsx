import { useEffect } from 'react'

import {
  type EndpointVersion,
  type RequestType,
} from '../../../types/restExplorer.types'
import { Button } from '../../Button'
import { useMakeRequest } from '../hooks'

interface RunQueryButtonProps {
  updateResponse: (response: unknown) => void
  endpointId?: string
  endpointVersion: EndpointVersion
  request: RequestType
}

export const RunQueryButton = ({
  updateResponse,
  endpointId,
  // endpointVersion,
  request,
}: RunQueryButtonProps) => {
  const { makeRequest, response } = useMakeRequest()

  useEffect(() => {
    if (
      endpointId === 'list_calculations' ||
      endpointId === 'search_calculations'
    ) {
      const truncated_response = Array.isArray(response)
        ? response.map((calc) => {
            return {
              calculation_id: calc.calculation_id,
              calculation_name: calc.calculation_name,
            }
          })
        : []
      updateResponse(truncated_response)
    } else {
      updateResponse(response)
    }
  }, [response])

  const onClick = () => {
    makeRequest(request)
  }

  return (
    <Button
      label="Run request"
      onClick={() => onClick()}
      color="sky"
      fullWidth={true}
      disabled={endpointId === null ? true : false}
    />
  )
}
