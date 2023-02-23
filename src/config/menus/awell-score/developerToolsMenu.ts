import { Space } from '@/types/space.types'

import { type MenuItemType } from '../../../types/menu.types'

export const developerToolsMenu: MenuItemType[] = [
  {
    title: 'API',
    submenu: [
      {
        title: 'API Playground',
        path: `/${Space.AWELL_SCORE}/developer-tools/api-playground`,
      },
    ],
  },
]
