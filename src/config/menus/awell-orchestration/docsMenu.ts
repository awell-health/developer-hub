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
        title: 'Design & Orchestrate care flows',
        path: '/awell-orchestration/docs/getting-started/design-and-orchestrate-care-flows',
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
    title: 'Operate and manage care',
    submenu: [
      {
        title: 'Overview',
        path: '/awell-orchestration/docs/operate-and-manage-care-flows/overview-care',
      },
      {
        title: 'Awell Platform',
        path: '/awell-orchestration/docs/operate-and-manage-care-flows/awell-platform-care',
      },
      {
        title: 'Build Your Own UI',
        path: '/awell-orchestration/docs/operate-and-manage-care-flows/build-your-own-ui-care',
      },
    ],
  },
  {
    title: 'Interact with activities',
    submenu: [
      {
        title: 'Overview',
        path: '/awell-orchestration/docs/activities/overview-activities',
      },
      {
        title: 'Awell Hosted Pages',
        path: '/awell-orchestration/docs/activities/awell-hosted-pages',
        submenu: [
          {
            title: 'What are Awell Hosted Pages?',
            path: '/awell-orchestration/docs/activities/awell-hosted-pages/what-are-awell-hosted-pages',
          },
          {
            title: 'Hosted Pathway guide',
            path: '/awell-orchestration/docs/activities/awell-hosted-pages/hosted-pathway-guide',
          },
          {
            title: 'Hosted Activity guide',
            path: '/awell-orchestration/docs/activities/awell-hosted-pages/hosted-activity-guide',
          },
        ],
      },
      {
        title: 'Awell Platform',
        path: '/awell-orchestration/docs/activities/awell-platform-activities',
      },
      {
        title: 'Build Your Own UI',
        path: '/awell-orchestration/docs/activities/build-your-own-ui-activities',
      },
    ],
  },
  {
    title: 'Get data and events out',
    submenu: [
      {
        title: 'Overview',
        path: '/awell-orchestration/docs/data/overview-data',
      },
      {
        title: 'Webhooks & events',
        path: '/awell-orchestration/docs/data/webhooks-and-events',
      },
      {
        title: 'Data repository',
        path: '/awell-orchestration/docs/data/data-repository',
      },
      {
        title: 'Kibana',
        path: '/awell-orchestration/docs/data/create-dashboards',
        submenu: [
          {
            title: 'Create dashboards',
            path: '/awell-orchestration/docs/data/kibana/create-dashboards',
          },
        ],
      },
      {
        title: 'Healthcare interoperability',
        path: '/awell-orchestration/docs/data/healthcare-interoperability',
      },
    ],
  },
  {
    title: 'Going live',
    submenu: [
      {
        title: 'Preflight checklist',
        path: '/awell-orchestration/docs/going-live/preflight-checklist',
      },
      {
        title: 'Sandbox to production promotion guide',
        path: '/awell-orchestration/docs/going-live/sandbox-to-production-promotion-guide',
      },
    ],
  },
]
