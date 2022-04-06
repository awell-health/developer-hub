import Image from 'next/image'
import { ReactNode } from 'react'

import awellLogo from '../public/awell-full-logo.svg'
import featuredSteps from '../public/images/3-easy-steps.png'
import featuredWorkflows from '../public/images/automate-digital-workflows.png'
import { LinkButton } from '../src/components/Button'
import { HomeLayout } from '../src/components/Layouts'
import { docsStartRoute } from '../src/config/routes'

export default function Home() {
  return (
    <>
      <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
        <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white">
          Orchestrate clinical workflows at scale.
        </h1>
        <p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
          Build clinical workflows with{' '}
          <span className="font-mono font-medium text-blue-600 dark:text-blue-400">
            Awell Studio
          </span>
          , publish, and{' '}
          <span className="font-mono font-medium text-blue-600 dark:text-blue-400">
            orchestrate
          </span>{' '}
          them via our GraphQL API.
        </p>
        <div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <LinkButton label="Get started" href={docsStartRoute} size="base" />
          <button
            type="button"
            className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-none text-slate-300 dark:text-slate-400"
              aria-hidden="true"
            >
              <path d="m19 19-3.5-3.5"></path>
              <circle cx="11" cy="11" r="6"></circle>
            </svg>
            <span className="flex-auto">Quick search...</span>
            <kbd className="font-sans font-semibold dark:text-slate-500">
              <abbr
                title="Command"
                className="no-underline text-slate-300 dark:text-slate-500"
              >
                ⌘
              </abbr>{' '}
              K
            </kbd>
          </button>
        </div>
        <div className="max-w-2xl mx-auto mt-10 md:mt-20 lg:mt-20">
          <Image
            className="rounded-3xl"
            src={featuredWorkflows}
            alt="Automated digital health workflows"
          />
        </div>
      </div>
      <div className="px-4 sm:px-7 max-w-screen-2xl mx-auto mt-16 md:mt-20 lg:mt-32 xl:mt-40">
        <h5 className="text-green-500 text-3xl lg:text-4xl font-bold">
          Clinical workflow automation made easy
        </h5>
        <h2 className="max-w-4xl mt-4 font-brand text-5xl sm:text-6xl lg:text-7xl font-bold">
          We can’t wait to see what you build
        </h2>
        <p className="mt-4 text-neutrals-light-10 text-lg">
          Build end-to-end care flows in days and orchestrate your them through
          our easy-to-use APIs.
        </p>
      </div>
      <div className="mt-10 md:mt-20 lg:mt-40">
        <div className="mx-auto sm:px-6 px-4 dark:text-white max-w-screen-2xl">
          <div className="rounded-3xl bg-slate-700">
            <div className="py-10 mx-auto p-7 sm:px-12 sm:py-16 lg:py-20 lg:px-16">
              <div className="flex justify-between space-x-4">
                <h2 className="text-white text-5xl sm:text-6xl lg:text-7xl font-bold">
                  Three easy steps
                </h2>
              </div>
              <div className="grid items-center gap-16 mt-8 md:my-12 lg:my-20 md:grid-cols-2 lg:grid-cols-3">
                <div className="grid items-center col-span-1 space-y-8 md:space-y-12 xl:space-y-20">
                  <div className="flex">
                    <div className="grid flex-shrink-0 w-8 h-8 bg-white rounded-full md:w-14 md:h-14 xl:w-18 xl:h-18 place-content-center bg-opacity-20">
                      <h4 className="text-white text-2xl lg:text-3xl font-bold">
                        1
                      </h4>
                    </div>
                    <div className="ml-6 xl:ml-8">
                      <h5 className="text-white text-3xl lg:text-4xl font-bold">
                        Build
                      </h5>
                      <p className="lg:text-lg text-slate-300">
                        Clinical and product experts build pathways with Awell
                        Studio, our convenient drag & drop builder.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="grid flex-shrink-0 w-8 h-8 bg-white rounded-full md:w-14 md:h-14 xl:w-18 xl:h-18 place-content-center bg-opacity-20">
                      <h4 className="text-white text-2xl lg:text-3xl font-bold">
                        2
                      </h4>
                    </div>
                    <div className="ml-6 xl:ml-8">
                      <h5 className="text-white text-3xl lg:text-4xl font-bold">
                        Validate and publish
                      </h5>
                      <p className="lg:text-lg text-slate-300">
                        Manage pathway versions, validate them, and publish for
                        go live.
                      </p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="grid flex-shrink-0 w-8 h-8 bg-white rounded-full md:w-14 md:h-14 xl:w-18 xl:h-18 place-content-center bg-opacity-20">
                      <h4 className="text-white text-2xl lg:text-3xl font-bold">
                        3
                      </h4>
                    </div>
                    <div className="ml-6 xl:ml-8">
                      <h5 className="text-white text-3xl lg:text-4xl font-bold">
                        Orchestrate
                      </h5>
                      <p className="lg:text-lg text-slate-300">
                        Use our APIs to orchestrate your workflows and feed your
                        patient and care team apps with the next steps, the next
                        information to show, or the next data to capture.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-2">
                  <figure className="relative overflow-hidden bg-white border-2 rounded-lg border-aqua">
                    <Image
                      className="rounded-lg w-full -mb-0.5"
                      src={featuredSteps}
                      alt="3 easy steps"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-7 max-w-screen-lg mx-auto">
        <div className="grid py-40 text-center justify-items-center">
          <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Lets build the future of healthcare together!
          </h1>
          <p className="mt-4 md:mt-6 text-lg">
            Build your care flows in a fraction of the time you do today and
            become a digital health winner.
          </p>
          <div className="mt-5 md:mt-10">
            <LinkButton
              label="Get started"
              href={docsStartRoute}
              size="xl"
              color="sky"
            />
          </div>
        </div>
        <div className="-mt-10 md:-mt-20 lg:-mt-30"></div>
      </div>
      <footer className="pb-16 text-sm leading-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="w-32 leading-none">
              <Image src={awellLogo} alt="Awell Health" />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
