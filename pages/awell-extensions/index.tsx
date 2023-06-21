/* eslint-disable react/no-unescaped-entities */
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
        title="Awell Extensions"
        url={`/${Space.AWELL_EXTENSIONS}`}
        canonicalUrl={`/${Space.AWELL_EXTENSIONS}`}
      />
      <div className="pt-16 sm:pt-24 lg:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Orchestrate actions in homegrown and third-party apps{' '}
              <span className="text-blue-600 dark:text-sky-500">
                in minutes
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 sm:max-w-lg mx-auto">
              With Awell Extensions you can tie together the apps you already
              use for CareOps into your care flows.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkButton
                href={rootRoutes[Space.AWELL_EXTENSIONS].docs}
                label="Read the docs"
                color="sky"
              />
              <Link href="#faq">
                <a className="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300">
                  Learn more about beta release{' '}
                  <span aria-hidden="true">↓</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="my-16 flow-root sm:my-24 max-w-5xl mx-auto">
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
          <div className="my-16 pt-16 sm:my-24 sm:pt-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-center text-lg font-semibold leading-8 text-slate-900">
                Some of the best clinical and product leaders use Awell to
                automate their care flows
              </h2>
              <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:bg-white p-2 dark:rounded"
                  src="https://patinahealth.com/hs-fs/hubfs/raw_assets/public/Patina_Health_January2023/images/logo.png"
                  alt="Patina Health"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 bg-slate-800 rounded p-2 dark:bg-transparent dark:p-2 dark:rounded-none"
                  src="https://uploads-ssl.webflow.com/614a1ca9934d3f7e2d47575f/6155a4b1b3fa24a798682ce7_Logo.png"
                  alt="Wellinks"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 p-3.5 dark:bg-white dark:p-3.5 dark:rounded"
                  src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1681405162/Awell%20Extensions/9f7a3a64e373fd9368ceecf21f898f24.png"
                  alt="Mindler"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 bg-slate-800 rounded p-2 dark:bg-transparent dark:p-2 dark:rounded-none"
                  src="https://commonsclinic.com/images/logos/commons-logo-light.svg"
                  alt="Commons Clinic"
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                  src="https://cdn.shopify.com/s/files/1/0342/7850/6631/t/17/assets/logo.svg?v=3128126792532175881646291453"
                  alt="Better Health"
                />
              </div>
            </div>
          </div>
          <div className="my-16 sm:my-24">
            <div className="overflow-hidden py-16 sm:py-24">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <div className="flex items-center mb-2">
                      <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500 mb-0">
                        Custom Actions
                      </h2>
                      <div className="pl-2">
                        <Badge color="sky">Beta</Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl my-0">
                      Orchestrate actions in third-party apps in minutes
                    </h3>
                    <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
                      Integrate with EHRs, communication providers, form
                      providers, eSignature... all with the click of a button.
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
                          Take away complexity for your clinical and product
                          experts so they can build care flows that improve
                          lives whithout bothering the engineering team.
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
                  We have off-the-shelf extensions with the most innovative
                  platforms
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:bg-white dark:p-1 dark:rounded"
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1681378944/Awell%20Extensions/healthie-logo.jpg"
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
                <div className="flex justify-center mt-12">
                  <LinkButton
                    color="sky"
                    label="Explore the Marketplace"
                    href={`/${Space.AWELL_EXTENSIONS}/marketplace`}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="mt-8 sm:mt-16 mx-auto max-w-2xl text-center">
                <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500 mb-2">
                  Built by developers, for developers
                </h2>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl my-0">
                  Build, test, and deploy your own extensions to connect your
                  homegrown apps into care flows
                </h3>
                <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400 sm:max-w-lg mx-auto">
                  We provide developers with an easy to use SDK (in Typescript
                  🎉) so anyone can build extensions.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <LinkButton
                    href={`${Space.AWELL_EXTENSIONS}/docs/getting-started/get-started`}
                    label="Get started building extensions"
                    color="sky"
                  />
                </div>
              </div>
              <div className="mt-8 flow-root sm:mt-12 max-w-5xl mx-auto">
                <div className="relative isolate overflow-hidden">
                  <div className="relative">
                    <div
                      className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 md:-mr-20 lg:-mr-36"
                      aria-hidden="true"
                    />
                    <div className="shadow-lg md:rounded-3xl">
                      <div className="bg-sky-500 dark:bg-sky-300 [clip-path:inset(0)] [clip-path:inset(0_round_theme(borderRadius.3xl))]">
                        <div
                          className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-12"
                          aria-hidden="true"
                        />
                        <div className="relative px-6 pt-8 pr-0 sm:pt-16 md:pl-16">
                          <div className="mx-auto max-w-2xl md:mx-0 md:max-w-none">
                            <div className="w-full overflow-hidden rounded-tl-xl bg-slate-800">
                              <div className="flex bg-slate-800/40 ring-1 ring-white/5">
                                <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                  <div className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 px-4 py-2 text-white">
                                    extensions/twilio/actions/sendSms.ts
                                  </div>
                                </div>
                              </div>
                              <div className="px-6 py-6 overflow-y-scroll max-h-[450px]">
                                <pre className="text-[0.8125rem] leading-6 text-gray-300">
                                  <code>
                                    <span className="text-[#E4786C]">
                                      import
                                    </span>{' '}
                                    twilioSdk{' '}
                                    <span className="text-[#E4786C]">from</span>{' '}
                                    <span className="text-[#9CCAF4]">
                                      'twilio'
                                    </span>
                                    {'\n'}
                                    <span className="text-[#E4786C]">
                                      import
                                    </span>{' '}
                                    {'{ actionFields, extensionSettings } '}
                                    <span className="text-[#E4786C]">
                                      from
                                    </span>{' '}
                                    <span className="text-[#9CCAF4]">
                                      './config'
                                    </span>
                                    {'\n'}
                                    <span className="text-[#E4786C]">
                                      import
                                    </span>{' '}
                                    {'{ '}
                                    <span className="text-[#E4786C]">
                                      type
                                    </span>{' '}
                                    Action
                                    {' }'} from{' '}
                                    <span className="text-[#9CCAF4]">
                                      '@/types'
                                    </span>
                                    {/*  */}
                                    {/*  */}
                                    {'\n'}
                                    {'\n'}
                                    <span className="text-[#E4786C]">
                                      export const
                                    </span>{' '}
                                    <span className="text-[#9CCAF4]">
                                      sendSms
                                    </span>
                                    :{' '}
                                    <span className="text-[#E9A05F]">
                                      Action
                                    </span>
                                    {`<`}
                                    <span className="text-[#E4786C]">
                                      typeof
                                    </span>{' '}
                                    actionFields,{' '}
                                    <span className="text-[#E4786C]">
                                      typeof
                                    </span>{' '}
                                    extensionSettings{'> '}
                                    <span className="text-[#E4786C]">
                                      =
                                    </span>{' '}
                                    {`{`}
                                    {'\n'}
                                    {'  '}key:{' '}
                                    <span className="text-[#9CCAF4]">
                                      'sendSms'
                                    </span>
                                    ,{'\n'}
                                    {'  '}title:{' '}
                                    <span className="text-[#9CCAF4]">
                                      'Send SMS'
                                    </span>
                                    ,{'\n'}
                                    {'  '}category:{' '}
                                    <span className="text-[#9CCAF4]">
                                      'Communication'
                                    </span>
                                    ,{'\n'}
                                    {'  '}fields:{' '}
                                    <span className="text-[#9CCAF4]">
                                      actionFields
                                    </span>
                                    ,{'\n'}
                                    {'  '}
                                    <span className="text-[#D7BFF7]">
                                      onActivityCreated
                                    </span>
                                    :{' '}
                                    <span className="text-[#E4786C]">
                                      async
                                    </span>{' '}
                                    (
                                    <span className="text-[#E9A05F]">
                                      payload
                                    </span>
                                    ,{' '}
                                    <span className="text-[#E9A05F]">
                                      onComplete
                                    </span>
                                    ,{' '}
                                    <span className="text-[#E9A05F]">
                                      onError
                                    </span>
                                    ){' '}
                                    <span className="text-[#E4786C]">{`=>`}</span>{' '}
                                    {`{`}
                                    {'\n'}
                                    {'    '}
                                    <span className="text-[#E4786C]">
                                      try
                                    </span>{' '}
                                    {`{`}
                                    {'\n'}
                                    {'      '}
                                    <span className="text-[#E4786C]">
                                      const
                                    </span>{' '}
                                    {`{`}
                                    {'\n'}
                                    {'        '}
                                    <span className="text-[#E9A05F]">
                                      settings
                                    </span>
                                    : {`{ `}
                                    <span className="text-[#9CCAF4]">
                                      accountSid
                                    </span>
                                    ,{' '}
                                    <span className="text-[#9CCAF4]">
                                      authToken
                                    </span>
                                    ,{' '}
                                    <span className="text-[#9CCAF4]">
                                      fromNumber
                                    </span>
                                    {` }`},{'\n'}
                                    {'        '}
                                    <span className="text-[#E9A05F]">
                                      fields
                                    </span>
                                    : {`{ `}
                                    <span className="text-[#9CCAF4]">
                                      recipient
                                    </span>
                                    ,{' '}
                                    <span className="text-[#9CCAF4]">
                                      message
                                    </span>
                                    {` }`},{'\n'}
                                    {'      '}
                                    {`}`}{' '}
                                    <span className="text-[#E4786C]">=</span>{' '}
                                    payload
                                    {'\n'}
                                    {'\n'}
                                    {'      '}
                                    <span className="text-[#E4786C]">
                                      const
                                    </span>{' '}
                                    <span className="text-[#9CCAF4]">
                                      client
                                    </span>{' '}
                                    <span className="text-[#E4786C]">=</span>{' '}
                                    <span className="text-[#D7BFF7]">
                                      twilioSdk
                                    </span>
                                    (accountSid, authToken, {`{`}
                                    {'\n'}
                                    {'        '}region:{' '}
                                    <span className="text-[#9CCAF4]">
                                      'IE1'
                                    </span>
                                    ,{'\n'}
                                    {'        '}accountSid,
                                    {'\n'}
                                    {'      '}
                                    {`}`}){'\n'}
                                    {'\n'}
                                    {'      '}
                                    <span className="text-[#E4786C]">
                                      await
                                    </span>{' '}
                                    client.messages.
                                    <span className="text-[#D7BFF7]">
                                      create
                                    </span>
                                    ({`{`}
                                    {'\n'}
                                    {'        '}body: message,
                                    {'\n'}
                                    {'        '}from: fromNumber,
                                    {'\n'}
                                    {'        '}to: recipient,
                                    {'\n'}
                                    {'      '}
                                    {`}`}){'\n'}
                                    {'\n'}
                                    {'      '}
                                    <span className="text-[#E4786C]">
                                      await
                                    </span>{' '}
                                    <span className="text-[#D7BFF7]">
                                      onComplete
                                    </span>
                                    ()
                                    {'\n'}
                                    {'    '}
                                    {`}`}{' '}
                                    <span className="text-[#E4786C]">
                                      catch
                                    </span>{' '}
                                    (err) {`{`}
                                    {'\n'}
                                    {'      '}
                                    <span className="text-[#E4786C]">
                                      await
                                    </span>{' '}
                                    <span className="text-[#D7BFF7]">
                                      onError
                                    </span>
                                    ()
                                    {'\n'}
                                    {'    '}
                                    {`}`}
                                    {'\n'}
                                    {'  '}
                                    {`}`}
                                    {'\n'}
                                    {`}`}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          </div>
                          <div
                            className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 md:rounded-3xl"
                            aria-hidden="true"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden py-16 mt-8 sm:py-24 sm:mt-16">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="flex justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1680869046/Awell%20Extensions/extension_webhooks.png"
                    alt="Webhooks"
                    className="w-4/5 h-auto max-w-none rounded-xl shadow-md ring-1 ring-slate-400/10 sm:w-[24rem] md:-ml-4 lg:ml-0"
                    width={1268}
                    height={2228}
                  />
                </div>
                <div className="lg:pr-8 lg:pt-4">
                  <div className="lg:max-w-lg">
                    <div className="flex items-center mb-2">
                      <h2 className="text-base font-semibold leading-7 text-blue-600 dark:text-sky-500 mb-0">
                        Webhooks
                      </h2>
                      <div className="pl-2">
                        <Badge color="sky">Beta</Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl my-0">
                      Listen to events from 3rd parties
                    </h3>
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
                          actions based on events happening in other systems.
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
                          By listening to webhook events you can easily
                          integrate homegrown and third-party apps into your
                          care flows.
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
                          data and information from homegrown and third-party
                          apps, making them a flexible option for a variety of
                          use cases.
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
          </div>
          <div>
            <FAQ
              faqs={[
                {
                  question: 'What is the state of Awell Extensions today?',
                  answer:
                    '<p><strong>Awell Extensions are currently in beta.</strong> By using Awell Extensions, you have the unique opportunity to be among the first to experience the technology and help shape the future of our product. Your feedback and suggestions are invaluable to us, and we are committed to incorporating them as we work towards a stable release.</p>',
                },
                {
                  question: 'Can I build my own extensions?',
                  answer: `<p><strong>Absolutely, yes!</strong> We even encourage you to do so. You can build an extension to integrate with a 3rd party we haven't built one for or build an extension specifically to integrate with one of your homegrown systems.</p><br/><p><a href='${
                    rootRoutes[Space.AWELL_EXTENSIONS].docs
                  }' class='text-blue-600 dark:text-sky-500 underline font-semibold'>Read our docs and get started with building your first extension.</a></p>`,
                },
                {
                  question:
                    'Are all extensions in the Marketplace available for free?',
                  answer: `<p>Many extensions are included in the standard Awell licensing fee. However, there are some some premium extensions (think EHRs) that come with a small additional premium. The cost is determined by the third-party extension you would like to use. Contact <a href='mailto:rik@awellhealth.com' class='text-blue-600 dark:text-sky-500 underline font-semibold'>rik@awellhealth.com</a> if you'd like to learn more.</p>`,
                },
                {
                  question:
                    'Can Awell be considered a HIPAA and GDPR compliant version of Zapier?',
                  answer: `<p>The Extensions Marketplace can definitely be seen as a HIPAA & GDPR compliant version of Zapier (yes, we sign BAAs), but this is only one part of our platform. Awell goes above and beyond to tackle complex care processes and integrate seamlessly with EHRs and other healthcare- specific tools without breaking a sweat. So, if you're looking for a tool that can make your healthcare processes run like a well-oiled machine, look no further than Awell!</p>`,
                },
                {
                  question: 'I have security and data-related questions',
                  answer: `<p>Have a look <a href='/faq' class='text-blue-600 dark:text-sky-500 underline font-semibold'>here</a>.</p>`,
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
