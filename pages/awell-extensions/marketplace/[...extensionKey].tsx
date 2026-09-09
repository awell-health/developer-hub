import { isNil } from 'lodash'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next/types'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { Footer } from '@/components/Footer'
import { HomeLayout } from '@/components/Layouts'
import { ExtensionDetail } from '@/components/Marketplace/pages'
import { SEO } from '@/components/SEO'
import { Extension } from '@/types/extenion.types'
import { Space } from '@/types/space.types'

type PageProps = {
  extension: Extension
}

export default function ExtensionPage({ extension }: PageProps) {
  const router = useRouter()
  const extensionKey = String(router.query?.extensionKey) ?? ''

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
      <ExtensionDetail extension={extension} />
      <div className="mx-auto max-w-6xl py-12 px-4 sm:px-6 md:px-8 pb-16 ">
        <Footer />
      </div>
    </>
  )
}

ExtensionPage.getLayout = function getLayout(page: ReactNode) {
  return <HomeLayout>{page}</HomeLayout>
}

interface Iparams extends ParsedUrlQuery {
  extensionKey: string[]
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { extensionKey } = context.params as Iparams

  // The route is a catch-all, but an extension key is a single identifier
  // (`slack`, `calDotCom`). Anything else would become a path on the extensions
  // API host, so refuse it here rather than forward it.
  const key = extensionKey.join('/')
  if (!/^[A-Za-z0-9_-]+$/.test(key)) {
    return { notFound: true }
  }

  const res = await fetch(
    // Host is our own env-configured API; `key` passed the identifier check above.
    // nosemgrep: AIK_js_ssrf
    `${process.env.NEXT_PUBLIC_EXTENSIONS_API_ENDPOINT}${key}`
  )
  const extension = await res.json()

  return { props: { extension } }
}
