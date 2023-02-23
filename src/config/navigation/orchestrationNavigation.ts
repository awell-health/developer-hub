import { MainNavType } from '@/types/nav.types'

export const orchestrationNavigation: MainNavType = [
  { title: 'Home', slug: '/awell-orchestration', activeSlugCheck: 'home' },
  {
    title: 'Docs',
    slug: '/awell-orchestration/docs/getting-started/what-is-awell-orchestration',
    activeSlugCheck: 'docs',
  },
  {
    title: 'API reference',
    slug: '/awell-orchestration/api-reference/overview/endpoints',
    activeSlugCheck: 'api-reference',
  },
  {
    title: 'Developer tools',
    slug: '/awell-orchestration/developer-tools/schema',
    activeSlugCheck: 'schema',
  },
]
