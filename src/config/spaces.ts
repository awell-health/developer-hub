import { Space } from '@/types/space.types'

import { rootRoutes } from '../config/routes'

export const spaces: { label: string; path: string; active?: boolean }[] = [
  {
    label: 'Awell Orchestration',
    path: rootRoutes[Space.AWELL_ORCHESTRATION].home,
  },
  {
    label: 'Awell Extensions',
    path: rootRoutes[Space.AWELL_EXTENSIONS].home,
  },
  {
    label: 'Awell Score',
    path: rootRoutes[Space.AWELL_SCORE].home,
  },
]
