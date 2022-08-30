import {
  type Endpoint,
  type EndpointVersion,
  type HeaderParameter,
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
  headerParameters: HeaderParameter[]
  queryParameters: QueryParameter[]
  pathParameters: PathParameter[]
  requestBodyParameters: RequestBodyParameter[]
}

export const useRequest = ({
  endpoint,
  endpointVersion,
  headerParameters,
  queryParameters,
  pathParameters,
  requestBodyParameters,
}: UseRequestProps): UseRequestHook => {
  const headers =
    headerParameters.length > 0
      ? Object.fromEntries(
          headerParameters.map(({ name, value }) => [name, value])
        )
      : undefined

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
            let value

            if (parameter.type === 'object') {
              value = parameter?.value || '{}'
              try {
                value = JSON.parse(
                  typeof value === 'string' ? value.toString() : '{}'
                )
              } catch (e) {
                value = 'Invalid calculation_input object'
                console.log(e)
              }
            } else {
              value = parameter?.value || ''
            }

            return [parameter.name, value]
          })
        )
      : undefined

  const request = {
    endpoint: endpointVersion?.endpoint,
    method: endpoint?.method,
    headers,
    query,
    path,
    body,
  }

  return {
    request,
  }
}
