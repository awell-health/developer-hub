import 'graphiql/graphiql.css'

import { CodeIcon, LightningBoltIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { ReactNode } from 'react'

import { Badge } from '@/components/Badge'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
// import { Spinner } from '@/components/Spinner'
import { useExtensionsMarketplace } from '@/hooks/useExtensionsMarketplace'
import { Space } from '@/types/space.types'

export default function Marketplace() {
  const { extensions } = useExtensionsMarketplace()

  // if (loading) {
  //   return <Spinner />
  // }

  return (
    <>
      <SEO
        title="Marketplace | Awell Extensions"
        url={`/${Space.AWELL_EXTENSIONS}/marketplace`}
        canonicalUrl={`/${Space.AWELL_EXTENSIONS}/marketplace`}
      />
      <div className="relative max-w-6xl mx-auto pt-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <div className="overflow-hidden py-4 lg:py-8">
            <div>
              <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="relative">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0">
                      Marketplace
                    </h3>
                    <div className="ml-2">
                      <Badge color="sky">Alpha</Badge>
                    </div>
                  </div>
                  <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">
                    Bring your care flows to the next level with Awell
                    Extensions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section aria-labelledby="stories" className="mt-4">
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {extensions.map((extension) => (
              <Link href={`#`} key={extension.key}>
                <a className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                  <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                    <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                      <div>
                        <div className="p-2 bg-slate-100 inline-block rounded">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={extension.icon_url}
                            alt={extension.title}
                            className="w-8 h-8"
                          />
                        </div>
                        <h3 className="font-semibold dark:text-sky-400 mb-2 mt-1">
                          {extension.title}
                        </h3>
                        <div className="mb-4 flex gap-2">
                          <Badge color="sky">{extension.category}</Badge>
                        </div>
                        <span className="pt-3">{extension.description}</span>
                        <div className="mt-4 flex gap-4 text-sm">
                          {Object.keys(extension.actions).length > 0 && (
                            <div className="flex gap-1 items-center">
                              <LightningBoltIcon className="w-4 h-4" />
                              {Object.keys(extension.actions).length}{' '}
                              {Object.keys(extension.actions).length === 1
                                ? 'Custom Action'
                                : 'Custom Actions'}
                            </div>
                          )}
                          {extension.webhooks.length > 0 && (
                            <div className="flex gap-1 items-center">
                              <CodeIcon className="w-4 h-4" />
                              {extension.webhooks.length}{' '}
                              {extension.webhooks.length === 1
                                ? 'Webhook'
                                : 'Webhooks'}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

Marketplace.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
