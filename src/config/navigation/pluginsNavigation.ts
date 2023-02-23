import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const pluginsNavigation: MainNavType = [
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_PLUGINS].docs,
    activeSlugCheck: 'docs',
  },
  {
    title: 'API reference',
    slug: rootRoutes[Space.AWELL_PLUGINS].api,
    activeSlugCheck: 'api-reference',
  },
  {
    title: 'Developer tools',
    slug: rootRoutes[Space.AWELL_PLUGINS].developerTools,
    activeSlugCheck: 'developer-tools',
  },
]
