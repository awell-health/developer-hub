import { MainNavType } from '@/types/nav.types'
import { Space } from '@/types/space.types'

import { rootRoutes } from '../routes'

export const orchestrationNavigation: MainNavType = [
  {
    title: 'Home',
    slug: rootRoutes[Space.AWELL_ORCHESTRATION].home,
    activeSlugCheck: Space.AWELL_ORCHESTRATION,
  },
  {
    title: 'Docs',
    slug: rootRoutes[Space.AWELL_ORCHESTRATION].docs,
    activeSlugCheck: 'docs',
  },
  {
    title: 'API reference',
    slug: rootRoutes[Space.AWELL_ORCHESTRATION].api,
    activeSlugCheck: 'api-reference',
  },
  {
    title: 'Developer tools',
    slug: '/awell-orchestration/developer-tools/api/schema',
    activeSlugCheck: 'schema',
  },
]
