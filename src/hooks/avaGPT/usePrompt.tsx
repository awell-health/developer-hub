import { useCallback, useEffect, useMemo, useState } from 'react'

import {
  type SubmitPromptOptions,
  submitPrompt as submitPromptToMarkprompt,
} from './markprompt_api/submitPrompt'
import { type FileSectionReference, type PromptFeedback } from './types'
import type { MarkpromptOptions } from './types.js'
import { useAbortController } from './useAbortController'
import { useFeedback } from './useFeedback'
import { useLogRequest } from './useLogRequest'
import { getUniqueReferences } from './utils'
import { isAbortError } from './utils/markprompt'

export type PromptLoadingState =
  | 'indeterminate'
  | 'preload'
  | 'streaming-answer'
  | 'done'

export interface UsePromptOptions {
  /** Markprompt project key */
  projectKey: string
  /** Enable and configure prompt functionality */
  promptOptions?: Omit<SubmitPromptOptions, 'signal'>
  /** Enable and configure feedback functionality */
  feedbackOptions?: MarkpromptOptions['feedback']
  /** Display debug info */
  debug?: boolean
}

export interface UsePromptResult {
  answer: string
  prompt: string
  references: FileSectionReference[]
  state: PromptLoadingState
  abort: () => void
  setPrompt: (prompt: string) => void
  submitFeedback: (feedback: PromptFeedback) => void
  logRequest: () => void
  abortFeedbackRequest: () => void
  submitPrompt: () => void
}

export function usePrompt({
  projectKey,
  promptOptions,
  feedbackOptions,
  debug,
}: UsePromptOptions): UsePromptResult {
  if (!projectKey) {
    throw new Error(
      'Markprompt: a project key is required. Make sure to pass the projectKey to useMarkprompt.'
    )
  }

  const [state, setState] = useState<PromptLoadingState>('indeterminate')
  const [answer, setAnswer] = useState('')
  const [references, setReferences] = useState<FileSectionReference[]>([])
  const [prompt, setPrompt] = useState<string>('')
  const [promptId, setPromptId] = useState<string>()

  const { ref: controllerRef, abort } = useAbortController()

  const { abort: abortFeedbackRequest, submitFeedback } = useFeedback({
    projectKey,
    promptId,
    feedbackOptions,
    state,
  })

  const { logRequest } = useLogRequest({
    promptId,
    prompt,
    answer,
    references,
  })

  // Abort ongoing fetch requests on unmount
  useEffect(() => {
    return () => abort()
  }, [abort])

  // Add a useEffect to call logRequest when state changes to 'done'
  useEffect(() => {
    if (state === 'done') {
      logRequest()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const submitPrompt = useCallback(async () => {
    abort()

    if (state === 'preload' || state === 'streaming-answer') {
      // If state is loading and fetch was aborted, wait a short delay
      // so that the original fetch request aborts and resets the state.
      // Otherwise, the new fetch starts (and state becomes 'preload'),
      // and after that, the state becomes 'done', which is the wrong
      // order.
      await new Promise((resolve) => setTimeout(resolve, 200))
    }

    if (!prompt || prompt === '') {
      return
    }

    setAnswer('')
    setReferences([])
    setPromptId(undefined)
    setState('preload')

    const controller = new AbortController()
    controllerRef.current = controller

    const promise = submitPromptToMarkprompt(
      prompt,
      projectKey,
      (chunk) => {
        setState('streaming-answer')
        setAnswer((prev) => prev + chunk)
        return true
      },
      (refs) => setReferences(getUniqueReferences(refs)),
      (pid) => setPromptId(pid),
      (error) => {
        // ignore abort errors
        if (isAbortError(error)) return

        // todo: surface errors to the user
        // eslint-disable-next-line no-console
        console.error(error)
      },
      {
        ...promptOptions,
        signal: controller.signal,
      },
      debug
    )

    promise.then(() => {
      if (controller.signal.aborted) return
      setState('done')
    })

    promise.finally(() => {
      if (controllerRef.current === controller) {
        controllerRef.current = undefined
      }
    })
  }, [abort, controllerRef, debug, projectKey, prompt, promptOptions, state])

  return useMemo(
    () => ({
      answer,
      prompt,
      references,
      state,
      abort,
      abortFeedbackRequest,
      setPrompt,
      submitFeedback,
      logRequest,
      submitPrompt,
    }),
    [
      answer,
      prompt,
      references,
      state,
      abort,
      abortFeedbackRequest,
      submitFeedback,
      logRequest,
      submitPrompt,
    ]
  )
}
