import { ReactNode } from 'react'

import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { QuickNav } from '../../../../src/components/QuickNavigation'
import { ScoreExplorer } from '../../../../src/components/ScoreExplorer'
import { SEO } from '../../../../src/components/SEO'
import { useQuickNavigation } from '../../../../src/hooks/useQuickNavigation'

export default function Playground() {
  const { next, prev } = useQuickNavigation(
    'awell-score/docs/getting-started/playground'
  )

  return (
    <>
      <div className="">
        <SEO
          title="Playground"
          url={`/awell-score/docs/getting-started/playground`}
          canonicalUrl={`/awell-score/docs/getting-started/playground`}
        />
        <DocsHeader
          heading="Awell Score"
          title="Playground"
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
