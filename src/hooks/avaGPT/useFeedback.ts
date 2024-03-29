import {
  type PromptFeedback,
  type SubmitFeedbackOptions,
  submitFeedback as submitFeedbackToMarkprompt,
} from '@markprompt/core'
import { useCallback } from 'react'

import { useAbortController } from './useAbortController'
import type { PromptLoadingState } from './usePrompt'

export interface UseFeedbackOptions {
  /** Markprompt project key */
  projectKey: string
  /** ID for the current prompt */
  promptId?: string
  /** Enable and configure feedback functionality */
  feedbackOptions?: SubmitFeedbackOptions
  state: PromptLoadingState
}

export interface UseFeedbackResult {
  /** Abort any pending feedback submission */
  abort: () => void
  /** Submit feedback for the current prompt */
  submitFeedback: (feedback: PromptFeedback) => void
}

export function useFeedback({
  projectKey,
  promptId,
  feedbackOptions,
  state,
}: UseFeedbackOptions): UseFeedbackResult {
  if (!projectKey) {
    throw new Error(
      `Markprompt: a project key is required. Make sure to pass your Markprompt project key to useFeedback.`
    )
  }

  const { ref: controllerRef, abort } = useAbortController()

  const submitFeedback = useCallback(
    async (feedback: PromptFeedback) => {
      abort()

      // only submit feedback when we are done loading the answer
      if (state !== 'done') return

      // we need to be able to associate the feedback to a prompt
      if (!promptId) return

      const controller = new AbortController()
      controllerRef.current = controller

      const promise = submitFeedbackToMarkprompt(
        projectKey,
        { feedback, promptId },
        { ...feedbackOptions, signal: controller.signal }
      )

      promise.catch(() => {
        // ignore submitFeedback errors
      })

      promise.finally(() => {
        if (controllerRef.current === controller) {
          controllerRef.current = undefined
        }
      })
    },
    [abort, state, promptId, controllerRef, projectKey, feedbackOptions]
  )

  return { submitFeedback, abort }
}
