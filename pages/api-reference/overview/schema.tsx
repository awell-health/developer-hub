import { ReactNode } from 'react'

import { DocsHeader } from '../../../src/components/Docs/atoms'
import { GraphQLExplorer } from '../../../src/components/GraphQLExplorer'
import { DocsLayoutWithoutToc } from '../../../src/components/Layouts'
import { SEO } from '../../../src/components/SEO'
import { getHeadingForDoc } from '../../../src/utils'

export default function Schema() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const heading = getHeadingForDoc('schema')

  return (
    <>
      <SEO
        title="Schema"
        url={`/api-reference/schema`}
        canonicalUrl={`/api-reference/schema`}
      />
      <div className="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <DocsHeader heading={heading} title="Explore our GraphQL schema" />
        <GraphQLExplorer />
      </div>
    </>
  )
}

Schema.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
