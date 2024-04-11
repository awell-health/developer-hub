import { useState } from 'react'

import { awellScoreEndpoints } from '../../config/awell-score/endpoints'
import {
  type Endpoint,
  type EndpointVersion,
  type HeaderParameter,
  type PathParameter,
  type QueryParameter,
  type RequestBodyParameter,
} from '../../types/restExplorer.types'
import {
  EndpointSelector,
  HeaderParameters,
  PathParameters,
  QueryParameters,
  Request,
  RequestBodyParameters,
  Response,
  RunQueryButton,
} from './atoms'
import { useRequest } from './hooks'

export const ScoreExplorer = () => {
  const [endpoint, setEndpoint] = useState<Endpoint | null>(null)
  const [endpointVersion, setEndpointVersion] =
    useState<EndpointVersion | null>(null)
  const [pathParameters, setPathParameters] = useState<PathParameter[]>([])
  const [queryParameters, setQueryParameters] = useState<QueryParameter[]>([])
  const [requestBodyParameters, setRequestBodyParameters] = useState<
    RequestBodyParameter[]
  >([])
  const [headerParameters, setHeaderParameters] = useState<HeaderParameter[]>(
    []
  )

  const { request } = useRequest({
    endpoint,
    endpointVersion,
    headerParameters,
    queryParameters,
    pathParameters,
    requestBodyParameters,
  })

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [response, setResponse] = useState<any>(null)

  const resetEndPointParameters = () => {
    setPathParameters([])
    setQueryParameters([])
    setHeaderParameters([])
    setRequestBodyParameters([])
  }

  const changeEndpoint = (
    newEndpoint: Endpoint | null,
    newEndpointVersion: EndpointVersion | null
  ) => {
    resetEndPointParameters()
    setEndpoint(newEndpoint)
    setEndpointVersion(newEndpointVersion)
    if (newEndpoint && newEndpointVersion) {
      setPathParameters(newEndpointVersion.options.pathParameters)
      setQueryParameters(newEndpointVersion.options.queryParameters)
      setRequestBodyParameters(newEndpointVersion.options.requestBodyParameters)
      setHeaderParameters(newEndpointVersion.options.headerParameters)
    }
  }

  const changePathParameters = (newPathParameters: PathParameter[]) => {
    setPathParameters(newPathParameters)
  }

  const changeQueryParameters = (newQueryParameters: QueryParameter[]) => {
    setQueryParameters(newQueryParameters)
  }

  const changeRequestBodyParameters = (
    newRequestBodyParameters: RequestBodyParameter[]
  ) => {
    setRequestBodyParameters(newRequestBodyParameters)
  }

  const changeHeaderParameters = (newHeaderParameters: HeaderParameter[]) => {
    setHeaderParameters(newHeaderParameters)
  }

  const updateResponse = (newResponse: unknown) => {
    setResponse(newResponse)
  }

  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div className="flex-1 2lg:mr-6 xl:mr-12 2xl:mr-14">
        <div className="mt-1 flex justify-between">
          <div className="mr-4 flex flex-1 space-x-4">
            <EndpointSelector
              endpoints={awellScoreEndpoints}
              selectedEndpoint={endpoint}
              selectedEndpointVersion={endpointVersion}
              onChange={changeEndpoint}
            />
          </div>
        </div>
        {headerParameters.length > 0 && (
          <HeaderParameters
            headerParameters={headerParameters}
            onChange={changeHeaderParameters}
          />
        )}
        {pathParameters.length > 0 && (
          <PathParameters
            pathParameters={pathParameters}
            onChange={changePathParameters}
          />
        )}
        {queryParameters.length > 0 && (
          <QueryParameters
            queryParameters={queryParameters}
            onChange={changeQueryParameters}
          />
        )}
        {requestBodyParameters.length > 0 && (
          <RequestBodyParameters
            requestBodyParameters={requestBodyParameters}
            onChange={changeRequestBodyParameters}
          />
        )}
        <div className="mt-6 border-t border-gray-200 dark:border-slate-600">
          <div className="py-3">
            {(endpoint?.id === 'list_calculations' ||
              endpoint?.id === 'search_calculations') && (
              <small className="mt-2 inline-block dark:text-white">
                The response for this operation will be simplified and will only
                return the id and name for every calculation.{' '}
                <strong>Open the console to see the full response.</strong>
              </small>
            )}
          </div>
          {endpointVersion && (
            <RunQueryButton
              updateResponse={updateResponse}
              endpointVersion={endpointVersion}
              request={request}
              endpointId={endpoint?.id}
            />
          )}
        </div>
      </div>
      <div className="relative mt-1 mb-8">
        <div className="sticky top-32 w-full lg:w-[440px]">
          <Request request={request} />
          <br />
          {response && <Response response={response} />}
        </div>
      </div>
    </div>
  )
}
