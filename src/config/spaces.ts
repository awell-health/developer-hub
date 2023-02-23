import { Space } from '@/types/space.types'

export const spaces: { label: string; path: string; active?: boolean }[] = [
  {
    label: 'Awell Orchestration',
    path: `/${Space.AWELL_ORCHESTRATION}`,
  },
  {
    label: 'Awell Plugins',
    path: `/${Space.AWELL_PLUGINS}/docs/getting-started/what-are-awell-plugins`,
    active: false,
  },
  {
    label: 'Awell Score',
    path: `/${Space.AWELL_SCORE}`,
  },
]
