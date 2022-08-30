export type Story = {
  id: string
  title: string
  description: string
  docsUrl: string
  codeUrl: string
  path: string
  categories?: string[]
  operations?: { type: 'QUERY' | 'MUTATION'; operationName: string }[]
}

export type Stories = Array<Story>

export type StoryFilter = {
  id: string
  name: string
  options: {
    value: string
    label: string
    badge?: string
  }[]
}

export type StoriesFilters = Array<StoryFilter>
