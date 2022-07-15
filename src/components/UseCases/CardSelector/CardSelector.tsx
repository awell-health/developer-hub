import { RadioGroup } from '@headlessui/react'
import clsx from 'clsx'

interface CardSelectorProps {
  selected: string
  options: Array<{
    label: string
    disabled: boolean
  }>
  onCardSelect: (newOption: string) => void
}

export const CardSelector = ({
  options,
  onCardSelect,
  selected,
}: CardSelectorProps) => {
  return (
    <div>
      <RadioGroup value={selected} onChange={onCardSelect}>
        <div className="flex gap-2">
          {options.map((option) => (
            <RadioGroup.Option
              key={option.label}
              value={option.label}
              className={({ active, checked }) =>
                clsx(
                  !option.disabled
                    ? 'cursor-pointer focus:outline-none'
                    : 'opacity-25 cursor-not-allowed',
                  active ? 'ring-1 ring-sky-400' : '',
                  checked
                    ? 'text-blue-600 border-2 border-blue-600 dark:text-blue-500 border-blue-500'
                    : 'bg-white dark:bg-transparent dark:text-slate-100 sborder-slate-400 text-slate-900 hover:bg-gray-50',
                  'border rounded-md py-1 px-2 flex items-center justify-center text-sm font-semibold uppercase sm:flex-1'
                )
              }
              disabled={option.disabled}
            >
              <RadioGroup.Label as="span">{option.label}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}
