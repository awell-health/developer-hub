import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { Space } from '@/types/space.types'

import { DocType } from '../../../types/doc.types'
import { readMdx } from '../readMdx'

const API_REFERENCE_PATH = join(
  process.cwd(),
  `content/${Space.AWELL_EXTENSIONS}/api-reference`
)

export const getApiDoc = (slug: string): DocType => {
  const fileContents = readMdx(API_REFERENCE_PATH, slug)
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

export const getAllApiDocs = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: API_REFERENCE_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const apiDocs = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(
      join(API_REFERENCE_PATH, filePath),
      'utf-8'
    )

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return apiDocs
}
