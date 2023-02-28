import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const scoreNavigation: MainNavType = [
  {
    title: 'Home',
    slug: rootRoutes[Space.AWELL_SCORE].home,
    activeSlugCheck: Space.AWELL_SCORE,
  },
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_SCORE].docs,
    activeSlugCheck: 'docs',
  },
  {
    title: 'Developer tools',
    slug: rootRoutes[Space.AWELL_SCORE].developerTools,
    activeSlugCheck: 'developer-tools',
  },
]
