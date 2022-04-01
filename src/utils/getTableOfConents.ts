import slugify from 'slugify'

import { TableOfContentsType } from '../types/toc.types'

export const getTableOfContents = (content: string): TableOfContentsType => {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm')
  const headings = [...content.matchAll(regexp)]

  let tableOfContents: TableOfContentsType = []

  if (headings.length) {
    tableOfContents = headings.map((heading) => {
      const headingText = heading[2].trim()
      const headingLevel = heading[1].trim() === '##' ? 'h2' : 'h3'
      const headingLink = slugify(headingText, { lower: true, strict: true })

      return {
        title: headingText,
        link: `#${headingLink}`,
        level: headingLevel,
      }
    })
  }

  return tableOfContents
}
