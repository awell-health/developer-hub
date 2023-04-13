import { ChevronRightIcon } from '@heroicons/react/outline'
import { isEmpty, isNil } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { HomeLayout } from '@/components/Layouts'
import {
  CallToActionPanel,
  ExtensionCard,
} from '@/components/Marketplace/atoms'
import { SEO } from '@/components/SEO'
import { Spinner } from '@/components/Spinner'
import { useExtensions } from '@/hooks/useExtensions'
import { Space } from '@/types/space.types'

export default function Marketplace() {
  const { extensions, categories, loading } = useExtensions()
  const router = useRouter()

  return (
    <>
      <SEO
        title="Marketplace | Awell Extensions"
        url={`/${Space.AWELL_EXTENSIONS}/marketplace`}
        canonicalUrl={`/${Space.AWELL_EXTENSIONS}/marketplace`}
      />
      <div className="relative max-w-8xl mx-auto py-4 md:pt-8 lg:pt-12 px-4 sm:px-6 md:px-8">
        <div>
          <div className="overflow-hidden">
            <div>
              <div className="relative lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
                <div className="relative">
                  <div className="flex items-center">
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-0">
                      Marketplace
                    </h3>
                  </div>
                  <p className="mt-1 text-lg text-slate-500 dark:text-slate-400">
                    Awell Extensions integrate all apps you already use for
                    CareOps in your care flows
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-2">
            <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-slate-600 ring-1 ring-slate-900/10 hover:ring-slate-900/20 dark:text-slate-400 dark:ring-slate-700 dark:hover:ring-slate-800">
              <span className="font-semibold text-blue-600 dark:text-sky-500 flex">
                🎉 Extensions are in beta
              </span>
              <span
                className="h-4 w-px bg-slate-900/10 dark:bg-slate-700"
                aria-hidden="true"
              />
              <Link href={`/${Space.AWELL_EXTENSIONS}/beta`}>
                <a className="flex items-center gap-x-1">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Learn more
                  <ChevronRightIcon
                    className="-mr-2 h-5 w-5 text-slate-400"
                    aria-hidden="true"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <section aria-labelledby="stories">
          {loading ? (
            <div className="flex justify-center my-12">
              <Spinner />
            </div>
          ) : (
            <div className="border-t border-slate-200 dark:border-slate-800 mt-4 pt-8 flex items-start gap-24">
              <div className="w-1/6 grow-0 shrink-0">
                <h3>Category</h3>
                <ul className="space-y-4 pb-6 text-base font-medium text-slate-800 dark:text-slate-400">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link href={{ query: { category } }}>
                        <a
                          className={
                            router.query?.category === category
                              ? 'font-semibold text-blue-600 dark:text-sky-400'
                              : ''
                          }
                        >
                          {category}
                        </a>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link href={{ query: {} }}>
                      <a
                        className={
                          isNil(router.query?.category) ||
                          isEmpty(router.query?.category)
                            ? 'font-semibold text-blue-600 dark:text-sky-400'
                            : ''
                        }
                      >
                        All categories
                      </a>
                    </Link>
                  </li>
                </ul>
                <h4>Request an extension</h4>
                <p>{`Can't find what you're looking for? Let us know.`}</p>
                <div className="mt-4">
                  <LinkButton
                    href={`/${Space.AWELL_EXTENSIONS}/marketplace/request-extension`}
                    label="Submit a request"
                    size="sm"
                    color="white"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {extensions
                  .filter((ext) => {
                    if (
                      isEmpty(router.query?.category) ||
                      isNil(router.query?.category)
                    ) {
                      return ext
                    }

                    return ext.category === router.query?.category
                  })
                  .map((extension) => (
                    <ExtensionCard extension={extension} key={extension.key} />
                  ))}
              </div>
            </div>
          )}
        </section>
        <div className="my-16">
          <CallToActionPanel />
        </div>
        <footer className="pb-16 text-sm leading-6">
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
    </>
  )
}

Marketplace.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}
