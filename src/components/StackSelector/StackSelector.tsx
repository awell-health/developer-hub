import { type StackType } from '../../types/useCases.types'
import { CardSelector } from './atoms'

interface StackSelectorProps {
  selectedStack: {
    frontEnd: string
    backEnd: string
  }
  stacks: StackType[]
  onStackChange: ({
    newFrontEnd,
    newBackEnd,
  }: {
    newFrontEnd?: string
    newBackEnd?: string
  }) => void
}

export const StackSelector = ({
  selectedStack,
  stacks,
  onStackChange,
}: StackSelectorProps) => {
  const frontEndStacks = stacks.map((stack) => stack.frontEnd)
  const backEndStacks =
    stacks.find((stack) => stack.frontEnd.label === selectedStack.frontEnd)
      ?.backEnd || []

  const onFrontEndChange = (newFrontEndLanguage: string) => {
    onStackChange({ newFrontEnd: newFrontEndLanguage })
  }

  const onBackEndChange = (newBackEndLanguage: string) => {
    onStackChange({ newBackEnd: newBackEndLanguage })
  }

  return (
    <>
      <div className="flex items-center">
        <span className="text-base font-semibold text-slate-800 dark:text-slate-200 mr-2">
          Front-end:{' '}
        </span>
        <CardSelector
          selected={selectedStack.frontEnd}
          options={frontEndStacks}
          onCardSelect={onFrontEndChange}
        />
      </div>
      {backEndStacks.length !== 0 && (
        <div className="flex items-center ml-12">
          <span className="text-base font-semibold text-slate-800 dark:text-slate-200 mr-2">
            Back-end:{' '}
          </span>
          <CardSelector
            selected={selectedStack.backEnd}
            options={backEndStacks}
            onCardSelect={onBackEndChange}
          />
        </div>
      )}
    </>
  )
}
