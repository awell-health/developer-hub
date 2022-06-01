import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { DocType } from '../types/doc.types'

const DISCOVERY_PATH = join(process.cwd(), 'content/discovery')

export const getDiscoveryPage = (slug: string): DocType => {
  const fullPath = join(DISCOVERY_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

export const getAllDiscoveryPages = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: DISCOVERY_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const docs = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(DISCOVERY_PATH, filePath), 'utf-8')

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return docs
}
