import format from 'date-fns/format'
import { GetStaticProps } from 'next'
import { ReactNode } from 'react'

import { DocsHeader } from '../../../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../../../src/components/Layouts'
import { SEO } from '../../../../src/components/SEO'
import { getAllReleaseChangelogs } from '../../../../src/utils'

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
  return (
    <>
      <SEO
        title="Changelog"
        description="An overview of all releases and their changelog"
        url={`/api-reference/overview/changelog`}
        canonicalUrl={`/api-reference/overview/changelog`}
      />
      <div className="max-w-3xl mx-auto xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
        <DocsHeader
          heading="Changelog"
          title="Releases"
          description="An overview of our releases and their changelog"
          githubUrl="/pages/api-reference/overview/changelog/index.tsx"
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
      <div className="grid gap-6 mx-auto grid-cols-3">
        {releases.map((release) => (
          <div
            key={release.slug}
            className="p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                v{release.frontMatter.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Released on{' '}
              {format(new Date(release.frontMatter.releaseDate), 'MMMM d, y')}
            </p>
            <a
              href={`/api-reference/overview/changelog/${release.slug}`}
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
            </a>
          </div>
        ))}
      </div>
    </>
  )
}

ChangelogPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}

export const getStaticProps: GetStaticProps = async () => {
  const releases = getAllReleaseChangelogs()
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
