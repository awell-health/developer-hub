import format from 'date-fns/format'
import { GetStaticProps } from 'next/types'
import { ReactNode } from 'react'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { SEO } from '@/components/SEO'
import { useQuickNavigation } from '@/hooks/useQuickNavigation'
import { Space } from '@/types/space.types'
import { getAllOrchestrationReleasesChangelogs } from '@/utils/content/awell-orchestration'

type ChangelogPageProps = {
  releases: {
    frontMatter: {
      title: string
      description: string
      releaseDate: string
    }
    slug: string
  }[]
}

export default function ChangelogPage({ releases }: ChangelogPageProps) {
  const { next, prev } = useQuickNavigation(
    'awell-orchestration/api-reference/overview/changelog'
  )

  const isReleaseInTheFuture = (releaseDate: Date) => {
    const now = new Date()

    if (releaseDate >= now) {
      return true
    }

    return false
  }

  return (
    <>
      <SEO
        title="Changelog"
        description="An overview of all releases and their changelog"
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/changelog`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/changelog`}
      />
      <div className="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <DocsHeader
          heading="API"
          title="Releases"
          description="An overview of our releases and their changelog"
        />
        <div id="content-wrapper">
          <p>
            Please note that this page does not list all releases and all
            changes in a release but rather only those releases and changes that
            have an impact on the consumers of our API.
          </p>
          <p>
            We started publishing a public changelog since May 2022. Send us as
            message via Intercom if you need more information on earlier
            versions. We are always happy to provide you more information.
          </p>
        </div>
      </div>
      <div className="grid gap-3 sm:gap-6 mx-auto grid-cols-2 sm:grid-cols-3">
        {releases.map((release) => (
          <a href={`changelog/${release.slug}`} key={release.slug}>
            <div className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                v{release.frontMatter.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {isReleaseInTheFuture(new Date(release.frontMatter.releaseDate))
                  ? 'Will be released on '
                  : 'Released on '}
                {format(new Date(release.frontMatter.releaseDate), 'MMMM d, y')}
              </p>
              <div className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="mt-12 max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <QuickNav prev={prev} next={next} />
      </div>
    </>
  )
}

ChangelogPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}

export const getStaticProps: GetStaticProps = async () => {
  const releases = getAllOrchestrationReleasesChangelogs()
  const sortedReleases = releases.sort((a, b) => {
    return a.frontMatter.releaseDate < b.frontMatter.releaseDate
      ? 1
      : a.frontMatter.releaseDate > b.frontMatter.releaseDate
      ? -1
      : 0
  })

  return {
    props: {
      releases: sortedReleases,
    },
  }
}
