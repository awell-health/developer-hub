import { ReactNode } from 'react'

import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { QuickNav } from '../../../../src/components/QuickNavigation'
import { ScoreExplorer } from '../../../../src/components/ScoreExplorer'
import { SEO } from '../../../../src/components/SEO'
import { useHeading, useQuickNavigation } from '../../../../src/hooks'

export default function Playground() {
  const path = 'awell-score/docs/getting-started/playground'
  const { next, prev } = useQuickNavigation(path)
  const { heading } = useHeading()

  return (
    <>
      <div className="">
        <SEO
          title="API Playground"
          url={`/awell-score/docs/getting-started/playground`}
          canonicalUrl={`/awell-score/docs/getting-started/playground`}
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
