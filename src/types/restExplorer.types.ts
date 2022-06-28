export type QueryParameter = {
  name: string
  type: 'string'
  required: boolean
  value?: unknown
}

export type HeaderParameter = {
  name: string
  type: 'string'
  required: boolean
  value?: unknown
}

export type RequestBodyParameter = {
  name: string
  type: 'string' | 'object'
  required: boolean
  value?: unknown
}

export type PathParameter = {
  name: string
  type: 'string'
  required: boolean
  value?: unknown
}

type API_VERSIONS = 'v1' | 'v2'

export type EndpointVersion = {
  version: API_VERSIONS
  endpoint: string
  endpointLabel: string
  options: {
    headerParameters: HeaderParameter[]
    queryParameters: QueryParameter[]
    pathParameters: PathParameter[]
    requestBodyParameters: RequestBodyParameter[]
  }
}

type MethodEnum = 'GET' | 'POST'

export type Endpoint = {
  id: string
  method: MethodEnum
  label: string
  versions: Array<EndpointVersion>
}

export type RequestType = {
  endpoint?: string
  method?: MethodEnum
  headers?: {
    [key in string]: unknown
  }
  body?: {
    [key in string]: unknown
  }
  query?: {
    [key in string]: unknown
  }
  path?: {
    [key in string]: unknown
  }
}
