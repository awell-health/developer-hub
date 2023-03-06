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
    title: 'Custom Actions',
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction`,
        submenu: [
          {
            title: 'What are Custom Actions?',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction/what-are-custom-action-extensions`,
          },
          {
            title: 'Get started',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction/get-started`,
          },
        ],
      },
      {
        title: 'Development',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development`,
        submenu: [
          {
            title: 'Create a custom action',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/create-a-custom-action-extension`,
          },
          {
            title: 'Store secrets',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/store-secrets`,
          },
          {
            title: 'Extension settings',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/extension-settings`,
          },
        ],
      },
      {
        title: 'Testing',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/testing`,
        submenu: [
          {
            title: 'Test your custom action extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/testing/test-your-custom-action-extension`,
          },
        ],
      },
      {
        title: 'Deployment',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/deployment`,
        submenu: [
          {
            title: 'Deploy your custom action extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/deploy/deploy-your-custom-action-extension`,
          },
        ],
      },
    ],
  },
]
