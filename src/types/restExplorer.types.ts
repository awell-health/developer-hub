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
  options: {
    authorization: boolean
    headerParameters: HeaderParameter[]
    queryParameters: QueryParameter[]
    pathParameters: PathParameter[]
    requestBodyParameters: RequestBodyParameter[]
  }
}
export type Endpoint = {
  id: string
  method: 'GET' | 'POST'
  label: string
  versions: Array<EndpointVersion>
}

export type RequestType = {
  endpoint?: string
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
