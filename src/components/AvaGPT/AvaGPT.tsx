import { Transition } from '@headlessui/react'
import {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

import { usePrompt } from '@/hooks/avaGPT'
import { getHref, stripMarkdownFences } from '@/hooks/avaGPT/utils'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import { Button } from '../Button'
import { Code } from '../Docs/atoms'
import { Caret, Feedback, WithCaret } from './atoms'

const PROMPT_TEMPLATE = `
You are a Ava, Awell's Virtual Assistant, a very enthusiastic digital companion at Awell who loves to help people. Given the following sections from the documentation (preceded by a section id), answer the question using only that information, outputted in Markdown format.

Additionally, here are some guidelines to help you answer questions:
- When people ask about integrations with Awell or extensions, always include a link to the Awell marketplace (https://developers.awellhealth.com/awell-extensions/marketplace). Here they can find all the available integrations and extensions. If someone asks about an integration or extension that is not in the list, tell them it is not available yet. Also, always refer to our marketplace (https://developers.awellhealth.com/awell-extensions/marketplace) for the latest list of available integrations and extensions.
- When people try to have a conversation with you, be polite and tell them you are a bot. Always include a joke or a fun fact to make the conversation more enjoyable. At Awell we love turtles, so we prefer turtle facts or jokes (https://www.factretriever.com/turtle-facts).
- Only include links in the answer that were explicitly mentioned in the context or in these guidelines.
- A "care flow" is a synonym for "pathway" so if someone refers to "How to start a care flow for a patient", you can interpret that as "How to start a pathway for a patient".

Finally, you should always offer answers with high conviction, based on the provided context. If you are unsure and the answer is not explicitly written in the context, say "{{I_DONT_KNOW}}".

Context sections:
---
{{CONTEXT}}

Question: "{{PROMPT}}"

Answer (including related code snippets if available):
`

const MARKPROMPT_TOKEN = process.env.NEXT_PUBLIC_MARKPROMPT_TOKEN || ''
const IDONTKNOWMESSAGE =
  'Sorry, I am not sure how to answer that question. Please reach out to one of my colleagues via Intercom, you can have a chat with them by clicking the Intercom bubble in the bottom left corner of the screen.'

export const AvaGPT = () => {
  const {
    answer,
    references,
    state,
    prompt,
    setPrompt,
    submitPrompt,
    abort,
    submitFeedback,
    abortFeedbackRequest,
  } = usePrompt({
    projectKey: MARKPROMPT_TOKEN,
    promptOptions: {
      promptTemplate: PROMPT_TEMPLATE,
      iDontKnowMessage: IDONTKNOWMESSAGE,
    },
    feedbackOptions: {},
  })

  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false))

  const containerRef = useRef<HTMLDivElement>(null)
  const answerContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen === false) abort()
    return () => abort()
  }, [isOpen, abort])

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setPrompt(event.target.value)
    },
    [setPrompt]
  )

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault()
      submitPrompt()
    },
    [submitPrompt]
  )

  useEffect(() => {
    if (!containerRef.current || !answerContainerRef.current) {
      return
    }

    const childRect = answerContainerRef.current.getBoundingClientRect()
    containerRef.current.scrollTop = childRect.bottom
  }, [answer, references])

  const toggleAvaGPT = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }, [])

  return (
    <div ref={ref}>
      <Transition
        show={isOpen}
        enter="transition transform duration-350 ease-out"
        enterFrom="opacity-0 translate-y-4"
        enterTo="opacity-100 translate-y-0"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-4"
        className="fixed bottom-4 right-6 z-50 mb-12 ml-[25%] h-1/2 w-1/4 min-w-[75%] rounded-md border-[0.5px] border-[#CCCCCC] dark:border-slate-700 bg-white dark:bg-slate-800 font-sans shadow-md sm:ml-[25%] sm:min-w-[75%] md:ml-[50%] md:min-w-[50%] xl:ml-[75%] xl:min-w-[30%]"
      >
        <div className="x relative m-4 flex h-[96%] flex-col pt-0 text-black">
          <div
            ref={containerRef}
            className="hidden-scrollbar absolute inset-x-0 bottom-0 top-[-10px] z-0 h-[85%] max-w-full overflow-y-auto scroll-smooth px-2 py-4 pb-8 text-base"
          >
            {state === 'preload' && !(answer.length > 0) && <Caret />}
            <div id="avaGPT">
              <Transition
                appear={true}
                show={state === 'streaming-answer' || state === 'done'}
                enter="transition transform duration-1000"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div
                  className={
                    state === 'preload' || state === 'streaming-answer'
                      ? 'prompt-answer-loading'
                      : 'prompt-answer-done'
                  }
                >
                  <ReactMarkdown
                    components={{
                      p: (props) => <WithCaret Component="p" {...props} />,
                      span: (props) => (
                        <WithCaret Component="span" {...props} />
                      ),
                      h1: (props) => <WithCaret Component="h1" {...props} />,
                      h2: (props) => <WithCaret Component="h2" {...props} />,
                      h3: (props) => <WithCaret Component="h3" {...props} />,
                      h4: (props) => <WithCaret Component="h4" {...props} />,
                      h5: (props) => <WithCaret Component="h5" {...props} />,
                      h6: (props) => <WithCaret Component="h6" {...props} />,
                      li: (props) => <WithCaret Component="li" {...props} />,
                      pre: (props) => <WithCaret Component="pre" {...props} />,
                      td: (props) => <WithCaret Component="td" {...props} />,
                      code({ inline, className, children }) {
                        if (inline) {
                          return <code className={className}>{children}</code>
                        }
                        return (
                          <div className="mt-2 mb-6">
                            <Code className={className || ''}>
                              {String(children).replace(/\n$/, '')}
                            </Code>
                          </div>
                        )
                      },
                    }}
                    remarkPlugins={[remarkGfm]}
                  >
                    {stripMarkdownFences(answer)}
                  </ReactMarkdown>
                </div>
              </Transition>
            </div>
            <Transition
              appear={true}
              show={state === 'done'}
              enter="transition transform duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Feedback
                submitFeedback={submitFeedback}
                abortFeedbackRequest={abortFeedbackRequest}
              />
            </Transition>
            <Transition
              appear={true}
              show={state === 'done'}
              enter="transition transform duration-700"
              enterFrom="opacity-0 translate-y-20"
              enterTo="opacity-100 translate-y-0"
              leave="transition-opacity duration-300"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-20"
            >
              <div className="mt-6 border-t border-slate-200 dark:border-slate-600 pt-4 text-sm text-slate-500 dark:text-slate-400">
                <div className="animate-slide-up ">
                  Answer generated from the following sources:
                  <div className="mt-4 flex w-full flex-row flex-wrap items-center gap-2 ">
                    {references.map((reference) => (
                      <a
                        key={reference.file.path}
                        className="border-blue-600 bg-blue-600 hover:underline cursor-pointer rounded-md border px-2 py-1 text-sm font-medium text-white no-underline transition"
                        href={getHref(reference.file.path)}
                      >
                        {reference.file.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Transition>
            <Transition
              show={state === 'indeterminate'}
              appear={false}
              enter="transition transform duration-700"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="my-0 mt-16 flex h-1/2 w-full flex-col items-center justify-center text-slate-600 dark:text-slate-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="h-12 w-12 mb-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                ></path>
              </svg>
              <p className="mt-0 font-sans text-sm">
                Get instant help from Ava, <strong>A</strong>well&apos;s{' '}
                <strong>V</strong>irtual <strong>A</strong>ssistant.
              </p>
            </Transition>
            <div ref={answerContainerRef} />
            <div className="h-4" />
          </div>
          <div className="absolute bottom-4 h-10 w-full border-b dark:border-b-slate-800 bg-[#F2F2F2] dark:bg-slate-700 rounded-md">
            <form className="flex" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="How to authenticate with the Awell API?"
                className="dark:text-slate-300 dark:placeholder:text-slate-500 dark:disabled:text-slate-500 disabled:cursor-progress h-10 w-[90%] appearance-none truncate rounded-md border-0 bg-transparent px-0 pb-2 pl-2 pt-1.5 text-sm outline-none focus:outline-none focus:ring-0 disabled:text-[#8B95A5]"
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="on"
                spellCheck="false"
                disabled={state === 'preload' || state === 'streaming-answer'}
                value={prompt}
                onChange={handleChange}
              />
              <button className="absolute right-2 h-full w-fit" type="submit">
                {state === 'preload' || state === 'streaming-answer' ? (
                  <svg
                    className="text-blue-600 dark:text-sky-500 h-6 w-6 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6 stroke-[#8B95A5]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                    />
                  </svg>
                )}
              </button>
            </form>
          </div>
        </div>
      </Transition>
      <div className="fixed bottom-4 right-6 z-30">
        <Button onClick={toggleAvaGPT} color="sky">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="mr-2 h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
            ></path>
          </svg>
          Ask AvaGPT
        </Button>
      </div>
    </div>
  )
}
