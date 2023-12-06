import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const studioNavigation: MainNavType = [
  // {
  //   title: 'Home',
  //   slug: rootRoutes[Space.AWELL_STUDIO].home,
  //   activeSlugCheck: Space.AWELL_STUDIO,
  // },
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_STUDIO].docs,
    activeSlugCheck: 'docs',
  },
]
