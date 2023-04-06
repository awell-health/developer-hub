import Link from 'next/link'
import { ReactNode } from 'react'

import { Badge } from '@/components/Badge'
import { LinkButton } from '@/components/Button'
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
      <div className="py-24 sm:py-32 lg:pb-40">
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
              their own Custom Actions or integrate their care flows with 3rd
              parties with custom webhooks.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkButton
                href={rootRoutes[Space.AWELL_EXTENSIONS].docs}
                label="Get started"
                color="sky"
              />
              <Link href="#">
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
        </div>
      </div>
    </>
  )
}

BetaExtensions.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
