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
        title: 'Pathway versioning',
        path: '/awell-orchestration/docs/getting-started/pathway-versioning',
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
        title: 'Hosted pathway',
        path: '/awell-orchestration/docs/activities/hosted-pathway',
      },
      {
        title: 'Hosted activity',
        path: '/awell-orchestration/docs/activities/hosted-activity',
      },
      {
        title: 'Custom integration',
        path: '/awell-orchestration/docs/activities/custom-integration',
      },
    ],
  },
  {
    title: 'Manage and coordinate care',
    submenu: [
      {
        title: 'Overview',
        path: '/awell-orchestration/docs/manage-coordinate-care/overview-care',
      },
      {
        title: 'Awell & Retool',
        path: '/awell-orchestration/docs/manage-coordinate-care/awell-and-retool',
      },
      {
        title: 'Embed in your in-house built EHR/EMR',
        path: '/awell-orchestration/docs/manage-coordinate-care/embed-ehr-emr',
      },
      {
        title: 'Integrations with vendors',
        path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-vendors/overview-vendors',
        submenu: [
          {
            title: 'Overview',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-vendors/overview-vendors',
          },
          {
            title: 'Healthie',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-vendors/healthie',
          },
          {
            title: 'Athena Health',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-vendors/athena-health',
          },
        ],
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
        title: 'Create dashboards with Awell',
        path: '/awell-orchestration/docs/data/create-dashboards-with-awell',
      },
      {
        title: 'Connect to Awell data repository',
        path: '/awell-orchestration/docs/data/connect-to-awell-data-repository',
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
    ],
  },
]
