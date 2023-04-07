import { CheckCircleIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { ReactNode } from 'react'

import { Badge } from '@/components/Badge'
import { LinkButton } from '@/components/Button'
import { FAQ } from '@/components/FAQ'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { rootRoutes } from '@/config/routes'
import { Space } from '@/types/space.types'

export default function BetaExtensions() {
  return (
    <>
      <SEO
        title="Beta | Awell Extensions"
        url={`/${Space.AWELL_EXTENSIONS}`}
        canonicalUrl={`/${Space.AWELL_EXTENSIONS}`}
      />
      <div className="pt-16 sm:pt-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4">
              <Badge color="sky" size="lg">
                Beta
              </Badge>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Bring your care flows to the next level with{' '}
              <span className="text-blue-600 dark:text-sky-500">
                Awell Extensions
              </span>
              .
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Awell provides developers with an SDK allowing them to assemble
              their own Custom Actions and listen to Webhook events from 3rd
              parties to trigger actions in care flows.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkButton
                href={rootRoutes[Space.AWELL_EXTENSIONS].docs}
                label="Get started"
                color="sky"
              />
              <Link href="#beta">
                <a className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300">
                  Learn more about beta release{' '}
                  <span aria-hidden="true">↓</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mt-16 flow-root sm:mt-24 max-w-5xl mx-auto">
            <div className="-m-2 rounded-xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1680777430/Awell%20Extensions/awell_extension_screenshot.png"
                alt="App screenshot"
                width={2750}
                height={1750}
                className="rounded-md shadow-2xl ring-1 ring-slate-900/10"
              />
            </div>
          </div>
          <div className="py-16 sm:py-24">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500">
                Awell Extensions
              </h2>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Custom Actions and Webhooks
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                <strong>Extensions come in many forms and sizes.</strong> On one
                hand, an extension can expose new Custom Actions in your care
                flow. And on the other hand, extensions allow you to listen and
                process incoming webhook events and trigger actions in your care
                flows.
              </p>
            </div>
            <div className="overflow-hidden py-16 sm:py-24">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500 mb-2">
                      Orchestrate actions with 3rd parties in minutes
                    </h2>
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl my-0">
                        Custom Actions
                      </h3>
                      <div className="pl-2">
                        <Badge color="sky">Beta</Badge>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                      Build, test, and deploy Custom Actions to your care flows
                      or reuse the off-the-shelf Custom Actions created by Awell
                      and other customers.
                    </p>
                    <ul
                      role="list"
                      className="mt-8 max-w-xl space-y-8 text-slate-600"
                    >
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Simple to build.
                          </strong>{' '}
                          Awell provides developers with an easy-to-use SDK
                          which makes building Custom Actions a breeze.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Simple to use.
                          </strong>{' '}
                          Take away complexity for your clinical experts so they
                          only have to worry about building the perfect care
                          flow.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Source-controlled.
                          </strong>{' '}
                          The code for Custom Actions is source-controlled so it
                          is easy and safe to release updates.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-12">
                      <LinkButton
                        href={`/${Space.AWELL_EXTENSIONS}/docs/custom-actions/what-are-custom-actions`}
                        label="Learn more about Custom Actions"
                        color="sky"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center sm:justify-end">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1680856179/Awell%20Extensions/custom_actions.png"
                    alt="Custom Actions"
                    className="w-full self-center h-auto max-w-none rounded-xl shadow-xl ring-1 ring-slate-400/10 sm:w-full md:-ml-4 lg:ml-0"
                    width={2036}
                    height={1886}
                  />
                </div>
              </div>
            </div>
            <div className="py-16 py-16 sm:py-24">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg font-semibold leading-8 text-slate-900">
                  We have off-the-shelf extensions with the most-innovative
                  platforms
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://cdn.cookielaw.org/logos/bdc13dc2-1779-4d1b-b2b6-40bee9e76dcd/9ef530fc-99ee-494e-9f29-a784d6aebc78/69b26fe2-5069-4114-bc34-29de7e9a9c49/healthie-logo.jpg"
                    alt="Healthie"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://cal.com/android-chrome-512x512.png"
                    alt="Cal.com"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://www.elationhealth.com/wp-content/themes/elation2021/assets/images/elation-health-logo-blue.svg"
                    alt="Elation"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Twilio-logo-red.svg/2560px-Twilio-logo-red.svg.png"
                    alt="Twilio"
                  />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://assets-global.website-files.com/61c0a8113e6c0db0dcedae5a/6359eb47befa0c414c6a21e9_sign-logo.svg"
                    alt="DropboxSign"
                  />
                </div>
              </div>
            </div>
            <div className="overflow-hidden py-16 sm:py-24">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1680869046/Awell%20Extensions/extension_webhooks.png"
                    alt="Custom Actions"
                    className="w-4/5 h-auto max-w-none rounded-xl shadow-md ring-1 ring-slate-400/10 sm:w-[24rem] md:-ml-4 lg:ml-0"
                    width={1268}
                    height={2228}
                  />
                </div>
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500 mb-2">
                      Listen to events from 3rd parties
                    </h2>
                    <div className="flex items-center">
                      <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl my-0">
                        Webhooks
                      </h3>
                      <div className="pl-2">
                        <Badge color="purple">Alpha</Badge>
                      </div>
                    </div>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                      Create custom webhook endpoints any system can send
                      requests to. You have full control about how to handle the
                      incoming webhook and the actions that need to be performed
                      in the Awell system.
                    </p>
                    <ul
                      role="list"
                      className="mt-8 max-w-xl space-y-8 text-slate-600"
                    >
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Automation.
                          </strong>{' '}
                          Webhook events can be used to automatically trigger
                          actions in Awell based on events in other systems.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Integration.
                          </strong>{' '}
                          By listening to webhook events, you can more easily
                          integrate third-party services with Awell.
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <CheckCircleIcon
                          className="mt-1 h-5 w-5 flex-none text-blue-600 dark:text-sky-500"
                          aria-hidden="true"
                        />
                        <span className="dark:text-slate-400">
                          <strong className="font-semibold text-slate-900 dark:text-slate-300">
                            Flexibility.
                          </strong>{' '}
                          Webhook events can be used to receive a wide range of
                          data and information from third-party services, making
                          them a flexible option for a variety of use cases.
                        </span>
                      </li>
                    </ul>
                    <div className="mt-12">
                      <LinkButton
                        href={`/${Space.AWELL_EXTENSIONS}/docs/webhooks/what-are-webhooks`}
                        label="Learn more about Webhooks"
                        color="sky"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-16 sm:py-24">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                <p className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500">
                  Ready, set, beta!
                </p>
                <h3
                  id="beta"
                  className="scroll-mt-40 mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
                >
                  Step into the future with our beta release
                </h3>
                <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-slate-700 lg:max-w-none lg:grid-cols-2 dark:text-slate-400">
                  <div>
                    <p>
                      <strong>
                        Custom Actions are currently available in beta but
                        Webhooks are still in alpha.
                      </strong>{' '}
                      Both are already available for our users and we will
                      continue to refine and perfect them. By using both Custom
                      Actions and Webhooks, you have the unique opportunity to
                      be among the first to experience the technology and help
                      shape the future of our product.
                    </p>
                    <p className="mt-8">
                      <strong>
                        Custom Actions (beta) can already be used in live
                        (production) care flows.
                      </strong>{' '}
                      By means of internal testing, we have a reached a
                      confidence level where we are comfortable for them already
                      being used in a production setting. But please be aware
                      that it is a beta release, and as such, you may encounter
                      bugs or glitches. However, we are constantly monitoring
                      and improving the actions to ensure the best possible
                      experience for our users.
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>
                        Webhooks (alpha) should not be used in live (production)
                        care flows yet
                      </strong>{' '}
                      but they can already be used for testing purposes or to
                      help you validate a specific use case. The Awell team is
                      working towards a beta release of Webhooks in Q2 of 2023
                      still.
                    </p>
                    <p className="mt-8">
                      Your feedback and suggestions are invaluable to us, and we
                      are committed to incorporating them as we work towards a
                      full release. Thank you for being a part of our journey,
                      and we can not wait to hear your thoughts!
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden pt-16 lg:pt-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="mb-[-25%] rounded-xl shadow-2xl ring-1 ring-slate-900/10"
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1680870211/Awell%20Extensions/beta_alpha_release.png"
                    alt="Beta release for Custom Actions and Alpha release for webhooks"
                  />
                  <div className="relative" aria-hidden="true">
                    <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white dark:from-slate-900 pt-[7%]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <FAQ
              faqs={[
                {
                  question:
                    'Can I already use Custom Actions in my live (production) care flows?',
                  answer:
                    "<p><strong>Yes, you can!</strong> We have done plenty of internal testing before putting the beta version out there so we are confident for them already being used in production care flows.</p><br/><p>Do keep in mind that beta doesn't mean we can guarantee there might not be any bumps in the road still. But we are actively and closely monitoring all our beta extensions so if any issues pop up, we will be able to help you quickly.</p>",
                },
                {
                  question:
                    'Can I use Extension Webhooks in my live (production) care flows?',
                  answer:
                    "<p>No, webhooks are currently still in alpha so we don't advise using them in a production setting just yet. They can already be used for testing or to validate a certain use case you might have.</p><br/><p>There is a lot of cool things coming for webhooks and a beta release can be expected in Q2 of 2023.</p>",
                },
                {
                  question: 'Can I build my own extensions?',
                  answer:
                    "<p><strong>Absolutely, yes!</strong> We even encourage you to do so. You can build an extension to integrate with a 3rd party we haven't built one for or build an extension specifically to integrate with one of your proprietary systems.</p>",
                },
              ]}
            />
          </div>
          <footer className="text-sm leading-6">
            <div className="mx-auto divide-y divide-slate-200 dark:divide-slate-700">
              <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-600">
                <div className="leading-none text-slate-700 dark:text-slate-200">
                  <svg className="w-32" viewBox="0 0 190 50">
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
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}

BetaExtensions.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
