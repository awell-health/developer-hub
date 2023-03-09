import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline'
import { isNil } from 'lodash'
import Image from 'next/image'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DocsHeader } from '@/components/Docs/atoms'
import { FAQ } from '@/components/FAQ'
import { DocsLayout } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

import { useHeading, useQuickNavigation } from '../../../../src/hooks'

export default function E164Validation() {
  const { heading } = useHeading()
  const { next, prev } = useQuickNavigation('e164-phone-validation')
  const [isValid, setIsValid] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    handleSubmit(async (data) => {
      setIsLoading(true)
      fetch('/api/validation/e164', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      })
        .then((response) => response.json())
        .then((data) => {
          const typedData = data as { isValid: boolean }
          setIsLoading(false)
          setIsValid(typedData?.isValid ?? false)
          setError(null)
        })
        .catch(() => {
          setIsLoading(false)
          setError(true)
          setIsValid(null)
        })
    })()
  }

  return (
    <div>
      <SEO
        title="E.164 Phone Validation"
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/e164-phone-validation`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/e164-phone-validation`}
      />
      <DocsHeader
        heading={heading}
        title="E.164 Phone Validation"
        description="When inserting phone numbers into Awell, our API requires them to be in the E.164 format."
      />
      <div id="content-wrapper">
        <h2>Validation widget</h2>
        <p>
          Enter a phone number below and see whether it is valid according to
          the E.164 format.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-base font-semibold text-slate-700"
            >
              Phone
            </label>
            <div className="mt-1 relative rounded-md shadow-sm w-full sm:w-[350px]">
              <input
                id="phone"
                {...register('phone')}
                type="tel"
                autoComplete="tel"
                className={`
                w-full rounded-md appearance-none block px-3 py-2 border border-slate-300 placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500
                ${isValid === true ? ' border-green-500' : ''}
                ${isValid === false ? ' border-red-500' : ''}
                `}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {!isNil(isValid) && (
                  <div>
                    {isValid ? (
                      <CheckCircleIcon
                        className="h-5 w-5 text-green-500"
                        aria-hidden="true"
                      />
                    ) : (
                      <ExclamationCircleIcon
                        className="h-5 w-5 text-red-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className="h-[16px] mt-2 text-sm font-semibold text-red-600">
              {!isNil(isValid) && (
                <div>
                  {isValid ? (
                    <div className="text-green-600">E.164 valid number</div>
                  ) : (
                    <div>Not an E.164 valid number</div>
                  )}
                </div>
              )}
              {!isNil(error) && (
                <div>
                  {error ?? <div>Something went wrong, please try again.</div>}
                </div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full sm:w-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              Validate
            </button>
          </div>
        </form>
        <h2>E.164</h2>
        <p>
          <a href="https://en.wikipedia.org/wiki/E.164" title="E.164">
            E.164
          </a>{' '}
          is an international telephone numbering plan for the worldwide public
          switched telephone network (PSTN) and some other data networks. E.164
          defines a general format for international telephone numbers that
          ensures each device on the PSTN has a globally unique number. It makes
          sure that phone calls and text messages can be correctly routed to
          individual phones in different countries.
        </p>
        <p>
          As we have ISO 8601 formatting for date and time-related data, E.164
          is a standard format we can use to achieve data interoperability and
          consistency related to telephone numbers.
        </p>
        <h2>Validation</h2>
        <p>
          <strong>
            A phone number passed to our API is subjected to the following
            validation rules:
          </strong>
        </p>
        <ol>
          <li>It should contain no whitespaces</li>
          <li>
            It should start with a <code>+</code>
          </li>
          <li>It should only contain numbers ranging from 0 to 9</li>
          <li>
            It should be a possible phone number ({`<=`} 15 digits, correct
            country code)
          </li>
        </ol>
        <figure className="w-full flex flex-col justify-center text-center">
          <div className="w-full sm:w-5/12 mx-auto p-4 bg-white rounded-lg">
            <Image
              src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1678272288/Developer%20portal/e164.jpg"
              width="1633"
              height="505"
              alt="E.164 format"
            />
          </div>
          <figcaption className="dark:text-slate-400 pt-1">
            E.164 format
          </figcaption>
        </figure>
        <p>
          Please note we are only checking if a number is technically possible
          (according to the E.164 format), not whether it is an actual valid
          phone number.
        </p>
        <h2>Get Started</h2>
        <p>
          There a numerous libraries out there that can help you with validating
          phone numbers. We listed a few below:
        </p>
        <ul>
          <li>
            <a href="https://www.npmjs.com/package/libphonenumber-js#using-phone-number-validation-feature">
              libphonenumber-js
            </a>
            , a library that can help you format and validate phone numbers
          </li>
          <li>
            <a href="https://www.npmjs.com/package/react-international-phone">
              react-international-phone
            </a>
            , an international phone input component for React
          </li>
        </ul>
        <h2>Questions</h2>
        <FAQ
          withHeader={false}
          condensed={true}
          faqs={[
            {
              question:
                'What if, in my source system, phone numbers are not stored according to the E.164 format?',
              answer:
                '<p>Then you should try parsing the phone number to the E.164 format before calling our API. If parsing is unsuccessful for some reason, you can always omit the phone number from the request. Parsing on your end is recommended as you would have the most information about the user to create an E.164 valid phone number (eg: the country they live in which determines the country code).</p><p><strong>Tip:</strong> Libraries like <a href="https://www.npmjs.com/package/libphonenumber-js#using-phone-number-validation-feature">libphonenumber-js</a> can be used to parse numbers in national or other formats to E.164.</p>',
            },
          ]}
        />
      </div>
      <div className="mt-12">
        <QuickNav prev={prev} next={next} />
      </div>
    </div>
  )
}

E164Validation.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}
