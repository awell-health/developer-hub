import {
  type Endpoint,
  type EndpointVersion,
  type PathParameter,
  type QueryParameter,
  type RequestBodyParameter,
  type RequestType,
} from '../../../../types/restExplorer.types'

interface UseRequestHook {
  request: RequestType
}

interface UseRequestProps {
  endpoint: Endpoint | null
  endpointVersion: EndpointVersion | null
  queryParameters: QueryParameter[]
  pathParameters: PathParameter[]
  requestBodyParameters: RequestBodyParameter[]
}

export const useRequest = ({
  endpoint,
  endpointVersion,
  queryParameters,
  pathParameters,
  requestBodyParameters,
}: UseRequestProps): UseRequestHook => {
  const query =
    queryParameters.length > 0
      ? Object.fromEntries(
          queryParameters.map(({ name, value }) => [name, value])
        )
      : undefined

  const path =
    pathParameters.length > 0
      ? Object.fromEntries(
          pathParameters.map(({ name, value }) => [name, value])
        )
      : undefined

  const body =
    requestBodyParameters.length > 0
      ? Object.fromEntries(
          requestBodyParameters.map((parameter) => {
            let value = parameter?.value || '{}'

            if (parameter.type === 'object') {
              try {
                value = JSON.parse(
                  typeof value === 'string' ? value.toString() : '{}'
                )
              } catch (e) {
                value = 'Invalid calculation_input object'
                console.log(e)
              }
            }

            return [parameter.name, value]
          })
        )
      : undefined

  return {
    request: {
      endpoint: endpointVersion?.endpoint,
      method: endpoint?.method,
      query,
      path,
      body,
    },
  }
}
