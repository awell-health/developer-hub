import { Space } from '@/types/space.types'

type Routes = {
  home: string
  docs: string
  api: string
  developerTools: string
}

export const rootRoutes: Record<Space, Routes> = {
  [Space.AWELL_ORCHESTRATION]: {
    home: `/${Space.AWELL_ORCHESTRATION}`,
    docs: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/what-is-awell-orchestration`,
    api: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/endpoints`,
    developerTools: `/${Space.AWELL_ORCHESTRATION}/developer-tools/changelog`,
  },
  [Space.AWELL_PLUGINS]: {
    home: `/${Space.AWELL_PLUGINS}`,
    docs: `/${Space.AWELL_PLUGINS}/docs/getting-started/what-are-awell-plugins`,
    api: `#api-route`,
    developerTools: `#developer-tools-route`,
  },
  [Space.AWELL_SCORE]: {
    home: `/${Space.AWELL_SCORE}`,
    docs: `/${Space.AWELL_SCORE}/docs/getting-started/what-is-awell-score`,
    api: ``,
    developerTools: `/${Space.AWELL_SCORE}/developer-tools/api-playground`,
  },
}
