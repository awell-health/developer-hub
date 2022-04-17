import { Switch } from '@headlessui/react'
import { CheckIcon, CodeIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { SEO } from '../../../src/components/SEO'
import { Spinner } from '../../../src/components/Spinner'
import { useCreatePatient } from '../../../src/hooks/useCreatePatient'
// import { useStartPathway } from '../../../src/hooks/useStartPathway'
import { ThemeContext } from '../../../src/hooks/useTheme'

export default function OnboardingExample() {
  const { createPatient } = useCreatePatient()
  const { register, handleSubmit } = useForm()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingMessage, setIsLoadingMessage] = useState<string>('')
  const { setThemeSetting } = useContext(ThemeContext)
  const [anonymous, setAnonymous] = useState<boolean>(false)
  const [steps, setSteps] = useState([
    { id: '01', name: 'Patient identification', href: '#', status: 'current' },
    { id: '02', name: 'Onboarding form', href: '#', status: 'upcoming' },
    { id: '03', name: 'Summary', href: '#', status: 'upcoming' },
  ])

  const onSubmit = () => {
    handleSubmit(async (data) => {
      goToNextStep()
      setIsLoading(true)
      setIsLoadingMessage('Creating patient...')
      const patient = await createPatient(data?.profile)
      console.log(patient)
      setIsLoading(false)
    })()
  }

  useEffect(() => {
    setThemeSetting('light')
  })

  const goToNextStep = () => {
    const currentStepIndex = steps.findIndex(
      (step) => step.status === 'current'
    )

    if (steps.every((step) => step.status === 'complete')) return

    const newSteps = steps.map((step, index) => {
      if (index === currentStepIndex) return { ...step, status: 'complete' }
      if (index === currentStepIndex + 1) return { ...step, status: 'current' }
      return step
    })

    setSteps(newSteps)
  }

  return (
    <>
      <SEO
        title="Onboarding | Examples"
        url={`/examples/onboarding`}
        canonicalUrl={`/examples/onboarding`}
      />
      <div className="bg-indigo-600">
        <div className="max-w-6xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span>Onboarding example</span>
              </p>
            </div>
            <div className="order-3 flex-shrink-0 w-full w-auto">
              <a
                href="#"
                className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Read guide
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-8 mb-32">
        <nav aria-label="Progress">
          <ol
            role="list"
            className="border border-gray-300 rounded-md divide-y divide-gray-300 md:flex md:divide-y-0"
          >
            {steps.map((step, stepIdx) => (
              <li key={step.name} className="relative md:flex-1 md:flex">
                {step.status === 'complete' ? (
                  <a
                    href={step.href}
                    className="group flex items-center w-full"
                  >
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-indigo-600 rounded-full group-hover:bg-indigo-800">
                        <CheckIcon
                          className="w-6 h-6 text-white"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </a>
                ) : step.status === 'current' ? (
                  <a
                    href={step.href}
                    className="px-6 py-4 flex items-center text-sm font-medium"
                    aria-current="step"
                  >
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-indigo-600 rounded-full">
                      <span className="text-indigo-600">{step.id}</span>
                    </span>
                    <span className="ml-4 text-sm font-medium text-indigo-600">
                      {step.name}
                    </span>
                  </a>
                ) : (
                  <a href={step.href} className="group flex items-center">
                    <span className="px-6 py-4 flex items-center text-sm font-medium">
                      <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full group-hover:border-gray-400">
                        <span className="text-gray-500 group-hover:text-gray-900">
                          {step.id}
                        </span>
                      </span>
                      <span className="ml-4 text-sm font-medium text-gray-500 group-hover:text-gray-900">
                        {step.name}
                      </span>
                    </span>
                  </a>
                )}

                {stepIdx !== steps.length - 1 ? (
                  <>
                    {/* Arrow separator for lg screens and up */}
                    <div
                      className="hidden md:block absolute top-0 right-0 h-full w-5"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-full w-full text-gray-300"
                        viewBox="0 0 22 80"
                        fill="none"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0 -2L20 40L0 82"
                          vectorEffect="non-scaling-stroke"
                          stroke="currentcolor"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                ) : null}
              </li>
            ))}
          </ol>
        </nav>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-6 space-y-8 divide-y divide-gray-200"
        >
          {steps[0].status === 'current' && (
            <>
              <Switch.Group
                as="div"
                className="flex items-center justify-between"
              >
                <span className="flex-grow flex flex-col">
                  <Switch.Label
                    as="span"
                    className="text-base font-medium text-gray-900"
                    passive
                  >
                    Anonymous
                  </Switch.Label>
                  <Switch.Description
                    as="span"
                    className="text-base text-gray-500"
                  >
                    We suppport pathways for &quot;anonymous&quot; users out of
                    the box.
                  </Switch.Description>
                </span>
                <Switch
                  checked={anonymous}
                  onChange={setAnonymous}
                  className={clsx(
                    anonymous ? 'bg-indigo-600' : 'bg-gray-200',
                    'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={clsx(
                      anonymous ? 'translate-x-5' : 'translate-x-0',
                      'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                    )}
                  />
                </Switch>
              </Switch.Group>
              {!anonymous && (
                <div className="space-y-8 divide-y divide-gray-200">
                  <div className="pt-8">
                    <div>
                      <h3 className="text-lg leading-6 font-medium text-gray-900">
                        Personal Information
                      </h3>
                    </div>
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <div className="mt-1">
                          <input
                            {...register('profile.first_name')}
                            type="text"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            {...register('profile.last_name')}
                            type="text"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <div className="mt-1">
                          <input
                            {...register('profile.email')}
                            type="email"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    onClick={() => goToNextStep()}
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
          {steps[1].status === 'current' && (
            <>
              {/* <div className="space-y-8 divide-y divide-gray-200">
                <div className="pt-8">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Onboarding Information
                    </h3>
                  </div>
                  <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
          {steps[2].status === 'current' && (
            <div>
              {isLoading && (
                <div>
                  <div>
                    <Spinner />
                  </div>
                  {isLoadingMessage}
                </div>
              )}
            </div>
          )}
        </form>
      </div>
    </>
  )
}
