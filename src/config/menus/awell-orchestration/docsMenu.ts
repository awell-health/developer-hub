import { type MenuItemType } from '../../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'Welcome',
        path: '/awell-orchestration/docs/getting-started/welcome',
      },
      {
        title: 'Awell ecosystem',
        path: '/awell-orchestration/docs/getting-started/awell-ecosystem',
      },
      {
        title: 'Domain model',
        path: '/awell-orchestration/docs/getting-started/domain-model',
      },
      {
        title: 'Pathway versioning',
        path: '/awell-orchestration/docs/getting-started/pathway-versioning',
      },
    ],
  },
  {
    title: 'Data',
    submenu: [
      {
        title: 'Data access',
        path: '/awell-orchestration/docs/data/data-access',
      },
      {
        title: 'Monthly active patients',
        path: '/awell-orchestration/docs/data/monthly-active-patients',
      },
    ],
  },
  {
    title: 'Guides & Tutorials',
    submenu: [
      {
        title: 'Get started with Awell',
        path: '/awell-orchestration/docs/tutorials/get-started-with-awell',
      },
    ],
  },
  {
    title: 'Integrations',
    submenu: [
      {
        title: 'Healthcare interoperability',
        path: '/awell-orchestration/docs/integrations/healthcare-interoperability',
      },
      {
        title: 'Webhooks',
        path: '/awell-orchestration/docs/integrations/webhooks',
      },
    ],
  },
]
