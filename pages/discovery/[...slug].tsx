import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsHeader } from '../../src/components/Docs/atoms'
import { DocsLayout } from '../../src/components/Layouts'
import { SEO } from '../../src/components/SEO'
import { TOC } from '../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../src/config/mdx'
import { useTableOfContents } from '../../src/hooks/'
import { getAllDiscoveryPages, getDiscoveryPage } from '../../src/utils'

type DocsPageProps = {
  frontMatter: {
    title: string
    description: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function DiscoveryPage({
  frontMatter,
  mdxSource,
  slug,
  content,
}: DocsPageProps) {
  const { toc } = useTableOfContents(content)

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/docs/${slug}`}
        canonicalUrl={`/discovery/${slug}`}
        preventCrawling={true}
      />
      <DocsHeader
        heading="Discovery"
        title={frontMatter.title}
        description={frontMatter.description}
        githubUrl={`/content/discovery/${slug}.mdx`}
      />
      <div>
        <div id="content-wrapper">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>
      </div>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          On this page
        </h5>
        <TOC toc={toc} />
      </div>
    </div>
  )
}

DiscoveryPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getDiscoveryPage(slugString)

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
  const discoveryPages = getAllDiscoveryPages()

  const paths = discoveryPages.map((discoveryPage) => ({
    params: {
      slug: discoveryPage.slug.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}
