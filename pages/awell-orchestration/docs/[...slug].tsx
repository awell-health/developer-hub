import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsHeader } from '../../../src/components/Docs/atoms'
import { DocsLayout } from '../../../src/components/Layouts'
import { QuickNav } from '../../../src/components/QuickNavigation'
import { SEO } from '../../../src/components/SEO'
import { TOC } from '../../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../../src/config/mdx'
import {
  useHeading,
  useQuickNavigation,
  useTableOfContents,
} from '../../../src/hooks/'
import {
  getAllOrchestrationDocs,
  getOrchestrationDoc,
} from '../../../src/utils/content/awell-orchestration'

type DocsPageProps = {
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
}: DocsPageProps) {
  const { heading } = useHeading()
  const { next, prev } = useQuickNavigation(slug)
  const { toc } = useTableOfContents(content)

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/awell-orchestration/docs/${slug}`}
        canonicalUrl={`/awell-orchestration/docs/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          githubUrl={`/content/awell-orchestration/docs/${slug}.mdx`}
          postman={{
            showPostmanButton: frontMatter.showPostmanButton,
            postmanButtonUrl: frontMatter.postmanUrl,
          }}
        />
      )}
      <div>
        <div id="content-wrapper">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>
        <div className="mt-12">
          <QuickNav prev={prev} next={next} />
        </div>
      </div>
      <div className="fixed z-20 top-[6.5rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          On this page
        </h5>
        <TOC toc={toc} />
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
  const { frontMatter, content } = await getOrchestrationDoc(slugString)

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
  const docs = getAllOrchestrationDocs()

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
