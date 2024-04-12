import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started`,
    submenu: [
      {
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/what-are-awell-extensions`,
        title: 'What are Awell Extensions?',
      },
      {
        title: 'Get started',
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/get-started`,
      },
      {
        title: 'Contributing guidelines',
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/contributing-guidelines`,
      },
      {
        title: 'Create an extension',
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/create-an-extension`,
      },
      {
        title: 'Store secrets',
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/store-secrets`,
      },
      {
        title: 'Extension settings',
        path: `/${Space.AWELL_EXTENSIONS}/docs/getting-started/extension-settings`,
      },
    ],
  },
  {
    title: 'Custom Actions',
    path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions`,
    submenu: [
      {
        title: 'What are Custom Actions',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/what-are-custom-actions`,
      },
      {
        title: 'Development',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development`,
        submenu: [
          {
            title: 'Create an action',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/create-an-action`,
          },
          {
            title: 'Action fields',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/action-fields`,
          },
          {
            title: 'onActivityCreated',
            path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/development/on-activity-created`,
          },
        ],
      },
      {
        title: 'Test your Custom Actions',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/test-your-custom-actions`,
      },
      {
        title: 'Use your Custom Actions',
        path: `/${Space.AWELL_EXTENSIONS}/docs/custom-actions/use-your-custom-actions`,
      },
    ],
  },
  {
    title: 'Deployment & usage',
    path: `/${Space.AWELL_EXTENSIONS}/docs/deployment-and-usage`,
    submenu: [
      {
        title: 'Deploy your extension',
        path: `/${Space.AWELL_EXTENSIONS}/docs/deployment-and-usage/deploy-your-extension`,
      },
      {
        title: 'Versioning',
        path: `/${Space.AWELL_EXTENSIONS}/docs/deployment-and-usage/versioning`,
      },
      {
        title: 'Enable and configure your extension',
        path: `/${Space.AWELL_EXTENSIONS}/docs/deployment-and-usage/enable-and-configure-your-extension`,
      },
    ],
  },
]
