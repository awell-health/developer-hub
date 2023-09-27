/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ReactNode } from 'react'

import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

const getStartedItems = [
  {
    id: 1,
    name: 'Introduction & Core concepts',
    description:
      'If you are new to Awell and care flows, familiarize yourself with our core concepts in the introduction',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/what-is-awell-orchestration`,
  },
  {
    id: 2,
    name: 'Quickstart',
    description: 'You want to get up and running? Head over to the Quickstart',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/design-and-orchestrate-care-flows`,
  },
  {
    id: 3,
    name: 'Integration options',
    description:
      'Curious to understand the different ways to integrate with Awell? Click on the options below.',
    href: `#integrate-with-awell`,
  },
]

const domains = [
  {
    url: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/overview-care`,
    title: 'Operate and manage care flows',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description:
      'Manage your care flows on organization level, see who needs attention and coordinate care efficiently.',
  },
  {
    url: `/${Space.AWELL_ORCHESTRATION}/docs/activities/overview-activities`,
    title: 'Interact with activities',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description:
      'Set up how stakeholders like patients, doctors and other care team members interact with activities in a care flow.',
  },
  {
    url: `/${Space.AWELL_ORCHESTRATION}/docs/data/overview-data`,
    title: 'Get data and events out',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    ),
    description:
      'Get data out of the platform for analysis, push data to any other system and leverage events for automation.',
  },
]

export default function Home() {
  return (
    <>
      <SEO
        description="Explore our guides, API references, and examples to start integrating with Awell."
        url="/"
        canonicalUrl="/awell-orchestration"
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <div className="overflow-hidden py-4 lg:py-8">
            <div>
              <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="relative">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    Get Started
                  </h3>
                  <p className="mt-3 text-lg text-slate-500 dark:text-slate-400">
                    Use Awell to build care flows in our no-code editor and
                    embed them into your tech stack. Explore our guides, API
                    references, and examples to start integrating with Awell.
                  </p>

                  <dl className="mt-10 space-y-10">
                    {getStartedItems.map((item) => (
                      <Link key={item.id} href={item.href}>
                        <a title={item.name} className="block group">
                          <div className="relative">
                            <dt>
                              <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-blue-600 font-semibold text-xl dark:bg-slate-800 dark:text-slate-100">
                                {item.id}
                              </div>
                              <p className="ml-16 text-lg font-semibold leading-6 text-slate-900 group-hover:text-blue-600 dark:text-sky-400 dark:group-hover:text-sky-500">
                                {item.name}
                              </p>
                            </dt>
                            <dd className="mt-1 ml-16 text-base text-slate-500 dark:text-slate-400">
                              {item.description}
                            </dd>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </dl>
                </div>

                <div
                  className="relative -mx-4 mt-10 lg:mt-0"
                  aria-hidden="true"
                >
                  <figure className="w-full flex flex-col justify-center text-center">
                    <img
                      src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1651756063/Developer%20portal/628df8e945c036bc4dc479bf_Home_Visual-p-1080.png"
                      alt="Pathway versioning"
                      className="w-full sm:w-11/12 mx-auto"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2
            id="integrate-with-awell"
            className="text-slate-900 text-xl lg:text-2xl font-bold dark:text-white m-0 p-0"
          >
            Integrate with Awell
          </h2>
          <p className="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Once you&apos;ve designed and published a care flow, you can
            interact with it in different ways to support care delivery,
            coordination, automation and analysis of the data collected in that
            care flow.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-6">
            {domains.map((d) => (
              <Link href={d.url} key={d.title}>
                <a className="block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                  <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                    <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                      <div>
                        <div className="bg-blue-600 text-white dark:bg-sky-400 rounded-lg p-1.5 inline-block">
                          {d.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold dark:text-sky-400">
                          {d.title}
                        </h3>
                        <span className="pt-3">{d.description}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="pb-16 text-sm leading-6">
        <div className="max-w-7xl mx-auto divide-y divide-slate-200 px-4 sm:px-6 md:px-8 dark:divide-slate-700">
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
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
