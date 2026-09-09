import axios, { AxiosError } from 'axios'
import { useState } from 'react'

import { type RequestType } from '../../../../types/restExplorer.types'

interface UseMakeRequestHook {
  loading: boolean
  response: unknown
  makeRequest: (request: RequestType) => Promise<void>
}

export const useMakeRequest = (): UseMakeRequestHook => {
  const [response, setResponse] = useState<unknown>(null)
  const [loading, setLoading] = useState(true)

  const makeRequest = async (request: RequestType) => {
    setLoading(true)
    setResponse(null)

    let pathString = ''

    if (request.path) {
      const pathParameters: string[] = []

      Object.keys(request.path).map((key) => {
        const pathValue = request?.path?.[key]

        pathParameters.push(
          typeof pathValue === 'string' ? pathValue.toString() : ''
        )
      })

      pathString = pathParameters.join('/')
    }

    // Runs in the visitor's browser: `request.endpoint` is one of the awell-score URLs in
    // src/config/awell-score/endpoints, picked from the explorer's dropdown, and the request
    // goes out from the user's own machine to the public awell-score API. There is no server
    // here to forge a request from. Register: docs/standards/sast-finding-remediation.md
    const endpoint = `${request.endpoint}${pathString}`

    try {
      if (request.method === 'GET') {
        // nosemgrep: AIK_js_ssrf
        const { data } = await axios.get(endpoint, {
          params: request.query,
        })

        setResponse(data)
      }

      if (request.method === 'POST') {
        // nosemgrep: AIK_js_ssrf
        const { data } = await axios.post(endpoint, {
          ...request.body,
          meta: { source: 'developer_hub_explorer' },
        })

        setResponse(data)
      }
    } catch (error) {
      const err = error as AxiosError

      if (err.response) {
        setResponse({
          status: err.response.status,
          headers: err.response.headers,
          data: err.response.data,
        })
      } else if (err.request) {
        // The request was made but no response was received
        setResponse({
          request: err.request,
        })
      } else {
        // Something happened in setting up the request that triggered an Error
        setResponse({
          message: err.message,
        })
      }
    }
    setLoading(false)
  }

  return {
    loading,
    makeRequest,
    response,
  }
}
