export type ReferenceType = {
  title: string
  path: string
}

interface useAvaGPTHook {
  getAnswer: (prompt: string) => Promise<
    | {
        answer: string
        references: ReferenceType[]
      }
    | undefined
  >
}

const MARKPROMPT_TOKEN = process.env.NEXT_PUBLIC_MARKPROMPT_TOKEN || ''

export const useAvaGPT = (): useAvaGPTHook => {
  const getAnswer = async (prompt: string) => {
    const res = await fetch('https://api.markprompt.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        projectKey: MARKPROMPT_TOKEN,
        prompt,
        iDontKnowMessage: 'Sorry, I am not sure how to answer that question.',
        model: 'gpt-4',
      }),
    })

    if (!res.ok || !res.body) {
      console.error('Error:', await res.text())
      return
    }

    // JSON payload
    const encodedPayload = res.headers.get('x-markprompt-data') || ''
    const headerArray = new Uint8Array(encodedPayload.split(',').map(Number))
    const decoder = new TextDecoder()
    const decodedValue = decoder.decode(headerArray)
    const { references } = JSON.parse(decodedValue)

    const reader = res.body.getReader()
    let response = ''

    while (true) {
      const { value, done } = await reader.read()
      const chunk = decoder.decode(value)
      response = response + chunk
      if (done) {
        break
      }
    }

    const parts = response.split('___START_RESPONSE_STREAM___')

    const getUniqueReferences = (refs: ReferenceType[]) => {
      return [
        ...new Map(
          refs.filter(Boolean).map((item) => [item['title'], item])
        ).values(),
      ]
    }

    return {
      answer: parts[1],
      //@ts-expect-error we should type the response we receive from Markprompt
      references: getUniqueReferences(references.map((ref) => ref.file)),
    }
  }

  return {
    getAnswer,
  }
}
