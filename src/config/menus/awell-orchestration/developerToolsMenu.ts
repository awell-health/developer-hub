import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const developerToolsMenu: MenuType = [
  {
    title: 'SDKs',
    path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/sdks`,
    submenu: [
      {
        title: 'Node.js SDK',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/sdks/server-side-sdk`,
      },
      {
        title: 'UI library',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/sdks/ui-library`,
      },
    ],
  },
  {
    title: 'API',
    path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api`,
    submenu: [
      {
        title: 'Browse API schema',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api/schema`,
      },
      {
        title: 'Playground',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api/playground`,
      },
      {
        title: 'Postman collection',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api/postman-collection`,
      },
      {
        title: 'E.164 phone validation',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/api/e164-phone-validation`,
      },
    ],
  },
  {
    title: 'Webhooks',
    path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks`,
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
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/webhooks/webhook-builder`,
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
    path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/example-projects`,
    submenu: [
      {
        title: 'Orchestration stories',
        path: `/${Space.AWELL_ORCHESTRATION}/developer-tools/example-projects/orchestration-stories`,
      },
    ],
  },
]
