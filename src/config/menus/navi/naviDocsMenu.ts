import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Awell Navi',
    path: `/${Space.NAVI}`,
  },
  {
    title: 'Documentation',
    path: `/${Space.NAVI}/docs`,
  },
  {
    title: 'What is Navi?',
    path: `/${Space.NAVI}/docs/what-is-navi`,
  },
  {
    title: 'Tutorials',
    path: `/${Space.NAVI}/tutorials`,
    submenu: [
      {
        title: 'Quickstart',
        path: `/${Space.NAVI}/tutorials/quickstart`,
      },
    ],
  },
  {
    title: 'How‑to guides',
    path: `/${Space.NAVI}/how-to`,
    submenu: [
      {
        title: 'Branding and theming',
        path: `/${Space.NAVI}/how-to/branding-and-theming`,
      },
    ],
  },
  {
    title: 'Explanations',
    path: `/${Space.NAVI}/explanations`,
    submenu: [
      {
        title: 'Architecture overview',
        path: `/${Space.NAVI}/explanations/architecture-overview`,
      },
      {
        title: 'Sessions and JWTs',
        path: `/${Space.NAVI}/explanations/sessions-and-jwts`,
      },
      {
        title: 'Activity lifecycle',
        path: `/${Space.NAVI}/explanations/activity-model-and-lifecycle`,
      },
    ],
  },
  {
    title: 'Reference',
    path: `/${Space.NAVI}/reference`,
    submenu: [
      {
        title: 'Events',
        path: `/${Space.NAVI}/reference/events`,
      },
    ],
  },
]
