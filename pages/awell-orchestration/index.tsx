/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

const getStartedItems = [
  {
    id: 1,
    name: 'Introduction & Core concepts',
    description:
      'If you are new to Awell and care flows, familiarize yourself with our core concepts in the introduction',
    href: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-introduction`,
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
                    Run your care flows, built with Awell Studio, for your
                    patient population and embed them into your tech stack.
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
        <Footer />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
