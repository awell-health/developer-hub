import { GetStaticProps } from 'next/types'
import { type MDXRemoteSerializeResult, MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { ReactNode, useContext, useEffect } from 'react'

import { DocsLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { Space } from '@/types/space.types'

import { mdxComponents, mdxOptions } from '../../../src/config/mdx'
import { AppContext } from '../../../src/contexts/app/AppContext'
import { getNaviDoc } from '../../../src/utils/content/navi'

type Props = {
  frontMatter: { title: string; description: string }
  mdxSource: MDXRemoteSerializeResult
  content: string
}

export default function Home({ frontMatter, mdxSource, content }: Props) {
  const { setTableOfContents } = useContext(AppContext)

  useEffect(() => {
    setTableOfContents(content)
  }, [content, setTableOfContents])

  return (
    <div>
      <SEO
        title={frontMatter.title}
        description={frontMatter.description}
        url={`/${Space.NAVI}/docs`}
        canonicalUrl={`/${Space.NAVI}/docs`}
      />
      {/* @ts-expect-error type later */}
      <MDXRemote {...mdxSource} components={mdxComponents} />
    </div>
  )
}

Home.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout>{page}</DocsLayout>
}

export const getStaticProps: GetStaticProps = async () => {
  const { frontMatter, content } = await getNaviDoc('docs')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const mdxSource = await serialize(content, mdxOptions)

  return {
    props: {
      frontMatter,
      mdxSource,
      content,
    },
  }
}
