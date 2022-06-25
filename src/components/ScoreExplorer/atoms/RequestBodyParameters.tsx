import { useEffect } from 'react'

import { type RequestBodyParameter } from '../../../types/restExplorer.types'

interface RequestBodyParametersProps {
  requestBodyParameters: RequestBodyParameter[]
  onChange: (newRequestBodyParameters: RequestBodyParameter[]) => void
}

const defaultObjectValue = {
  calculation_input_id_1: 'value_1',
  calculation_input_id_2: 'value_2',
  calculation_input_id_3: 'value_3',
}

export const RequestBodyParameters = ({
  requestBodyParameters,
  onChange,
}: RequestBodyParametersProps) => {
  const updateRequestBodyParameter = ({
    parameterName,
    newValue,
  }: {
    parameterName: string
    newValue: string
  }) => {
    const updatedRequestBodyParameters = requestBodyParameters.map(
      (requestBodyParameter) => {
        if (requestBodyParameter.name === parameterName) {
          return {
            ...requestBodyParameter,
            value: newValue,
          }
        }

        return requestBodyParameter
      }
    )

    onChange(updatedRequestBodyParameters)
  }

  useEffect(() => {
    updateRequestBodyParameter({
      parameterName: 'calculation_input',
      newValue: JSON.stringify(defaultObjectValue, null, 2),
    })
  }, [])

  return (
    <>
      <h2 className="mt-6 border-b border-gray-200 pb-3 text-lg font-medium tracking-wide dark:border-slate-600">
        Body
      </h2>
      <div className="mt-6 pb-6">
        {requestBodyParameters.map((requestBodyParameter) => (
          <div
            className="mb-4 flex items-start"
            key={requestBodyParameter.name}
          >
            {requestBodyParameter.type === 'string' && (
              <>
                {' '}
                <div className="w-1/3 pt-2 pr-2 text-sm font-medium dark:text-white">
                  {requestBodyParameter.name}
                  {requestBodyParameter.required && (
                    <span className="ml-1 text-red-600">*</span>
                  )}
                  <span className="block text-xs font-normal text-gray-500 dark:text-white">
                    {requestBodyParameter.type}
                  </span>
                </div>
                <div className="w-2/3 pl-2">
                  <input
                    type="text"
                    className="w-full text-gray-600 border-gray-300 rounded-md sm:text-sm shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
                    id={requestBodyParameter.name}
                    name={requestBodyParameter.name}
                    onChange={(e) =>
                      updateRequestBodyParameter({
                        parameterName: requestBodyParameter.name,
                        newValue: e.target.value,
                      })
                    }
                    value={
                      typeof requestBodyParameter.value === 'string'
                        ? requestBodyParameter.value.toString()
                        : ''
                    }
                  />
                </div>
              </>
            )}
            {requestBodyParameter.type === 'object' && (
              <div className="w-full">
                <div className="w-full pt-2 pr-2 text-sm font-medium dark:text-white">
                  {requestBodyParameter.name}
                  {requestBodyParameter.required && (
                    <span className="ml-1 text-red-600">*</span>
                  )}
                  <span className="block text-xs font-normal text-gray-500 dark:text-white">
                    {requestBodyParameter.type}
                  </span>
                </div>
                <div className="w-full pt-2">
                  <textarea
                    className="w-full text-gray-600 border-gray-300 rounded-md sm:text-sm shadow-sm focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:border-gray-700 dark:focus:ring-gray-700"
                    id={requestBodyParameter.name}
                    name={requestBodyParameter.name}
                    rows={10}
                    onChange={(e) =>
                      updateRequestBodyParameter({
                        parameterName: requestBodyParameter.name,
                        newValue: e.target.value,
                      })
                    }
                    value={
                      typeof requestBodyParameter.value === 'string'
                        ? requestBodyParameter.value.toString()
                        : ''
                    }
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  )
}
