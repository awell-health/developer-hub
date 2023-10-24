import { ReactNode } from 'react'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { ScoreExplorer } from '@/components/ScoreExplorer'
import { SEO } from '@/components/SEO'
import { useHeading, useQuickNavigation } from '@/hooks/index'
import { Space } from '@/types/space.types'

export default function Playground() {
  const path = `${Space.AWELL_SCORE}/docs/getting-started/playground`
  const { next, prev } = useQuickNavigation(path)
  const { heading } = useHeading()

  return (
    <>
      <div className="">
        <SEO
          title="API Playground"
          url={`/${Space.AWELL_SCORE}/developer-tools/api-playground`}
          canonicalUrl={`/${Space.AWELL_SCORE}/developer-tools/api-playground`}
        />
        <DocsHeader
          heading={heading}
          title="API Playground"
          description="Send real HTTP requests to the Awell Score API without implementing any code."
        />
        <div id="content-wrapper">
          <ScoreExplorer />
        </div>
        <div className="mt-12">
          <QuickNav prev={prev} next={next} />
        </div>
      </div>
    </>
  )
}

Playground.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
