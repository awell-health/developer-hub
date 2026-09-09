import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { Space } from '@/types/space.types'

import { DocType } from '../../../types/doc.types'
import { readMdx } from '../readMdx'

const DOCS_PATH = join(process.cwd(), `content/${Space.AWELL_STUDIO}/docs`)

export const getDoc = (slug: string): DocType => {
  const fileContents = readMdx(DOCS_PATH, slug)
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

export const getAllDocs = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: DOCS_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const docs = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(DOCS_PATH, filePath), 'utf-8')

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return docs
}
