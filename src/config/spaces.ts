import { Space } from '@/types/space.types'

export const spaces: { label: string; path: string; active?: boolean }[] = [
  {
    label: 'Awell Orchestration',
    path: `/${Space.AWELL_ORCHESTRATION}`,
  },
  {
    label: 'Awell Extensions',
    path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/what-are-awell-extensions`,
  },
  {
    label: 'Awell Score',
    path: `/${Space.AWELL_SCORE}`,
  },
]
