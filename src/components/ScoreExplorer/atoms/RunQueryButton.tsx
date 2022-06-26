import { useEffect } from 'react'

import {
  type EndpointVersion,
  type RequestType,
} from '../../../types/restExplorer.types'
import { Button } from '../../Button'
import {
  useCalculation,
  useCalculationResult,
  useCalculations,
  usePerformCalculation,
  useSearchCalculations,
  useSimulateCalculation,
} from '../hooks'

interface RunQueryButtonProps {
  updateResponse: (response: unknown) => void
  endpointId?: string
  endpointVersion: EndpointVersion
  request: RequestType
}

export const RunQueryButton = ({
  updateResponse,
  endpointId,
  endpointVersion,
  request,
}: RunQueryButtonProps) => {
  const { getCalculation, response: getCalculationResponse } = useCalculation(
    endpointVersion.version
  )
  const { getCalculations, response: getCalculationsResponse } =
    useCalculations(endpointVersion.version)
  const { searchCalculations, response: searchCalculationsResponse } =
    useSearchCalculations(endpointVersion.version)
  const { simulateCalculation, response: simulateCalculationResponse } =
    useSimulateCalculation(endpointVersion.version)
  const { performCalculation, response: performCalculationResponse } =
    usePerformCalculation(endpointVersion.version)
  const { getCalculationResult, response: getCalculationResultResponse } =
    useCalculationResult(endpointVersion.version)

  /**
   * This needs to be refactored as it's not a clean solution to force
   * a re-render when the response changes.
   */
  useEffect(() => {
    if (endpointId === 'get_calculation') {
      updateResponse(getCalculationResponse)
    }
    if (endpointId === 'list_calculations') {
      updateResponse(getCalculationsResponse)
    }
    if (endpointId === 'search_calculations') {
      updateResponse(searchCalculationsResponse)
    }
    if (endpointId === 'simulate_calculation') {
      updateResponse(simulateCalculationResponse)
    }
    if (endpointId === 'perform_calculation') {
      updateResponse(performCalculationResponse)
    }
    if (endpointId === 'get_calculation_result') {
      updateResponse(getCalculationResultResponse)
    }
  }, [
    getCalculationResponse,
    getCalculationsResponse,
    searchCalculationsResponse,
    simulateCalculationResponse,
    performCalculationResponse,
    getCalculationResultResponse,
  ])

  const onClick = () => {
    switch (endpointId) {
      case 'list_calculations':
        getCalculations()
        break
      case 'get_calculation':
        const calculationId =
          typeof request.path?.calculationId === 'string'
            ? request.path?.calculationId
            : ''
        getCalculation(calculationId.toString())
        break
      case 'search_calculations':
        const searchString =
          typeof request.query?.searchString === 'string'
            ? request.query?.searchString
            : ''
        searchCalculations(searchString.toString())
        break
      case 'simulate_calculation':
        const simulatcalculationId =
          typeof request.path?.calculationId === 'string'
            ? request.path?.calculationId
            : ''
        simulateCalculation(simulatcalculationId.toString())
        break
      case 'perform_calculation':
        const calculationIdToPerform =
          typeof request.body?.calculation_id === 'string'
            ? request.body?.calculation_id
            : ''
        const calculationInput =
          typeof request.body?.calculation_input === 'object'
            ? request.body?.calculation_input
            : {}
        performCalculation(calculationIdToPerform.toString(), calculationInput)
        break
      case 'get_calculation_result':
        const id = typeof request.path?.id === 'string' ? request.path?.id : ''
        getCalculationResult(id.toString())
        break
      default:
        console.log('This endpoint is not yet supported.')
    }
  }

  return (
    <Button
      label="Run request"
      onClick={() => onClick()}
      color="indigo"
      fullWidth={true}
      disabled={endpointId === null ? true : false}
    />
  )
}
