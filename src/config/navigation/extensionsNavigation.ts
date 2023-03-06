import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const extensionsNavigation: MainNavType = [
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_EXTENSIONS].docs,
    activeSlugCheck: 'docs',
  },
  // {
  //   title: 'API reference',
  //   slug: rootRoutes[Space.AWELL_EXTENSIONS].api,
  //   activeSlugCheck: 'api-reference',
  // },
  // {
  //   title: 'Developer tools',
  //   slug: rootRoutes[Space.AWELL_EXTENSIONS].developerTools,
  //   activeSlugCheck: 'developer-tools',
  // },
]
