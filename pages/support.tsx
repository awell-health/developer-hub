import { ReactNode } from 'react'

import { DocsHeader } from '../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../src/components/Layouts'
import { SEO } from '../src/components/SEO'

export default function Community() {
  return (
    <>
      <SEO title="Support" url={`/support`} canonicalUrl={`/support`} />
      <DocsHeader heading="Support" title="We are here to help you!" />
      <div id="content-wrapper">
        <p>Hey, we are currently working on this page!</p>
      </div>
    </>
  )
}

Community.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
