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

import { useHeading, useQuickNavigation } from '../../../../../../src/hooks'
import {
  getAllRetoolPages,
  getRetoolPage,
} from '../../../../../../src/utils/content/awell-orchestration'

type PageProps = {
  frontMatter: {
    title: string
    description: string
    postmanUrl: string
    showPostmanButton: boolean
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function DocsPage({
  frontMatter,
  mdxSource,
  slug,
  content,
}: PageProps) {
  const { heading } = useHeading()
  const { next, prev } = useQuickNavigation(slug)
  const { setTableOfContents } = useContext(AppContext)

  useEffect(() => {
    setTableOfContents(content)
  }, [slug])

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/awell-orchestration/docs/activities/custom-integration/retool/${slug}`}
        canonicalUrl={`/awell-orchestration/docs/activities/custom-integration/retool/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          githubUrl={`/content/awell-orchestration/docs/activities/custom-integration/${slug}.mdx`}
          postman={{
            showPostmanButton: frontMatter.showPostmanButton,
            postmanButtonUrl: frontMatter.postmanUrl,
          }}
        />
      )}
      <div id="content-wrapper">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
      <div className="mt-12">
        <QuickNav prev={prev} next={next} />
      </div>
    </div>
  )
}

DocsPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getRetoolPage(slugString)

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
  const pages = getAllRetoolPages()

  const paths = pages.map((page) => ({
    params: {
      slug: page.slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
