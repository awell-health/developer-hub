import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsHeader } from '../../../src/components/Docs/atoms'
import { GraphQLExplorer } from '../../../src/components/GraphQLExplorer'
import { DocsLayout } from '../../../src/components/Layouts'
import { QuickNav } from '../../../src/components/QuickNavigation'
import { SEO } from '../../../src/components/SEO'
import { TOC } from '../../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../../src/config/mdx'
import {
  useBadge,
  useHeading,
  useQuickNavigation,
  useTableOfContents,
} from '../../../src/hooks'
import {
  getAllOrchestrationApiDocs,
  getOrchestrationApiDoc,
} from '../../../src/utils/content/awell-orchestration'

type ApiPageProps = {
  frontMatter: {
    title: string
    description?: string
    postmanUrl?: string
    showPostmanButton?: boolean
    showPlaygroundButton?: boolean
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function ApiPage({
  frontMatter,
  mdxSource,
  slug,
  content,
}: ApiPageProps) {
  const { heading } = useHeading()
  const { badge } = useBadge(slug)
  const { toc } = useTableOfContents(content)
  const { next, prev } = useQuickNavigation(slug)

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/awell-orchestration/api-reference/${slug}`}
        canonicalUrl={`/awell-orchestration/api-reference/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          badge={badge}
          githubUrl={`/content/awell-orchestration/api-reference/${slug}.mdx`}
          postman={{
            showPostmanButton: frontMatter.showPostmanButton !== false,
          }}
          playgroundButton={true && frontMatter.showPlaygroundButton !== false}
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
        <TOC toc={toc}></TOC>
        <h5 className="mt-10 text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          Explorer
        </h5>
        <div className="explorer-sidepane">
          <GraphQLExplorer />
        </div>
      </div>
    </div>
  )
}

ApiPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getOrchestrationApiDoc(slugString)

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
  const docs = getAllOrchestrationApiDocs()

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
