import { type MenuItemType } from '../../../types/menu.types'

export const developerToolsMenu: MenuItemType[] = [
  {
    title: 'API',
    submenu: [
      {
        title: 'Changelog',
        path: '/awell-orchestration/developer-tools/changelog',
      },
      {
        title: 'Browse API schema',
        path: '/awell-orchestration/developer-tools/schema',
      },
      {
        title: 'Playground',
        path: '/awell-orchestration/developer-tools/playground',
      },
      {
        title: 'Postman collections',
        path: '#',
      },
    ],
  },
  {
    title: 'Webhooks',
    submenu: [
      {
        title: 'Introduction',
        path: '/awell-orchestration/developer-tools/webhooks/introduction',
      },
      {
        title: 'Events overview',
        path: '/awell-orchestration/developer-tools/webhooks/events-overview',
      },
      {
        title: 'Listen for events',
        path: '/awell-orchestration/developer-tools/webhooks/listen-for-events',
      },
      {
        title: 'Webhook builder',
        path: '/awell-orchestration/developer-tools/webhook-builder',
      },
      {
        title: 'Test webhooks',
        path: '/awell-orchestration/developer-tools/webhooks/test-webhooks',
      },
      {
        title: 'Security',
        path: '/awell-orchestration/developer-tools/webhooks/security',
      },
      {
        title: 'Best practices',
        path: '/awell-orchestration/developer-tools/webhooks/best-practices',
      },
      {
        title: 'Go live',
        path: '/awell-orchestration/developer-tools/webhooks/go-live',
      },
    ],
  },
  {
    title: 'Example projects',
    submenu: [
      {
        title: 'Orchestration stories',
        path: '#',
      },
    ],
  },
  {
    title: 'SDKs',
    submenu: [
      {
        title: 'UI library',
        path: '#',
      },
    ],
  },
]
