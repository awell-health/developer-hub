import { Switch } from '@headlessui/react'
import clsx from 'clsx'

import { type Question } from '../../../../../types/generated/api.types'
import { Label } from '../Atoms'

interface BooleanProps {
  question: Question
  onChange: (newValue: boolean) => void
  value: boolean
}

export const Boolean = ({ question, onChange, value }: BooleanProps) => {
  const onChangeBoolean = () => {
    onChange(!value)
  }

  return (
    <>
      <Label
        htmlFor={question.id}
        label={question.title}
        mandatory={question.questionConfig?.mandatory}
      />
      <Switch
        checked={value}
        onChange={() => onChangeBoolean()}
        className={clsx(
          value ? 'bg-indigo-600' : 'bg-gray-200',
          'mt-1 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span className="sr-only">{question.title}</span>
        <span
          aria-hidden="true"
          className={clsx(
            value ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </>
  )
}
