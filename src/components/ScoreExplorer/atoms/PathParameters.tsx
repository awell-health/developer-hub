import { type PathParameter } from '../../../types/restExplorer.types'

interface PathParametersProps {
  pathParameters: PathParameter[]
  onChange: (newPathParameters: PathParameter[]) => void
}

export const PathParameters = ({
  pathParameters,
  onChange,
}: PathParametersProps) => {
  const updatePathParameter = ({
    parameterName,
    newValue,
  }: {
    parameterName: string
    newValue: string
  }) => {
    const updatedPathParameters = pathParameters.map((pathParameter) => {
      if (pathParameter.name === parameterName) {
        return {
          ...pathParameter,
          value: newValue,
        }
      }

      return pathParameter
    })

    onChange(updatedPathParameters)
  }
  return (
    <>
      <h2 className="mt-6 border-b border-gray-200 pb-3 text-lg font-medium tracking-wide dark:border-slate-600">
        Path parameters
      </h2>
      <div className="mt-6 pb-6">
        {pathParameters.map((pathParameter) => (
          <div className="mb-4 flex items-start" key={pathParameter.name}>
            <div className="w-1/3 pt-2 pr-2 text-sm font-medium dark:text-white">
              {pathParameter.name}
              {pathParameter.required && (
                <span className="ml-1 text-red-600">*</span>
              )}
              <span className="block text-xs font-normal text-gray-500 dark:text-white">
                {pathParameter.type}
              </span>
            </div>
            <div className="w-2/3 pl-2">
              <input
                type="text"
                className="w-full text-gray-600 border-gray-300 rounded-md sm:text-sm shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
                id={pathParameter.name}
                name={pathParameter.name}
                onChange={(e) =>
                  updatePathParameter({
                    parameterName: pathParameter.name,
                    newValue: e.target.value,
                  })
                }
                value={
                  typeof pathParameter.value === 'string'
                    ? pathParameter.value
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
