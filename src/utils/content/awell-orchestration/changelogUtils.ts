import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { join } from 'path'

import { ChangelogType } from '../../../types/changelog.types'

const CHANGELOG_PATH = join(
  process.cwd(),
  'content/awell-orchestration/changelog'
)

export const getReleaseChangelog = (slug: string): ChangelogType => {
  const fullPath = join(CHANGELOG_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContents)

  return { frontMatter: data, slug, content }
}

export const getAllReleaseChangelogs = () => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: CHANGELOG_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const docs = filePaths.map((filePath) => {
    const mdWithData = fs.readFileSync(join(CHANGELOG_PATH, filePath), 'utf-8')

    const { data } = matter(mdWithData)

    return {
      frontMatter: data,
      slug: filePath.split('.')[0],
    }
  })

  return docs
}
