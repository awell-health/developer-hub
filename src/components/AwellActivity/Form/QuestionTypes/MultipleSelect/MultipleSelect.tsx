import { useState } from 'react'

import {
  type Option,
  type Question,
} from '../../../../../types/generated/api.types'
import { Label } from '../Atoms'

interface MultipleSelectProps {
  question: Question
  onChange: (newValue: Array<string | number>) => void
}

export const MultipleSelect = ({ question, onChange }: MultipleSelectProps) => {
  const [checkedOptions, setCheckedOptions] = useState<Array<Option>>([])
  const options = question.options || []

  const handleCheck = (option: Option) => {
    let updatedList = [...checkedOptions]
    if (!isChecked(option)) {
      updatedList = [...checkedOptions, option]
    } else {
      updatedList.splice(checkedOptions.indexOf(option), 1)
    }
    setCheckedOptions(updatedList)
    // We need an array of values to send to the backend
    onChange(updatedList.map((listItem) => JSON.stringify(listItem.value)))
  }

  const isChecked = (option: Option) => checkedOptions.includes(option)

  return (
    <>
      <fieldset className="space-y-4">
        <Label
          htmlFor={question.id}
          label={question.title}
          mandatory={question.questionConfig?.mandatory}
        />
        {options.map((option) => (
          <div key={option.id} className="relative flex items-start">
            <div className="flex items-center h-5">
              <input
                id={option.id}
                type="checkbox"
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                checked={isChecked(option)}
                onChange={() => handleCheck(option)}
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor={option.id} className="font-medium text-gray-700">
                {option.label}
              </label>
            </div>
          </div>
        ))}
      </fieldset>
    </>
  )
}
