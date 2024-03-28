import { type Endpoint } from '../../types/restExplorer.types'

export const awellScoreEndpoints: Endpoint[] = [
  {
    id: 'list_calculations',
    method: 'GET',
    label: 'List calculations',
    versions: [
      {
        version: 'v1',
        endpoint: 'https://score-api.staging.awellhealth.com/v1/calculations',
        endpointLabel: '/v1/calculations',
        options: {
          headerParameters: [],
          pathParameters: [],
          queryParameters: [],
          requestBodyParameters: [],
        },
      },
    ],
  },
  {
    id: 'get_calculation',
    method: 'GET',
    label: 'Get calculation',
    versions: [
      {
        version: 'v1',
        endpoint: 'https://score-api.staging.awellhealth.com/v1/calculations/',
        endpointLabel: '/v1/calculations/{calculationId}',
        options: {
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
    ],
  },
  {
    id: 'search_calculations',
    method: 'GET',
    label: 'Search calculations',
    versions: [
      {
        version: 'v1',
        endpoint:
          'https://score-api.staging.awellhealth.com/v1/calculations/search',
        endpointLabel:
          '/v1/calculations/search?calculation_name={searchString}',
        options: {
          headerParameters: [],
          pathParameters: [],
          queryParameters: [
            { name: 'calculation_name', type: 'string', required: true },
          ],
          requestBodyParameters: [],
        },
      },
    ],
  },
  {
    id: 'simulate_calculation',
    method: 'GET',
    label: 'Simulate calculation',
    versions: [
      {
        version: 'v1',
        endpoint:
          'https://score-api.staging.awellhealth.com/v1/calculations/simulate/',
        endpointLabel: '/v1/calculations/simulate/{calculationId}',
        options: {
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
    ],
  },
  {
    id: 'perform_calculation',
    method: 'POST',
    label: 'Perform calculation',
    versions: [
      {
        version: 'v1',
        endpoint: 'https://score-api.staging.awellhealth.com/v1/calculations',
        endpointLabel: '/v1/calculations',
        options: {
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
      {
        version: 'v2',
        endpoint: 'https://score-api.staging.awellhealth.com/v2/calculations',
        endpointLabel: '/v2/calculations',
        options: {
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
    ],
  },
  {
    id: 'get_calculation_result',
    method: 'GET',
    label: 'Get calculation result',
    versions: [
      {
        version: 'v2',
        endpoint:
          'https://score-api.staging.awellhealth.com/v2/calculations/result/',
        endpointLabel: '/v2/calculations/result/{id}',
        options: {
          headerParameters: [],
          pathParameters: [
            {
              name: 'id',
              type: 'string',
              required: true,
            },
          ],
          queryParameters: [],
          requestBodyParameters: [],
        },
      },
    ],
  },
]
