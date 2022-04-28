import fs from 'fs'
import glob from 'glob'
import matter from 'gray-matter'
import { capitalize } from 'lodash'
import { join } from 'path'

// import { badges } from '../config/menus'
import { DocType } from '../types/doc.types'
import { MenuItemType, SubmenuItemType } from '../types/menu.types'

const API_REFERENCE_PATH = join(process.cwd(), 'content/api-reference')

export const getApiDoc = (slug: string): DocType => {
  const fullPath = join(API_REFERENCE_PATH, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
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

const convertMdxFilenameToTitle = (filename: string) => capitalize(filename.substring(0, filename.length - 4).split('-').join(' '))

const generateSubmenuItems = (category: string, filePaths: string[]): SubmenuItemType[] => {
  return filePaths
  .filter((path) => new RegExp(category).test(path))
  .map((filePath) => {
    const [type, category, fileName] = filePath.split('/')
    return {
      title: convertMdxFilenameToTitle(fileName),
      path: `/api-reference/${type}/${category}/${fileName}`,
      // badges: badges[category]
    }
  })
}

export const generateApiMenu = (): MenuItemType[] => {
  let filePaths: string[] = []

  filePaths = glob
    .sync(`**/*`, { cwd: API_REFERENCE_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const queryMenuItems = generateSubmenuItems('queries', filePaths)
  const mutationMenuItems = generateSubmenuItems('mutations', filePaths)

  return [
    {
    title: 'Queries',
    submenu: queryMenuItems,
    },
    {
    title: 'Mutations',
    submenu: mutationMenuItems,
    },
  ]

}

