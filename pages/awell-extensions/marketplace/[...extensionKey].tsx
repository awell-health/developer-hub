import { CodeIcon, LightningBoltIcon } from '@heroicons/react/outline'
import { isNil } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, ReactNode } from 'react'

import { Badge } from '@/components/Badge'
import { Button } from '@/components/Button'
import { HomeLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Spinner } from '@/components/Spinner'
import { useExtension } from '@/hooks/useExtension'
import { useExtensions } from '@/hooks/useExtensions'
import { Space } from '@/types/space.types'

const ExtensionDetail: FC<{ label: string }> = ({ label, children }) => {
  return (
    <dl>
      <dt className="font-semibold text-slate-900 dark:text-slate-200">
        {label}
      </dt>
      <dd className="text-slate-500 dark:text-slate-400">{children}</dd>
    </dl>
  )
}

export default function ExtensionPage() {
  const router = useRouter()
  const extensionKey = String(router.query?.extensionKey) ?? ''
  const { getRandomExtensions, loading: loadingAllExtensions } = useExtensions()
  const { extension, loading: loadingExtension } = useExtension(extensionKey)

  if (loadingExtension) {
    return <div />
  }

  if (isNil(extension)) {
    return <div>Extension not found</div>
  }

  return (
    <>
      <SEO
        title={`${extension?.title} | Marketplace`}
        description={extension?.description}
        url={`/${Space.AWELL_EXTENSIONS}/marketplace/${extensionKey}`}
        canonicalUrl={`/${Space.AWELL_EXTENSIONS}/marketplace/${extensionKey}`}
      />
      <div className="bg-slate-50 border-b border-slate-100 dark:bg-slate-800 dark:border-slate-700">
        <div className="max-w-6xl py-12 mx-auto px-4 sm:px-6 md:px-8">
          <Link href={`/${Space.AWELL_EXTENSIONS}/marketplace`}>
            <a
              title="Back to the Marketplace"
              className="inline-block text-blue-600 text-base pb-4 dark:text-sky-400"
            >
              &#8592; Back to the Marketplace
            </a>
          </Link>
          <div className="flex justify-between items-center">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-white border border-slate-200 rounded-lg dark:bg-slate-700 dark:border-slate-600">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={extension.icon_url}
                  alt={extension.title}
                  className="w-12 h-12"
                />
              </div>
              <div>
                <h1 className="font-semibold dark:text-sky-400 my-0">
                  {extension.title}
                </h1>
                <span className="mt-3 text-lg">{extension.description}</span>
                <div className="mt-2">
                  <Badge color="sky">{extension.category}</Badge>
                </div>
              </div>
            </div>
            <div>
              <Button
                label="Install extension"
                color="sky"
                disabled={true}
                onClick={() => null}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-6xl py-12 mx-auto px-4 sm:px-6 md:px-8 flex">
        <div className="w-3/4">
          <h2>Documentation</h2>
          <div id="content-wrapper">
            <p>More documentation is coming soon!</p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <ExtensionDetail label="Pricing">Free</ExtensionDetail>
          <ExtensionDetail label="Custom Actions">
            {Object.values(extension.actions).map((action) => (
              <div key={action.title}>{action.title}</div>
            ))}
          </ExtensionDetail>
          <ExtensionDetail label="Author">
            {extension.author.authorType}
          </ExtensionDetail>
          <ExtensionDetail label="Version">1</ExtensionDetail>
          {extension.author.authorType === 'Awell' && (
            <ExtensionDetail label="Support">
              info@awellhealth.com
            </ExtensionDetail>
          )}
        </div>
      </section>
      <section className="max-w-6xl mt-6 mx-auto px-4 sm:px-6 md:px-8">
        <div className="border-t border-slate-200 pt-8 dark:border-slate-800">
          <h2>Other extensions</h2>
          {loadingAllExtensions ? (
            <Spinner />
          ) : (
            <div className="grid md:grid-cols-3 gap-4">
              {getRandomExtensions(3, extension.key).map((extension) => (
                <Link
                  href={`/${Space.AWELL_EXTENSIONS}/marketplace/${extension.key}`}
                  key={extension.key}
                >
                  <a className="custom-link block group relative rounded-xl border border-slate-200 dark:border-slate-800">
                    <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
                    <div className="relative overflow-hidden rounded-xl p-6 flex flex-col justify-start h-full">
                      <div className="dark:text-slate-400 pt-1 flex flex-col flex-grow">
                        <div>
                          <div className="p-2 bg-slate-100 inline-block rounded-lg">
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
          )}
        </div>
      </section>
      <footer className="max-w-6xl py-12 mx-auto px-4 sm:px-6 md:px-8 pb-16 text-sm leading-6">
        <div className="mx-auto divide-y divide-slate-200 dark:divide-slate-700">
          <div className="mt-4 pt-10 border-t border-slate-200 dark:border-slate-600">
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

ExtensionPage.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
