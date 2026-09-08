import matter from 'gray-matter'
import { join } from 'path'

import { DocType } from '@/types/doc.types'

import { readMdx } from './readMdx'

const API_REFERENCE_PATH = join(process.cwd(), 'content')

export const getPageContent = (slug: string): DocType => {
  // `slug` is a string literal at both call sites (pages/faq.tsx, pages/system-status.tsx).
  const fileContents = readMdx(API_REFERENCE_PATH, slug)
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}
