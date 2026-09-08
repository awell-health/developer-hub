import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { DocType } from '@/types/doc.types'

const API_REFERENCE_PATH = join(process.cwd(), 'content')

export const getPageContent = (slug: string): DocType => {
  // `slug` is a string literal at both call sites (pages/faq.tsx '/faq', pages/system-status.tsx
  // '/system-status'), evaluated in getStaticProps at build time. No route parameter reaches it.
  // See docs/standards/sast-finding-remediation.md.
  // nosemgrep: AIK_ts_generic_path_traversal
  const fullPath = join(API_REFERENCE_PATH, `${slug}.mdx`)
  // nosemgrep: AIK_ts_generic_path_traversal
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}
