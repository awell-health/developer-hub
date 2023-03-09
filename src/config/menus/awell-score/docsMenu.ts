import { Space } from '@/types/space.types'

import { type BadgeType, type MenuType } from '../../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  get: { label: 'GET', color: 'sky' },
  post: { label: 'POST', color: 'green' },
}

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started`,
    submenu: [
      {
        title: 'What is Awell Score?',
        path: `/${Space.AWELL_SCORE}/docs/getting-started/what-is-${Space.AWELL_SCORE}`,
      },
      {
        title: 'Endpoints',
        path: `/${Space.AWELL_SCORE}/docs/getting-started/endpoints`,
      },
      {
        title: 'Authorization',
        path: `/${Space.AWELL_SCORE}/docs/getting-started/authorization`,
      },
      {
        title: 'API Playground',
        path: `/${Space.AWELL_SCORE}/docs/getting-started/playground`,
      },
      {
        title: 'Score Explorer',
        path: `/${Space.AWELL_SCORE}/docs/getting-started/score-explorer`,
      },
    ],
  },
  {
    title: 'API reference',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/api-reference`,
    submenu: [
      {
        title: 'List calculations',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/list-calculations`,
        badge: badges.get,
      },
      {
        title: 'Get calculation',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/get-calculation`,
        badge: badges.get,
      },
      {
        title: 'Search calculations',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/search-calculations`,
        badge: badges.get,
      },
      {
        title: 'Simulate calculation',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/simulate-calculation`,
        badge: badges.get,
      },
      {
        title: 'Get calculation result',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/get-calculation-result`,
        badge: badges.get,
      },
      {
        title: 'Perform calculation',
        path: `/${Space.AWELL_SCORE}/docs/api-reference/perform-calculation`,
        badge: badges.post,
      },
    ],
  },
]
