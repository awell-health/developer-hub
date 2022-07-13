import { ReactNode } from 'react'

import { DocsHeader } from '../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../src/components/Layouts'
import { SEO } from '../../src/components/SEO'
import { UseCasesComparisonTable } from '../../src/components/UseCasesComparisonTable'

export default function UseCases() {
  return (
    <>
      <SEO
        title="Use Cases"
        url={`/awell-orchestration/use-cases`}
        canonicalUrl={`/awell-orchestration/use-cases`}
      />
      <div className="max-w-3xl mx-auto xl:max-w-4xl xl:ml-0">
        <DocsHeader heading="Integrations" title="Use cases" />
        <UseCasesComparisonTable />
        <div id="content-wrapper"></div>
      </div>
    </>
  )
}

UseCases.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
