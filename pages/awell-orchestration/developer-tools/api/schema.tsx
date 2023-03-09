import { ReactNode } from 'react'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

import { useHeading, useQuickNavigation } from '../../../../src/hooks'

export default function Schema() {
  const { heading } = useHeading()
  const { next, prev } = useQuickNavigation('schema')

  return (
    <div>
      <SEO
        title="Schema"
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/schema`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/api/schema`}
      />
      <DocsHeader
        heading={heading}
        title="Schema"
        description="Browse our GraphQL API schema."
        playgroundButton={true}
      />
      <div id="content-wrapper">
        <p>
          You can browse the full API schema via our API playground (click on
          the &quot;Docs&quot; button in the top right corner).
        </p>
        <figure className="w-full flex flex-col justify-center text-center pt-4">
          <a
            href={`/${Space.AWELL_ORCHESTRATION}/api/playground`}
            target="_blank"
            className="custom-link"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://res.cloudinary.com/da7x4rzl4/image/upload/v1675688281/Developer%20portal/graphiql.png"
              alt="Awell's GraphQL Playground"
              className="w-full sm:w-11/12 mx-auto rounded"
            />
          </a>
          <figcaption className="dark:text-slate-400 pt-2">
            Awell&apos;s GraphQL Playground - Schema browser
          </figcaption>
        </figure>
      </div>
      <div className="mt-12">
        <QuickNav prev={prev} next={next} />
      </div>
    </div>
  )
}

Schema.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
