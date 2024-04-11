import { isEmpty, isNil } from 'lodash'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { type GetServerSideProps } from 'next/types'
import { ReactNode } from 'react'

import { LinkButton } from '@/components/Button'
import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import {
  CallToActionPanel,
  ExtensionCard,
} from '@/components/Marketplace/atoms'
import { SEO } from '@/components/SEO'
import { useExtensions } from '@/hooks/useExtensions'
import { Extension } from '@/types/extenion.types'
import { Space } from '@/types/space.types'

type PageProps = {
  extensions: Extension[]
}

export default function Marketplace({ extensions }: PageProps) {
  const { categories, marketplaceExtensions } = useExtensions(extensions)
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
        </div>
        <section aria-labelledby="stories">
          <div className="border-t border-slate-200 dark:border-slate-800 mt-4 pt-8 flex items-start gap-24">
            <div className="w-1/6 grow-0 shrink-0">
              <h3>Category</h3>
              <ul className="space-y-4 pb-6 text-base font-medium text-slate-800 dark:text-slate-400">
                {categories.map((category) => (
                  <li key={category}>
                    <Link
                      href={{ query: { category } }}
                      className={
                        router.query?.category === category
                          ? 'font-semibold text-blue-600 dark:text-sky-400'
                          : ''
                      }
                    >
                      {category}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href={{ query: {} }}
                    className={
                      isNil(router.query?.category) ||
                      isEmpty(router.query?.category)
                        ? 'font-semibold text-blue-600 dark:text-sky-400'
                        : ''
                    }
                  >
                    All categories
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
              {marketplaceExtensions
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
        </section>
        <div className="my-16">
          <CallToActionPanel />
        </div>
        <Footer />
      </div>
    </>
  )
}

Marketplace.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT ?? '')
  const extensions = await res.json()
  return { props: { extensions } }
}
