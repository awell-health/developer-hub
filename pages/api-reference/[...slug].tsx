import { GetStaticPaths, GetStaticProps } from 'next'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode } from 'react'

import { DocsLayout } from '../../src/components/Layouts'
import { TOC } from '../../src/components/TOC'
import { mdxComponents, mdxOptions } from '../../src/config/mdx'
import { apiMenu } from '../../src/config/menus'
import { TableOfContentsType } from '../../src/types/toc.types'
import {
  getAllApiDocs,
  getApiDoc,
  getHeadingForDoc,
  getTableOfContents,
} from '../../src/utils'

type ApiPageProps = {
  frontMatter: {
    title: string
    description: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  toc: TableOfContentsType
}

export default function ApiPage({
  frontMatter,
  mdxSource,
  slug,
  toc,
}: ApiPageProps) {
  const heading = getHeadingForDoc(slug)

  return (
    <div>
      <header id="header" className="relative z-20 mb-10">
        <div>
          {heading && (
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400">
              {heading}
            </p>
          )}
          <div className="flex items-center">
            <h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
              {frontMatter.title}
            </h1>
          </div>
        </div>
        {frontMatter.description && (
          <p className="mt-2 text-lg text-slate-700 dark:text-slate-400">
            {frontMatter.description}
          </p>
        )}
      </header>
      <div id="content-wrapper">
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
      <div className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          On this page
        </h5>
        <TOC toc={toc}></TOC>
      </div>
    </div>
  )
}

ApiPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout menu={apiMenu}>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getApiDoc(slugString)

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
  const docs = getAllApiDocs()

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
