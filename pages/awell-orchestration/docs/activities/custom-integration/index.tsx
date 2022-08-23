// import Link from 'next/link'
import React, { ReactNode } from 'react'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { StoryBrowser } from '@/components/StoryBrowser'

export default function CustomIntegrationPage() {
  return (
    <div>
      <SEO
        title="Custom integration"
        description="Build your own UI on Awell Orchestration for full customization and flexibility."
        url={`/awell-orchestration/docs/activities/custom-integration`}
        canonicalUrl={`/awell-orchestration/docs/activities/custom-integration`}
      />
      <DocsHeader
        heading={'Use cases'}
        title={'Custom integration'}
        description={
          'Build your own UI on Awell Orchestration for full customization and flexibility.'
        }
      />
      {/* Intro section */}
      <div className="max-w-4xl">
        <div id="content-wrapper">
          <p>
            If you want full flexibility on how things look and feel, building a
            custom integration would be your best bet.{' '}
            <strong>To get you started, we prepared a couple of stories</strong>{' '}
            that could help you get started with building things on top of our
            API.
          </p>
          <h2>Browse stories</h2>
        </div>
        <StoryBrowser />
      </div>
      {/* FAQ */}
      <div className="mt-12">{/* <QuickNav prev={prev} next={next} /> */}</div>
    </div>
  )
}

CustomIntegrationPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
