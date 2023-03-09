import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const developerToolsMenu: MenuType = [
  {
    title: 'API',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/api`,
    submenu: [
      {
        title: 'API Playground',
        path: `/${Space.AWELL_SCORE}/developer-tools/api-playground`,
      },
    ],
  },
]
