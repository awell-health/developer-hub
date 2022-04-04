import { ReactNode } from 'react'

import { DocsHeader } from '../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../src/components/Layouts'
import { SEO } from '../src/components/SEO'
import { docsMenu } from '../src/config/menus'

export default function Resources() {
  return (
    <>
      <SEO title="Resources" />
      <div className="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <DocsHeader
          heading="Resources"
          title="Everything you need to help you integrate with the Awell platform"
        />
        <div id="content-wrapper">
          <p>Hey, we are currently working on this page!</p>
        </div>
      </div>
    </>
  )
}

Resources.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc menu={docsMenu}>{page}</DocsLayoutWithoutToc>
}
