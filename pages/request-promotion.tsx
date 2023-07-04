import { CakeIcon, EmojiSadIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

export default function RequestPromotion() {
  const [apiStatus, setApiStatus] = useState<'success' | 'fail' | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    if (setValue) {
      setValue(
        'from_source_to_destination_environment',
        'Sandbox to Production'
      )
    }
  }, [setValue])

  const onSubmit = () => {
    handleSubmit(async (data) => {
      fetch('/api/request-promotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data }),
      })
        .then(() => {
          setApiStatus('success')
        })
        .catch((error) => {
          console.log(error)
          setApiStatus('fail')
        })
    })()
  }

  return (
    <>
      <SEO
        title="Request promotion"
        url="/request-promotion"
        canonicalUrl="/request-promotion"
      />
      <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center w-auto text-blue-600">
            <Link href="/">
              <a
                title="Back to the Developer Hub"
                className="text-blue-600 text-base"
              >
                <svg className="w-40" viewBox="0 0 190 50">
                  <g>
                    <path
                      id="svg_1"
                      d="m169.7,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm13.3,0l6.8,0l0,38.7l-6.8,0l0,-38.7zm-38.5,24.5l12.4,-5.2c-0.6,-0.7 -1.4,-1.3 -2.3,-1.7c-0.9,-0.4 -1.9,-0.6 -3,-0.6c-1,0 -1.9,0.2 -2.8,0.6c-0.9,0.4 -1.6,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.4,0.8 -0.6,1.8 -0.6,2.9m-6.4,0.4c0,-1.9 0.4,-3.7 1.1,-5.4s1.7,-3.1 2.9,-4.4s2.7,-2.2 4.3,-3c1.6,-0.7 3.4,-1.1 5.3,-1.1c1.6,0 3.1,0.2 4.5,0.7s2.7,1.2 3.9,2.1c1.1,0.9 2.1,2.1 2.9,3.5c0.8,1.4 1.4,2.9 1.6,4.7l-18.6,7.8c0.7,0.9 1.5,1.6 2.5,2.1c0.9,0.5 2,0.8 3.2,0.8c1.1,0 2.2,-0.2 3.2,-0.7c1,-0.5 1.8,-1.3 2.4,-2.3l7.2,0c-0.8,2.7 -2.3,4.9 -4.5,6.5c-2.2,1.7 -5,2.5 -8.3,2.5c-1.9,0 -3.6,-0.4 -5.3,-1.1c-1.6,-0.7 -3.1,-1.7 -4.3,-2.9c-1.2,-1.2 -2.2,-2.7 -2.9,-4.4c-0.8,-1.7 -1.1,-3.5 -1.1,-5.4m-44.9,2l0,-15.2l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4c0.1,0.6 0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.6,0.6c1.5,0 2.8,-0.5 3.7,-1.4c0.9,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.4c0,0.4 0.1,0.9 0.2,1.4s0.3,1.1 0.7,1.6c0.3,0.5 0.8,1 1.5,1.4c0.7,0.4 1.5,0.6 2.7,0.6c1.5,0 2.7,-0.5 3.7,-1.4c1,-0.9 1.4,-2.1 1.4,-3.6l0,-15.4l6.8,0l0,15.2c0,1.7 -0.3,3.2 -0.9,4.7c-0.6,1.4 -1.4,2.7 -2.4,3.8c-1,1.1 -2.3,1.9 -3.8,2.5c-1.5,0.6 -3.1,0.9 -4.9,0.9c-1.8,0 -3.4,-0.3 -4.8,-1s-2.6,-1.6 -3.6,-2.7c-1,1.2 -2.2,2.1 -3.6,2.7c-1.4,0.7 -3,1 -4.8,1c-1.8,0 -3.5,-0.3 -4.9,-0.9c-1.4,-0.6 -2.7,-1.4 -3.7,-2.4s-1.8,-2.3 -2.3,-3.7c-0.7,-1.6 -1,-3.2 -1,-4.9m-25.4,-2c0,1 0.2,2 0.5,2.9c0.4,0.9 0.8,1.7 1.5,2.4c0.6,0.7 1.3,1.2 2.2,1.6c0.8,0.4 1.7,0.6 2.6,0.6s1.8,-0.2 2.6,-0.6c0.8,-0.4 1.6,-0.9 2.2,-1.6c0.6,-0.7 1.1,-1.5 1.5,-2.4c0.4,-0.9 0.5,-1.9 0.5,-2.9s-0.2,-2 -0.5,-3c-0.4,-0.9 -0.8,-1.7 -1.5,-2.4c-0.6,-0.7 -1.3,-1.2 -2.2,-1.6c-0.8,-0.4 -1.7,-0.6 -2.6,-0.6c-0.9,0 -1.8,0.2 -2.6,0.6c-0.8,0.4 -1.5,0.9 -2.2,1.6c-0.6,0.7 -1.1,1.5 -1.5,2.4c-0.3,0.9 -0.5,1.9 -0.5,3m-6.8,0c0,-1.9 0.3,-3.7 1,-5.4c0.7,-1.7 1.6,-3.1 2.8,-4.4c1.2,-1.2 2.6,-2.2 4.3,-2.9c1.7,-0.7 3.5,-1.1 5.5,-1.1s3.8,0.4 5.5,1.1c1.7,0.7 3.1,1.7 4.3,3c1.2,1.2 2.1,2.7 2.8,4.4c0.7,1.7 1,3.5 1,5.4l0,13.8l-6.4,0l0,-3.5c-1,1.1 -2.2,1.9 -3.6,2.5c-1.4,0.6 -2.9,0.8 -4.5,0.8c-1.7,0 -3.4,-0.4 -4.9,-1.1c-1.5,-0.7 -2.9,-1.7 -4,-3c-1.2,-1.2 -2.1,-2.7 -2.7,-4.4c-0.8,-1.5 -1.1,-3.3 -1.1,-5.2"
                      fill="currentColor"
                    />
                    <path
                      id="svg_2"
                      fill="currentColor"
                      d="m7.3,21.7c1.4,-7.4 7.2,-13.2 14.6,-14.6l0,-6.8c-11.1,1.4 -20,10.2 -21.6,21.4l7,0zm21.4,-14.6c8.5,1.6 14.9,9 14.9,18c0,3.8 -1.2,7.4 -3.2,10.3l4.9,4.9c3.2,-4.2 5,-9.4 5,-15.1c0.1,-12.7 -9.3,-23.2 -21.6,-24.9l0,6.8zm7,33.1c-2.9,2 -6.5,3.2 -10.3,3.2c-9,0 -16.4,-6.4 -18,-14.9l-7,0c1.6,12.4 12.2,21.9 25,21.9c5.8,0 11.1,-2 15.4,-5.2l-5.1,-5z"
                    />
                  </g>
                </svg>
              </a>
            </Link>
          </div>
          <h2 className="mt-6 text-center text-3xl tracking-tight font-bold text-slate-900">
            Request care flow promotion
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            {apiStatus === 'success' && (
              <div className="max-w-lg mx-auto">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CakeIcon
                    className="h-6 w-6 text-green-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-semibold text-slate-900 dark:text-slate-900"
                    id="modal-title"
                  >
                    We received your request. We will get back to you when
                    promotion was successful!
                  </h3>
                </div>
              </div>
            )}
            {apiStatus === 'fail' && (
              <div className="max-w-lg mx-auto">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <EmojiSadIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-semibold text-slate-900"
                    id="modal-title"
                  >
                    Something went wrong
                  </h3>
                  <p className="text-lg leading-6 font-semibold text-slate-900 dark:text-slate-900">
                    We had troubles receiving your request, please try again.
                  </p>
                </div>
              </div>
            )}
            {!apiStatus && (
              <form
                className="flex flex-col space-y-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col space-y-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-semibold text-slate-700"
                    >
                      Email address
                    </label>
                    <p className="text-sm text-slate-500">
                      Enter your email address so we can get back to you
                    </p>
                    <div className="mt-1">
                      <input
                        id="email"
                        {...register('email', { required: true })}
                        type="email"
                        autoComplete="email"
                        className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-slate-700"
                      />
                      {errors.email && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          id="email-error"
                        >
                          Please leave your email, otherwise we will not be able
                          to get back to you.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="care_flows"
                      className="block text-base font-semibold text-slate-700"
                    >
                      Care flows
                    </label>
                    <p className="text-sm text-slate-500">
                      The care flow(s) you would like to migrate. Name of the
                      care flow is sufficient.
                    </p>
                    <div className="mt-1">
                      <input
                        id="care_flows"
                        {...register('care_flows', { required: true })}
                        type="text"
                        className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-slate-700"
                      />
                      {errors.care_flows && (
                        <p
                          className="mt-1 text-sm text-red-600"
                          id="email-error"
                        >
                          This field is required.
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="environment"
                      className="block text-base font-semibold text-slate-700"
                    >
                      Environment
                    </label>
                    <p className="text-sm text-slate-500">
                      Select the source and destination environment
                    </p>
                    <div className="mt-2 grid gap-4 md:grid-cols-2">
                      <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <input
                          {...register(
                            'from_source_to_destination_environment',
                            { required: true }
                          )}
                          id="sandbox_to_production"
                          value="Sandbox to Production"
                          type="radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="sandbox"
                          className="py-4 ml-2 w-full text-sm font-medium text-gray-900"
                        >
                          Sandbox &#8594; Prod
                        </label>
                      </div>
                      <div className="flex items-center pl-4 rounded border border-gray-200 dark:border-gray-700">
                        <input
                          {...register(
                            'from_source_to_destination_environment',
                            { required: true }
                          )}
                          id="production_to_sandbox"
                          value="Production to Sandbox"
                          type="radio"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label
                          htmlFor="production"
                          className="py-4 ml-2 w-full text-sm font-medium text-gray-900"
                        >
                          Prod &#8594; Sandbox
                        </label>
                      </div>
                    </div>
                    {errors?.from_source_to_destination_environment && (
                      <p className="pt-1 text-sm text-red-500">
                        Select a source and destination environment
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="comments"
                    className="block text-base font-semibold text-slate-700"
                  >
                    Any other comments
                  </label>
                  <p className="text-sm text-slate-500">
                    Please include any additional context here for this request,
                    such as if you are interested in promoting to a
                    region-specific production environment (e.g. US, UK or EU).
                  </p>
                  <div className="mt-1">
                    <textarea
                      id="comments"
                      {...register('comments', { required: false })}
                      rows={3}
                      className="appearance-none block w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-slate-700"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Request promotion
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="mt-4 text-center">
            <Link
              href={`/${Space.AWELL_ORCHESTRATION}/docs/going-live/sandbox-to-production-promotion-guide`}
            >
              <a
                title="Back to the Developer Hub"
                className="text-blue-600 text-base"
              >
                &#8592; Back to the Developer Hub
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
