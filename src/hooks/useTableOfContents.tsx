import slugify from 'slugify'

import { TableOfContentsType } from '../types/toc.types'

export const useTableOfContents = (
  content: string
): { toc: TableOfContentsType } => {
  const regexp = new RegExp(/^(### |## )(.*)\n/, 'gm')
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
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

  return { toc: tableOfContents }
}
