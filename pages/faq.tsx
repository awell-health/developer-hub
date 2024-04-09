import { GetStaticProps } from 'next/types'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ReactNode, useContext, useEffect } from 'react'
import { getPageContent } from 'src/utils/content'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { mdxComponents, mdxOptions } from '@/config/mdx'
import { AppContext } from '@/contexts/app/AppContext'

type FaqPageProps = {
  frontMatter: {
    title: string
    description: string
    releaseDate: string
  }
  mdxSource: MDXRemoteSerializeResult
  slug: string
  content: string
}

export default function FaqPage({
  frontMatter,
  mdxSource,
  slug,
  content,
}: FaqPageProps) {
  const { setTableOfContents } = useContext(AppContext)

  useEffect(() => {
    setTableOfContents(content)
  }, [slug])

  return (
    <div>
      <SEO
        title={`${frontMatter.title}`}
        description={frontMatter.description}
        url={slug}
        canonicalUrl={slug}
      />
      <DocsHeader
        heading={'Things we know you want to know'}
        title={frontMatter.title}
        description={frontMatter.description}
        githubUrl={`/content${slug}.mdx`}
      />
      <div id="content-wrapper">
        {/* @ts-expect-error type later */}
        <MDXRemote {...mdxSource} components={mdxComponents} />
      </div>
    </div>
  )
}

FaqPage.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout withSidebar={false}>{page}</DocsLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  const slug = '/faq'
  const { frontMatter, content } = await getPageContent(slug)

  // https://github.com/hashicorp/next-mdx-remote/issues/86
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      content,
      slug,
    },
  }
}
