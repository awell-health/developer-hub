import { Endpoint } from '../../../types/restExplorer.types'

interface EndpointSelectorProps {
  endpoints: Endpoint[]
  selectedEndpoint: Endpoint | null
  onChange: (newEndpoint: Endpoint | null) => void
}

export const EndpointSelector = ({
  endpoints,
  selectedEndpoint,
  onChange,
}: EndpointSelectorProps) => {
  return (
    <div className="flex flex-col">
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
            onChange(newEndpoint)
          } else {
            onChange(null)
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
      {selectedEndpoint && (
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
            {selectedEndpoint.endpoint}
          </span>
        </small>
      )}
    </div>
  )
}
