import {
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline'
import { isNil } from 'lodash'
import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayout } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

import { useHeading, useQuickNavigation } from '../../../src/hooks'

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
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/e164-phone-validation`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/e164-phone-validation`}
      />
      <DocsHeader
        heading={heading}
        title="E.164 Phone Validation"
        description="Check whether your phone number is valid according to the E.164 format."
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
                    <div>Not a E.164 valid number</div>
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
        <h2>Validation rules</h2>
        <p>
          <strong>
            A phone number is subjected to the following validation rules:
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
