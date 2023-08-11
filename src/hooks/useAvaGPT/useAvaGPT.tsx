import { useState } from 'react'

import {
  IDONTKNOWMESSAGE,
  MARKPROMPT_COMPLETIONS_URL,
  MARKPROMPT_TOKEN,
  PROMPT_TEMPLATE,
  STREAM_SEPARATOR,
} from './constants'
import { ReferenceType } from './types'
import { getHref, getUniqueReferences } from './utils'

interface useAvaGPTHook {
  answer: string
  submitPrompt: (prompt: string) => void
  getHref: (path: string) => string
  references: ReferenceType[]
  isLoading: boolean
}

export const useAvaGPT = (): useAvaGPTHook => {
  const [answer, setAnswer] = useState('')
  const [references, setReferences] = useState<ReferenceType[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const submitPrompt = async (prompt: string) => {
    setAnswer('')
    setReferences([])
    setIsLoading(true)

    try {
      const res = await fetch(MARKPROMPT_COMPLETIONS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          projectKey: MARKPROMPT_TOKEN,
          promptTemplate: PROMPT_TEMPLATE,
          prompt,
          iDontKnowMessage: IDONTKNOWMESSAGE,
          model: 'gpt-4',
        }),
      })

      if (!res.ok || !res.body) {
        const text = await res.text()
        console.error('Error:', text)
        setAnswer(IDONTKNOWMESSAGE)
        setIsLoading(false)
        return
      }

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let done = false
      let startText = ''
      let didHandleHeader = false
      let localAnswer = ''

      while (!done) {
        const { value, done: doneReading } = await reader.read()
        done = doneReading
        const chunkValue = decoder.decode(value)
        if (!didHandleHeader) {
          startText = startText + chunkValue
          if (startText.includes(STREAM_SEPARATOR)) {
            const parts = startText.split(STREAM_SEPARATOR)
            setAnswer((prev) => prev + parts[1])
            localAnswer += parts[1]
            didHandleHeader = true
          }
        } else {
          setAnswer((prev) => prev + chunkValue)
          localAnswer += chunkValue
        }
      }

      const encodedPayload = res.headers.get('x-markprompt-data') || ''
      const headerArray = new Uint8Array(encodedPayload.split(',').map(Number))
      const decodedValue = decoder.decode(headerArray)
      const { references: refs } = JSON.parse(decodedValue)

      //@ts-expect-error we should type the response we receive from Markprompt
      setReferences(getUniqueReferences(refs.map((ref) => ref.file)))

      // Log the request
      fetch('/api/log-gpt-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: `[${process.env.NODE_ENV || 'undefined'}] ${prompt}`,
          answer: localAnswer,
          references: references
            .map((ref) => `${ref.title}: ${ref.path}`)
            .join('\n'),
        }),
      })
    } catch (e) {
      console.error('Error', e)
      setAnswer(IDONTKNOWMESSAGE)
    }

    setIsLoading(false)
  }

  return {
    submitPrompt,
    answer,
    getHref,
    references,
    isLoading,
  }
}
