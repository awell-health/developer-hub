import { type MenuItemType, BadgeType } from '../../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  get: { label: 'GET', color: 'sky' },
  post: { label: 'POST', color: 'green' },
}

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'What is Awell Score?',
        path: '/awell-score/docs/getting-started/what-is-awell-score',
      },
      {
        title: 'Endpoints',
        path: '/awell-score/docs/getting-started/endpoints',
      },
      {
        title: 'Authorization',
        path: '/awell-score/docs/getting-started/authorization',
      },
      {
        title: 'API Playground',
        path: '/awell-score/docs/getting-started/playground',
      },
      {
        title: 'Score Explorer',
        path: '/awell-score/docs/getting-started/score-explorer',
      },
    ],
  },
  {
    title: 'API reference',
    submenu: [
      {
        title: 'List calculations',
        path: '/awell-score/docs/api-reference/list-calculations',
        badge: badges.get,
      },
      {
        title: 'Get calculation',
        path: '/awell-score/docs/api-reference/get-calculation',
        badge: badges.get,
      },
      {
        title: 'Search calculations',
        path: '/awell-score/docs/api-reference/search-calculations',
        badge: badges.get,
      },
      {
        title: 'Simulate calculation',
        path: '/awell-score/docs/api-reference/simulate-calculation',
        badge: badges.get,
      },
      {
        title: 'Get calculation result',
        path: '/awell-score/docs/api-reference/get-calculation-result',
        badge: badges.get,
      },
      {
        title: 'Perform calculation',
        path: '/awell-score/docs/api-reference/perform-calculation',
        badge: badges.post,
      },
    ],
  },
]
