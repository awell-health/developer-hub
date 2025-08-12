import { GetStaticPaths, GetStaticProps } from 'next/types'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ParsedUrlQuery } from 'querystring'
import { ReactNode, useContext, useEffect } from 'react'

import { DocsHeader } from '@/components/Docs/atoms/DocsHeader'
import { DocsLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { useHeading } from '@/hooks/useHeading'
import { Space } from '@/types/space.types'

import { mdxComponents, mdxOptions } from '../../../src/config/mdx'
import { AppContext } from '../../../src/contexts/app/AppContext'
import { getAllNaviDocs, getNaviDoc } from '../../../src/utils/content/navi'

type PageProps = {
  frontMatter: { title: string; description: string }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function Home({
  frontMatter,
  mdxSource,
  slug,
  content,
}: PageProps) {
  const { setTableOfContents } = useContext(AppContext)
  const { heading } = useHeading()
  useEffect(() => {
    setTableOfContents(content)
  }, [content, setTableOfContents])

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/${Space.NAVI}/tutorials/${slug}`}
        canonicalUrl={`/${Space.NAVI}/tutorials/${slug}`}
      />
      {heading && (
        <DocsHeader
          heading={heading}
          title={frontMatter.title}
          description={frontMatter.description}
          githubUrl={`/content/${Space.NAVI}/tutorials/${slug}.mdx`}
        />
      )}
      <div id="content-wrapper">
        {/* @ts-expect-error type later */}
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

interface Iparams extends ParsedUrlQuery {
  slug: string[]
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as Iparams
  const slugString = slug.join('/')
  const { frontMatter, content } = await getNaviDoc(`tutorials/${slugString}`)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)
  return { props: { frontMatter, mdxSource, content, slug: slugString } }
}

export const getStaticPaths: GetStaticPaths = () => {
  const docs = getAllNaviDocs().filter((d) => d.slug.startsWith('tutorials/'))
  const paths = docs.map((doc) => ({
    params: { slug: doc.slug.replace('tutorials/', '').split('/') },
  }))
  return { paths, fallback: false }
}
