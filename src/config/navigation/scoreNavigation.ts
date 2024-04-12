import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const scoreNavigation: MainNavType = [
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_SCORE].docs,
    activeSlugCheck: 'docs',
  },
]
