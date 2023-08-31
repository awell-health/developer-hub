import { type FileSectionReference } from '@markprompt/core'
import { useCallback } from 'react'

import { getUniqueReferences } from './utils'

export interface useLogRequestOptions {
  promptId?: string
  prompt: string
  answer?: string
  references: FileSectionReference[]
}

export interface UseLogRequestResult {
  logRequest: () => void
}

export function useLogRequest({
  prompt,
  promptId,
  answer,
  references,
}: useLogRequestOptions): UseLogRequestResult {
  const logRequest = useCallback(async () => {
    await fetch('/api/log-gpt-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: promptId ?? '',
        question: `[${process.env.NODE_ENV || 'undefined'}] ${prompt}`,
        answer: answer,
        references: getUniqueReferences(references)
          .map((ref) => `${ref.file.title}: ${ref.file.path}`)
          .join('\n'),
      }),
    })
  }, [prompt, promptId, answer, references])

  return { logRequest }
}
