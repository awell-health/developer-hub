import { Space } from '@/types/space.types'

import { type MenuItemType } from '../../../types/menu.types'

export const developerToolsMenu: MenuItemType[] = [
  {
    title: 'API',
    submenu: [
      {
        title: 'Browse API schema',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/schema`,
      },
      {
        title: 'Playground',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/playground`,
      },
      {
        title: 'Postman collection',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api/postman-collection`,
      },
    ],
  },
  {
    title: 'Webhooks',
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/introduction`,
      },
      {
        title: 'Events overview',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/events-overview`,
      },
      {
        title: 'Listen for events',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/listen-for-events`,
      },
      {
        title: 'Webhook builder',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhook-builder`,
      },
      {
        title: 'Test webhooks',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/test-webhooks`,
      },
      {
        title: 'Security',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/security`,
      },
      {
        title: 'Best practices',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/best-practices`,
      },
      {
        title: 'Go live',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/go-live`,
      },
    ],
  },
  {
    title: 'Example projects',
    submenu: [
      {
        title: 'Orchestration stories',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/example-projects/orchestration-stories`,
      },
    ],
  },
  {
    title: 'SDKs',
    submenu: [
      {
        title: 'UI library',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/sdks/ui-library`,
      },
    ],
  },
]
