import { type MenuItemType } from '../../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'What is Awell Orchestration?',
        path: '/awell-orchestration/docs/getting-started/what-is-awell-orchestration',
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
        title: 'Integrations overview',
        path: '/awell-orchestration/docs/getting-started/integrations-overview'
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
        title: 'Hosted pathway',
        path: '/awell-orchestration/docs/integrations/hosted-pathway',
      },
      {
        title: 'Hosted activity',
        path: '/awell-orchestration/docs/integrations/hosted-activity',
      },
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
