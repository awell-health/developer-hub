import { useEffect } from 'react'

import { type RequestType } from '../../../types/restExplorer.types'
import { Button } from '../../Button'
import {
  useCalculation,
  useCalculations,
  usePerformCalculation,
  useSearchCalculations,
  useSimulateCalculation,
} from '../hooks'

interface RunQueryButtonProps {
  updateResponse: (response: unknown) => void
  endpointId?: string
  request: RequestType
}

export const RunQueryButton = ({
  updateResponse,
  endpointId,
  request,
}: RunQueryButtonProps) => {
  const { getCalculation, response: getCalculationResponse } = useCalculation()
  const { getCalculations, response: getCalculationsResponse } =
    useCalculations()
  const { searchCalculations, response: searchCalculationsResponse } =
    useSearchCalculations()
  const { simulateCalculation, response: simulateCalculationResponse } =
    useSimulateCalculation()
  const { performCalculation, response: performCalculationResponse } =
    usePerformCalculation()

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
  }, [
    getCalculationResponse,
    getCalculationsResponse,
    searchCalculationsResponse,
    simulateCalculationResponse,
    performCalculationResponse,
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
