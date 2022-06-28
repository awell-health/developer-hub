import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { SEO as SeoSettings } from '../../config/seo'

interface SeoProps {
  title?: string
  description?: string
  url: string
  siteName?: string
  canonicalUrl: string
  preventCrawling?: boolean
}

export const SEO = ({
  title,
  description = SeoSettings.description,
  url = SeoSettings.rootUrl,
  siteName = SeoSettings.title,
  canonicalUrl,
  preventCrawling,
}: SeoProps) => {
  const router = useRouter()

  const titleSuffix =
    router.asPath === '/'
      ? SeoSettings.title
      : router.asPath.includes('awell-orchestration')
      ? 'Awell Orchestration'
      : router.asPath.includes('awell-score')
      ? 'Awell Score'
      : ''

  const generatedTitle = `${title ? title + ' | ' : ''}${titleSuffix}`

  return (
    <Head>
      <title>{generatedTitle}</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${SeoSettings.rootUrl}${url}`}
        key="ogurl"
      />
      {preventCrawling && <meta name="robots" content="noindex" />}
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
      <link rel="canonical" href={`${SeoSettings.rootUrl}${canonicalUrl}`} />
    </Head>
  )
}
