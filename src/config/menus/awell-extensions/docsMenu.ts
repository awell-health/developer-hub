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
            title: 'What are Custom Actions',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction/what-are-custom-actions`,
          },
          {
            title: 'Get started',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction/get-started`,
          },
          {
            title: 'Contributing guidelines',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/introduction/contributing-guidelines`,
          },
        ],
      },
      {
        title: 'Development',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development`,
        submenu: [
          {
            title: 'Create an extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/create-an-extension`,
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
            title: 'Test your extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/testing/test-your-extension`,
          },
        ],
      },
      {
        title: 'Deployment',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/deployment`,
        submenu: [
          {
            title: 'Deploy your extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/deploy/deploy-your-extension`,
          },
          {
            title: 'Versioning',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/deploy/versioning`,
          },
        ],
      },
      {
        title: 'Use your extension',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/use-your-extension`,
        submenu: [
          {
            title: 'Install your extension',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-action/suse-your-extension/install-your-extension`,
          },
          {
            title: 'Start using your Custom Actions',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/use-your-extension/start-using-your-custom-actions`,
          },
        ],
      },
    ],
  },
]
