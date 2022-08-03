import fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

import { DocType } from '@/types/doc.types'

const API_REFERENCE_PATH = join(process.cwd(), 'content')

export const getPageContent = (slug: string): DocType => {
  const fullPath = join(API_REFERENCE_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}
