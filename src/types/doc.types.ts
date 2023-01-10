export type DocType = {
  frontMatter: {
    [key: string]: unknown
  }
  slug: string
  content: string
}
