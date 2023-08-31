import { type PromptFeedback } from '@markprompt/core'
import React, {
  type ComponentPropsWithoutRef,
  type ReactElement,
  useEffect,
  useState,
} from 'react'

import { Button } from '@/components/Button'

interface FeedbackProps extends ComponentPropsWithoutRef<'aside'> {
  submitFeedback: (feedback: PromptFeedback) => void
  abortFeedbackRequest: () => void
}

export function Feedback(props: FeedbackProps): ReactElement {
  const { submitFeedback, abortFeedbackRequest, ...rest } = props

  const [feedback, setFeedback] = useState<PromptFeedback>()

  const handleFeedback = (feedback: PromptFeedback) => {
    submitFeedback(feedback)
    setFeedback(feedback)
  }

  useEffect(() => {
    // Abort feedback request on unmount
    return () => abortFeedbackRequest()
  }, [abortFeedbackRequest])

  return (
    <aside {...rest}>
      <h4>Was this response helpful?</h4>

      <div className="flex space-x-2">
        <Button
          aria-label="Yes"
          type="button"
          color="white"
          onClick={() => handleFeedback({ vote: '1' })}
          data-active={feedback?.vote === '1'}
          size="xs"
          className="data-[active=true]:cursor-not-allowed data-[active=true]:bg-slate-200 data-[active=true]:dark:bg-slate-700"
        >
          Yes
        </Button>
        <Button
          aria-label="No"
          type="button"
          color="white"
          onClick={() => handleFeedback({ vote: '-1' })}
          data-active={feedback?.vote === '-1'}
          size="xs"
          className="data-[active=true]:cursor-not-allowed data-[active=true]:bg-slate-200 data-[active=true]:dark:bg-slate-700"
        >
          No
        </Button>
      </div>
    </aside>
  )
}
