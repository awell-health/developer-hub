import { ReactNode } from 'react'

import { DocsLayoutWithoutToc } from '../src/components/Layouts'
import { docsMenu } from '../src/config/menus'

export default function Resources() {
  return (
    <>
      <header className="mb-20 max-w-xl">
        <p className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
          Resources
        </p>
        <h1 className="mb-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200">
          Everything you need to help you integrate with the Awell platform
        </h1>
      </header>
      <div id="content-wrapper">
        <p>Hey, we are currently working on this page!</p>
      </div>
    </>
  )
}

Resources.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc menu={docsMenu}>{page}</DocsLayoutWithoutToc>
}
