import { useEffect } from 'react'

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
    stacks.find((stack) => {
      if (
        frontEndStacks.map((fe) => fe.label).includes(selectedStack.frontEnd)
      ) {
        return stack?.frontEnd?.label === selectedStack.frontEnd
      } else {
        return stack?.frontEnd?.label === frontEndStacks[0].label
      }
    })?.backEnd || []

  const onFrontEndChange = (newFrontEndLanguage: string) => {
    onStackChange({ newFrontEnd: newFrontEndLanguage })
  }

  const onBackEndChange = (newBackEndLanguage: string) => {
    onStackChange({ newBackEnd: newBackEndLanguage })
  }

  useEffect(() => {
    /**
     * When there is only one front-end stack,
     * make sure that one is elected
     */
    if (frontEndStacks.length === 1) {
      onFrontEndChange(frontEndStacks[0].label)
    }

    /**
     * When there is an active stack in localstorage which does not exist,
     * set selected front-end to first one
     */
    if (
      !frontEndStacks.map((fe) => fe.label).includes(selectedStack.frontEnd)
    ) {
      onFrontEndChange(frontEndStacks[0].label)
    }

    /**
     * When there is an active stack in localstorage which does not exist,
     * set selected back-end to first one
     */
    if (!backEndStacks.map((be) => be.label).includes(selectedStack.backEnd)) {
      onBackEndChange(backEndStacks[0]?.label || '')
    }
  }, [selectedStack])

  return (
    <>
      {frontEndStacks.length !== 1 && !frontEndStacks[0].hide && (
        <div className="flex items-center mr-12">
          <span className="text-base font-semibold text-slate-800 dark:text-slate-200 mr-2">
            Front-end:{' '}
          </span>
          <CardSelector
            selected={selectedStack.frontEnd}
            options={frontEndStacks}
            onCardSelect={onFrontEndChange}
          />
        </div>
      )}
      {backEndStacks.length !== 0 && (
        <div className="flex items-center">
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
