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
  actions: Record<string, unknown>
  webhooks: Array<unknown>
}
