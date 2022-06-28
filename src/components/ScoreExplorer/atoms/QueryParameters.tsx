import { type QueryParameter } from '../../../types/restExplorer.types'

interface QueryParametersProps {
  queryParameters: QueryParameter[]
  onChange: (newQueryParameters: QueryParameter[]) => void
}

export const QueryParameters = ({
  queryParameters,
  onChange,
}: QueryParametersProps) => {
  const updateQueryParameter = ({
    parameterName,
    newValue,
  }: {
    parameterName: string
    newValue: string
  }) => {
    const updatedQueryParameters = queryParameters.map((queryParameter) => {
      if (queryParameter.name === parameterName) {
        return {
          ...queryParameter,
          value: newValue,
        }
      }

      return queryParameter
    })

    onChange(updatedQueryParameters)
  }
  return (
    <>
      <h2 className="mt-6 border-b border-gray-200 pb-3 text-lg font-medium tracking-wide dark:border-slate-600">
        Query parameters
      </h2>
      <div className="mt-6 pb-6">
        {queryParameters.map((queryParameter) => (
          <div className="mb-4 flex items-start" key={queryParameter.name}>
            <div className="w-1/3 pt-2 pr-2 text-sm font-medium dark:text-white">
              {queryParameter.name}
              {queryParameter.required && (
                <span className="ml-1 text-red-600">*</span>
              )}
              <span className="block text-xs font-normal text-gray-500 dark:text-white">
                {queryParameter.type}
              </span>
            </div>
            <div className="w-2/3 pl-2">
              <input
                type="text"
                className="w-full text-gray-600 border-gray-300 rounded-md sm:text-sm shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
                id={queryParameter.name}
                name={queryParameter.name}
                onChange={(e) =>
                  updateQueryParameter({
                    parameterName: queryParameter.name,
                    newValue: e.target.value,
                  })
                }
                value={
                  typeof queryParameter.value === 'string'
                    ? queryParameter.value.toString()
                    : ''
                }
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
