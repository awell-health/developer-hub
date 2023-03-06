import { Space } from '@/types/space.types'

import { type MenuItemType } from '../../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/what-are-awell-extensions`,
        title: 'What are Awell Extensions?',
      },
    ],
  },
  {
    title: 'Action Extensions',
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_EXTENSIONS}/docs/actions/introduction`,
        submenu: [
          {
            title: 'What are Action Extensions?',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/introduction/what-are-action-extensions`,
          },
          {
            title: 'Get started',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/introduction/get-started`,
          },
        ],
      },
      {
        title: 'Development',
        path: `/${Space.AWELL_EXTENSIONS}/docs/actions/development`,
        submenu: [
          {
            title: 'Create an action extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/development/create-an-action-extension`,
          },
          {
            title: 'Store secrets',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/development/store-secrets`,
          },
          {
            title: 'Extension settings',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/development/extension-settings`,
          },
        ],
      },
      {
        title: 'Testing',
        path: `/${Space.AWELL_EXTENSIONS}/docs/actions/testing`,
        submenu: [
          {
            title: 'Test your action extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/testing/test-your-action-extension`,
          },
        ],
      },
      {
        title: 'Deployment',
        path: `/${Space.AWELL_EXTENSIONS}/docs/actions/deployment`,
        submenu: [
          {
            title: 'Deploy your action extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/actions/deploy/deploy-your-action-extension`,
          },
        ],
      },
    ],
  },
]
