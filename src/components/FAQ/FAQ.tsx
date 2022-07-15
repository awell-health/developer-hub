import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

interface FaqProps {
  faqs: {
    question: string
    answer: string
  }[]
}

export const FAQ = ({ faqs }: FaqProps) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 rounded-lg">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
            If you {`can't`} find what {`you're`} looking for, you can always
            send us a message over Intercom with your enquiry.
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
          <dl className="mt-6 space-y-6 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt className="text-lg">
                      <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                        <span className="font-semibold text-slate-900 dark:text-white">
                          {faq.question}
                        </span>
                        <span className="ml-6 h-7 flex items-center">
                          <ChevronDownIcon
                            className={clsx(
                              open ? '-rotate-180' : 'rotate-0',
                              'h-6 w-6 transform'
                            )}
                            aria-hidden="true"
                          />
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-slate-500 dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
