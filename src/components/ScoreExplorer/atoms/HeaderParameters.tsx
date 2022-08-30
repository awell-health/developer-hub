import { type HeaderParameter } from '../../../types/restExplorer.types'

interface HeaderParametersProps {
  headerParameters: HeaderParameter[]
  onChange: (newHeaderParameters: HeaderParameter[]) => void
}

export const HeaderParameters = ({
  headerParameters,
  onChange,
}: HeaderParametersProps) => {
  const updateHeaderParameter = ({
    parameterName,
    newValue,
  }: {
    parameterName: string
    newValue: string
  }) => {
    const updatedHeaderParameters = headerParameters.map((headerParameter) => {
      if (headerParameter.name === parameterName) {
        return {
          ...headerParameter,
          value: newValue,
        }
      }

      return headerParameter
    })

    onChange(updatedHeaderParameters)
  }
  return (
    <>
      <h2 className="mt-6 border-b border-gray-200 pb-3 text-lg font-medium tracking-wide dark:border-slate-600">
        Header parameters
      </h2>
      <div className="mt-6 pb-6">
        {headerParameters.map((headerParameter) => (
          <div className="mb-4 flex items-start" key={headerParameter.name}>
            <div className="w-1/3 pt-2 pr-2 text-sm font-medium dark:text-white">
              {headerParameter.name}
              {headerParameter.required && (
                <span className="ml-1 text-red-600">*</span>
              )}
              <span className="block text-xs font-normal text-gray-500 dark:text-white">
                {headerParameter.type}
              </span>
            </div>
            <div className="w-2/3 pl-2">
              <input
                type="text"
                className="w-full text-gray-600 border-gray-300 rounded-md sm:text-sm shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
                id={headerParameter.name}
                name={headerParameter.name}
                onChange={(e) =>
                  updateHeaderParameter({
                    parameterName: headerParameter.name,
                    newValue: e.target.value,
                  })
                }
                value={
                  typeof headerParameter.value === 'string'
                    ? headerParameter.value
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
