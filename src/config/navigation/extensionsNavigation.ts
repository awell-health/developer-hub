import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const extensionsNavigation: MainNavType = [
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_EXTENSIONS].docs,
    activeSlugCheck: 'docs',
  },
  {
    title: 'Marketplace',
    slug: `/${Space.AWELL_EXTENSIONS}/marketplace`,
    activeSlugCheck: 'marketplace',
  },
]
