import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

interface FaqProps {
  withHeader?: boolean
  headerTitle?: string
  condensed?: boolean
  faqs: {
    question: string
    answer: string
  }[]
}

export const FAQ = ({
  withHeader = true,
  condensed = false,
  headerTitle = 'Frequently asked questions',
  faqs,
}: FaqProps) => {
  return (
    <div className="bg-gray-50 dark:bg-slate-800 rounded-lg">
      <div
        className={`${
          condensed ? 'py-8 sm:py-12' : 'py-12 sm:py-16'
        } max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}
      >
        {withHeader && (
          <div className="max-w-3xl mx-auto mb-6">
            <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              {headerTitle}
            </h2>
            <p className="mt-4 text-base text-slate-500 dark:text-slate-400">
              If you {`can't`} find what {`you're`} looking for, you can always
              send us a message over Intercom with your enquiry.
            </p>
          </div>
        )}
        <div className="max-w-3xl mx-auto divide-y-2 divide-slate-200">
          <dl className="space-y-6 divide-y divide-slate-200 dark:divide-slate-700">
            {faqs.map((faq, index) => (
              <Disclosure
                as="div"
                key={faq.question}
                className={`${index === 0 ? '' : 'pt-6'}`}
              >
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
                    <Disclosure.Panel as="dd" className="mt-2">
                      <p
                        className="text-base text-slate-500 dark:text-slate-400"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
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
