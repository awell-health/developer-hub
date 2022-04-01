import Head from 'next/head'
import React from 'react'

import { SEO as SeoSettings } from '../../config/seo'

interface SeoProps {
  title?: string
  description?: string
  url?: string
  siteName?: string
}

export const SEO = ({
  title = SeoSettings.title,
  description = SeoSettings.description,
  url = SeoSettings.rootUrl,
  siteName = SeoSettings.title,
}: SeoProps) => {
  return (
    <Head>
      <title>{title} | nckhell</title>
      <meta name="description" content={description} />
      <meta
        property="og:url"
        content={`${SeoSettings.rootUrl}${url}`}
        key="ogurl"
      />
      <meta property="og:site_name" content={siteName} key="ogsitename" />
      <meta property="og:title" content={title} key="ogtitle" />
      <meta property="og:description" content={description} key="ogdesc" />
    </Head>
  )
}
