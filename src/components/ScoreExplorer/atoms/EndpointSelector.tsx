import {
  type Endpoint,
  type EndpointVersion,
} from '../../../types/restExplorer.types'

interface EndpointSelectorProps {
  endpoints: Endpoint[]
  selectedEndpoint: Endpoint | null
  selectedEndpointVersion: EndpointVersion | null
  onChange: (
    newEndpoint: Endpoint | null,
    endpointVersion: EndpointVersion | null
  ) => void
}

export const EndpointSelector = ({
  endpoints,
  selectedEndpoint,
  selectedEndpointVersion,
  onChange,
}: EndpointSelectorProps) => {
  return (
    <div className="">
      <div className="flex flex-row">
        <div>
          <select
            className="w-64 text-base text-gray-600 shadow-sm border-gray-300 rounded-md focus:outline-none sm:text-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 px-3 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
            data-testid="endpoint"
            name="endpoint"
            value={selectedEndpoint?.id || ''}
            onChange={(e) => {
              const newEndpoint = endpoints.find(
                (endpoint) => endpoint.id === e.target.value
              )

              if (newEndpoint) {
                const latestEndpointVersion =
                  newEndpoint.versions.at(-1) || null
                onChange(newEndpoint, latestEndpointVersion)
              } else {
                onChange(null, null)
              }
            }}
          >
            <option disabled value="">
              Select endpoint
            </option>
            {endpoints.map((endpoint) => (
              <option key={endpoint.id} value={endpoint.id}>
                {endpoint.label}
              </option>
            ))}
          </select>
        </div>
        {selectedEndpoint && (
          <div className="ml-2">
            <select
              className="w-24 text-base text-gray-600 shadow-sm border-gray-300 rounded-md focus:outline-none sm:text-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 px-3 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
              data-testid="endpoint"
              name="endpoint"
              value={
                selectedEndpointVersion?.version ||
                selectedEndpoint.versions.at(-1)?.version
              }
              onChange={(e) => {
                const newEndpointVersion = selectedEndpoint.versions.find(
                  (endpointVersion) =>
                    endpointVersion.version === e.target.value
                )

                if (newEndpointVersion) {
                  onChange(selectedEndpoint, newEndpointVersion)
                } else {
                  onChange(selectedEndpoint, null)
                }
              }}
            >
              <option disabled value="">
                Version
              </option>
              {selectedEndpoint.versions.map((endpointVersion) => (
                <option
                  key={endpointVersion.version}
                  value={endpointVersion.version}
                >
                  {endpointVersion.version}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
      <div>
        {selectedEndpoint && selectedEndpointVersion && (
          <small className="mt-2 inline-block">
            <span
              className={`pr-2 font-semibold ${
                selectedEndpoint.method === 'GET'
                  ? 'text-sky-500 dark:text-sky-400'
                  : selectedEndpoint.method === 'POST'
                  ? 'text-green-600 dark:text-green-500'
                  : ''
              }`}
            >
              {selectedEndpoint.method}
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              {selectedEndpointVersion.endpointLabel}
            </span>
          </small>
        )}
      </div>
    </div>
  )
}
