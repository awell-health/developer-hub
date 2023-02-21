import { Space } from '@/types/space.types'

import { type MenuItemType } from '../../../types/menu.types'

export const docsMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'What is Awell Orchestration?',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/what-is-awell-orchestration`,
      },
      {
        title: 'Design & Orchestrate care flows',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/design-and-orchestrate-care-flows`,
      },
      {
        title: 'Awell ecosystem',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/awell-ecosystem`,
      },
      {
        title: 'Domain model',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/domain-model`,
      },
      {
        title: 'Pathway versioning',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/pathway-versioning`,
      },
    ],
  },
  {
    title: 'Operate and manage care',
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/overview-care`,
      },
      {
        title: 'Awell Platform',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/awell-platform-care`,
      },
      {
        title: 'Build Your Own UI',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/build-your-own-ui-care`,
      },
    ],
  },
  {
    title: 'Interact with activities',
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/overview-activities`,
      },
      {
        title: 'Awell Hosted Pages',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages`,
        submenu: [
          {
            title: 'What are Awell Hosted Pages?',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/what-are-awell-hosted-pages`,
          },
          {
            title: 'Hosted Pathway guide',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-pathway-guide`,
          },
          {
            title: 'Hosted Activity guide',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-hosted-pages/hosted-activity-guide`,
          },
        ],
      },
      {
        title: 'Awell Platform',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-platform-activities`,
      },
      {
        title: 'Build Your Own UI',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/build-your-own-ui-activities`,
      },
    ],
  },
  {
    title: 'Get data and events out',
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/overview-data`,
      },
      {
        title: 'Webhooks & events',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/webhooks-and-events`,
      },
      {
        title: 'Data repository',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/data-repository`,
      },
      {
        title: 'Kibana',
        path: '/${Space.AWELL_ORCHESTRATION}/docs/data/create-dashboards',
        submenu: [
          {
            title: 'Introduction',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/data/kibana/introduction`,
          },
          {
            title: 'Create dashboards',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/data/kibana/create-dashboards`,
          },
        ],
      },
      {
        title: 'Healthcare interoperability',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/healthcare-interoperability`,
      },
    ],
  },
  {
    title: 'Going live',
    submenu: [
      {
        title: 'Preflight checklist',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/going-live/preflight-checklist`,
      },
      {
        title: 'Sandbox to production promotion guide',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/going-live/sandbox-to-production-promotion-guide`,
      },
    ],
  },
]
