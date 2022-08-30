import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { DocType } from '../../../types/doc.types'

const API_REFERENCE_PATH = join(
  process.cwd(),
  'content/awell-orchestration/developer-tools'
)

export const getDeveloperToolsPage = (slug: string): DocType => {
  const fullPath = join(API_REFERENCE_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

export const getAllDeveloperToolsPages = () => {
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
