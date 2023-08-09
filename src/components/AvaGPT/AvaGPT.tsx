import { Transition } from '@headlessui/react'
import { isNil } from 'lodash'
import { useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

import { ReferenceType, useAvaGPT } from '@/hooks/useAvaGPT'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

import { Button } from '../Button'
import { Code } from '../Docs/atoms'

type GPTAnswer = { answer: string; references: ReferenceType[] } | undefined

export const AvaGPT = () => {
  const { getAnswer, getHref } = useAvaGPT()

  const [isOpen, setIsOpen] = useState(false)

  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState<GPTAnswer>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  useOnClickOutside(ref, () => setIsOpen(false))

  const toggleAvaGPT = () => {
    setIsOpen(!isOpen)
  }

  const logRequest = async (
    question: string,
    answer: string,
    references: string
  ) => {
    fetch('/api/log-gpt-requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question,
        answer,
        references,
      }),
    })
  }

  const generateAnswer = async (prompt: string) => {
    setIsLoading(true)
    setAnswer(undefined)
    const res = await getAnswer(prompt)
    setIsLoading(false)

    if (!isNil(res)) {
      setAnswer(res)
      logRequest(
        prompt,
        String(res.answer),
        res.references.map((ref) => `${ref.title}: ${ref.path}`).join('\n')
      )
      return
    }

    logRequest(prompt, 'Could not find an answer', 'N/A')
    setAnswer(undefined)
  }

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
          <div className="hidden-scrollbar absolute inset-x-0 bottom-0 top-[-10px] z-0 h-[85%] max-w-full overflow-y-auto scroll-smooth px-2 py-4 pb-8 text-base">
            <Transition appear={true} show={!isNil(answer)}>
              <div id="avaGPT">
                <Transition
                  appear={true}
                  enter="transition transform duration-1000"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <ReactMarkdown
                    components={{
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
                  >
                    {answer?.answer || ''}
                  </ReactMarkdown>
                </Transition>
              </div>
              <Transition
                appear={true}
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
                      {answer?.references.map((reference) => (
                        <a
                          key={reference.title}
                          className="border-blue-600 bg-blue-600 hover:underline cursor-pointer rounded-md border px-2 py-1 text-sm font-medium text-white no-underline transition"
                          href={getHref(reference.path)}
                        >
                          {reference.title}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Transition>
            </Transition>
            <Transition
              show={isNil(answer)}
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
            <div className="h-8" />
            <div />
          </div>
          <div className="absolute bottom-4 h-10 w-full border-b dark:border-b-slate-800 bg-[#F2F2F2] dark:bg-slate-700 rounded-md">
            <form className="flex">
              <input
                type="text"
                placeholder="How to authenticate with the Awell API?"
                className="dark:text-slate-300 dark:placeholder:text-slate-500 dark:disabled:text-slate-500 disabled:cursor-progress h-10 w-[90%] appearance-none truncate rounded-md border-0 bg-transparent px-0 pb-2 pl-2 pt-1.5 text-sm outline-none focus:outline-none focus:ring-0 disabled:text-[#8B95A5]"
                autoComplete="on"
                autoCorrect="on"
                autoCapitalize="on"
                spellCheck="false"
                disabled={isLoading}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button
                className="absolute right-2 h-full w-fit"
                onClick={(e) => {
                  e.preventDefault()
                  generateAnswer(question)
                }}
              >
                {isLoading ? (
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
      <div className="fixed bottom-4 right-6 z-10">
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
          Ask Ava
        </Button>
      </div>
    </div>
  )
}
