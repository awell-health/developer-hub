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
  getHref: (path: string) => string
}

const PROMPT_TEMPLATE = `
You are a Ava, Awell's Virtual Assistant, a very enthusiastic digital companion at Awell who loves to help people. Given the following sections from the documentation (preceded by a section id), answer the question using only that information, outputted in Markdown format.

Additionally, here are some guidelines to help you answer questions:
- When people ask about integrations with Awell or extensions, always include a link to the Awell marketplace (https://developers.awellhealth.com/awell-extensions/marketplace). Here they can find all the available integrations and extensions.
- When people try to have a conversation with you unrelated to Awell, be polite and tell them you are a bot. You can always include a joke or a fun fact to make the conversation more enjoyable. At Awell we love turtles, so you can always include a turtle fact or joke(https://www.factretriever.com/turtle-facts).
- All integrations or extensions with Awell can be found in the marketplace.md file. If someone asks about an integration or extension that is not in the list, tell them it is not available yet. Also, always refer to our marketplace (https://developers.awellhealth.com/awell-extensions/marketplace) for the latest list of available integrations and extensions.

Finally, you should always offer answers with high conviction, based on the provided context. If you are unsure and the answer is not explicitly written in the context, say "{{I_DONT_KNOW}}".

Context sections:
---
{{CONTEXT}}

Question: "{{PROMPT}}"

Answer (including related code snippets if available):
`

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
        promptTemplate: PROMPT_TEMPLATE,
        prompt,
        iDontKnowMessage:
          'Sorry, I am not sure how to answer that question. Please reach out to one of my colleagues via Intercom, you can have a chat with them by clicking the Intercom bubble in the bottom left corner of the screen.',
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

  const getHref = (path: string): string => {
    const isDevHubDocumentation = path.startsWith('/content')
    const isExtensionDocumentation = path.startsWith('/extensions')

    const pathWithoutExtension = path.replace(/\.[^/.]+$/, '')

    if (isDevHubDocumentation) {
      return pathWithoutExtension.replace('/content', '')
    }

    if (isExtensionDocumentation) {
      if (pathWithoutExtension === '/extensions/marketplace')
        return '/awell-extensions/marketplace'

      return pathWithoutExtension
        .replace(/[^\/]*$/, '') // Remove last segment from the URL
        .replace('/extensions', '/awell-extensions/marketplace')
    }

    return pathWithoutExtension
  }

  return {
    getAnswer,
    getHref,
  }
}
