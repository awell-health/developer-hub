import { ReactNode } from 'react'

import { DocsHeader } from '../../../src/components/Docs/atoms'
import { GraphQLExplorer } from '../../../src/components/GraphQLExplorer'
import { DocsLayoutWithoutToc } from '../../../src/components/Layouts'
import { QuickNav } from '../../../src/components/QuickNavigation'
import { SEO } from '../../../src/components/SEO'
import { useHeading, useQuickNavigation } from '../../../src/hooks'

export default function Schema() {
  const { heading } = useHeading()
  const { next, prev } = useQuickNavigation('schema')

  return (
    <div>
      <SEO
        title="Schema"
        url={`/awell-orchestration/developer-tools/schema`}
        canonicalUrl={`/awell-orchestration/developer-tools/schema`}
      />
      <DocsHeader
        heading={heading}
        title="Schema"
        description="Explore our GraphQL schema with our explorer"
        playgroundButton={true}
      />
      <GraphQLExplorer />
      <div className="mt-12">
        <QuickNav prev={prev} next={next} />
      </div>
    </div>
  )
}

Schema.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
