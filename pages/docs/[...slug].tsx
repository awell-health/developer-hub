import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsHeader } from '../../src/components/Docs/atoms'
import { DocsLayout } from '../../src/components/Layouts'
import { TOC } from '../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../src/config/mdx'
import { docsMenu } from '../../src/config/menus'
import { TableOfContentsType } from '../../src/types/toc.types'
import {
  getAllDocs,
  getDoc,
  getHeadingForDoc,
  getTableOfContents,
} from '../../src/utils'

type DocsPageProps = {
  frontMatter: {
    title: string
    description: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  toc: TableOfContentsType
}

export default function DocsPage({
  frontMatter,
  mdxSource,
  slug,
  toc,
}: DocsPageProps) {
  const heading = getHeadingForDoc(slug)

  return (
    <div>
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          githubUrl={`/content/docs/${slug}.mdx`}
        />
      )}
      <div id="content-wrapper">
        <MDXRemote {...mdxSource} components={mdxComponents} />
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

DocsPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout menu={docsMenu}>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getDoc(slugString)

  const toc = getTableOfContents(content)
  // https://github.com/hashicorp/next-mdx-remote/issues/86
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      slug: slugString,
      toc,
    },
  }
}

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getAllDocs()

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
