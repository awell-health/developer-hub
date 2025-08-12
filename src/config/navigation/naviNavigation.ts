import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const naviNavigation: MainNavType = [
  {
    title: 'Home',
    slug: rootRoutes[Space.NAVI].home,
    activeSlugCheck: 'home',
  },
  {
    title: 'Docs',
    slug: rootRoutes[Space.NAVI].docs,
    activeSlugCheck: 'docs',
  },
  {
    title: 'Tutorials',
    slug: `/${Space.NAVI}/tutorials/quickstart`,
    activeSlugCheck: 'tutorials',
  },
  {
    title: 'Reference',
    slug: `/${Space.NAVI}/reference/navi-dot-js`,
    activeSlugCheck: 'reference',
  },
]
