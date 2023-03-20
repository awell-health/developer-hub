export type Extension = {
  key: string
  title: string
  description: string
  icon_url: string
  category: string
  author: {
    authorType: string
  }
  settings: Record<string, unknown>
  actions: Record<string, { title: string; description: string }>
  webhooks: Array<unknown>
  htmlDocs: string
}
