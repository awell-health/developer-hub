import { type Endpoint } from '../../types/restExplorer.types'

export const awellScoreEndpoints: Endpoint[] = [
  {
    id: 'list_calculations',
    method: 'GET',
    endpoint: 'https://score-api.staging.awellhealth.com/v1/calculations',
    label: 'List calculations',
    options: {
      authorization: false,
      headerParameters: [],
      pathParameters: [],
      queryParameters: [],
      requestBodyParameters: [],
    },
  },
  {
    id: 'get_calculation',
    method: 'GET',
    endpoint:
      'https://score-api.staging.awellhealth.com/v1/calculations/{calculationId}',
    label: 'Get calculation',
    options: {
      authorization: false,
      headerParameters: [],
      pathParameters: [
        {
          name: 'calculationId',
          type: 'string',
          required: true,
        },
      ],
      queryParameters: [],
      requestBodyParameters: [],
    },
  },
  {
    id: 'search_calculations',
    method: 'GET',
    endpoint:
      'https://score-api.staging.awellhealth.com/v1/calculations/search?calculation_name={searchString}',
    label: 'Search calculations',
    options: {
      authorization: false,
      headerParameters: [],
      pathParameters: [],
      queryParameters: [
        { name: 'searchString', type: 'string', required: true },
      ],
      requestBodyParameters: [],
    },
  },
  {
    id: 'simulate_calculation',
    method: 'GET',
    endpoint:
      'https://score-api.staging.awellhealth.com/v1/calculations/simulate/{calculationId}',
    label: 'Simulate calculation',
    options: {
      authorization: false,
      headerParameters: [],
      pathParameters: [
        {
          name: 'calculationId',
          type: 'string',
          required: true,
        },
      ],
      queryParameters: [],
      requestBodyParameters: [],
    },
  },
  {
    id: 'perform_calculation',
    method: 'POST',
    endpoint: 'https://score-api.staging.awellhealth.com/v1/calculations',
    label: 'Perform calculation',
    options: {
      authorization: false,
      headerParameters: [],
      pathParameters: [],
      queryParameters: [],
      requestBodyParameters: [
        {
          name: 'calculation_id',
          type: 'string',
          required: true,
        },
        { name: 'calculation_input', type: 'object', required: false },
      ],
    },
  },
]
