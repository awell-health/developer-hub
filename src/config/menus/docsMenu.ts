import { type MenuItemType } from '../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'Welcome',
        path: '/docs/getting-started/welcome',
      },
      {
        title: 'Awell ecosystem',
        path: '/docs/getting-started/awell-ecosystem',
      },
      {
        title: 'Concepts & Terminology',
        path: '/docs/getting-started/concepts-and-terminology',
      },
    ],
  },
  {
    title: 'Guides & Tutorials',
    submenu: [
      {
        title: 'Get started with Awell',
        path: '/docs/tutorials/get-started-with-awell',
      },
      {
        title: 'Onboarding',
        path: '/docs/tutorials/onboarding',
      },
    ],
  },
  {
    title: 'Integrations',
    submenu: [
      {
        title: 'Healthcare interoperability',
        path: '/docs/integrations/healthcare-interoperability',
      },
      {
        title: 'Webhooks',
        path: '/docs/integrations/webhooks',
      },
    ],
  },
]
