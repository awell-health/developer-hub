import { GetStaticPaths, GetStaticProps } from 'next/types'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode, useContext, useEffect } from 'react'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayout } from '@/components/Layouts'
import { QuickNav } from '@/components/QuickNavigation'
import { SEO } from '@/components/SEO'
import { mdxComponents, mdxOptions } from '@/config/mdx'
import { AppContext } from '@/contexts/app/AppContext'
import { Space } from '@/types/space.types'
import {
  getAllDeveloperToolsPages,
  getDeveloperToolsPage,
} from '@/utils/content/awell-orchestration'

import { useBadge, useHeading, useQuickNavigation } from '../../../src/hooks'

type ApiPageProps = {
  frontMatter: {
    title: string
    description?: string
    showPlaygroundButton: boolean
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function Page({
  frontMatter,
  mdxSource,
  slug,
  content,
}: ApiPageProps) {
  const { heading } = useHeading()
  const { badge } = useBadge(slug)
  const { setTableOfContents } = useContext(AppContext)
  const { next, prev } = useQuickNavigation(slug)

  useEffect(() => {
    setTableOfContents(content)
  }, [slug])

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/${Space.AWELL_ORCHESTRATION}/developer-tools/${slug}`}
        canonicalUrl={`/${Space.AWELL_ORCHESTRATION}/developer-tools/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          badge={badge}
          githubUrl={`/content/${Space.AWELL_ORCHESTRATION}/developer-tools/${slug}.mdx`}
          playgroundButton={frontMatter.showPlaygroundButton || false}
        />
      )}
      <div id="content-wrapper">
        {/* @ts-expect-error type later */}
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
      <div className="mt-12">
        <QuickNav prev={prev} next={next} />
      </div>
    </div>
  )
}

Page.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getDeveloperToolsPage(slugString)

  // https://github.com/hashicorp/next-mdx-remote/issues/86
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      content,
      slug: slugString,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getAllDeveloperToolsPages()

  const paths = docs.map((doc) => ({
    params: {
      slug: doc.slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
