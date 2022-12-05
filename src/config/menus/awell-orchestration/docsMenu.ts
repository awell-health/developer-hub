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
        title: 'Notifications',
        path: '/awell-orchestration/docs/activities/notifications/overview-notifications',
        submenu: [
          {
            title: 'Overview',
            path: '/awell-orchestration/docs/activities/notifications/overview-notifications',
          },
          {
            title: 'Notifying the patient',
            path: '/awell-orchestration/docs/activities/notifications/patient-notifications',
          },
          {
            title: 'Notifying other stakeholders',
            path: '/awell-orchestration/docs/activities/notifications/stakeholder-notifications',
          },
          {
            title: 'Notifications to a specific destination',
            path: '/awell-orchestration/docs/activities/notifications/specific-notifications',
          },
        ],
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
        title: 'Awell Platform',
        path: '/awell-orchestration/docs/manage-coordinate-care/awell-platform',
      },
      {
        title: 'Embed in your in-house built EHR/EMR',
        path: '/awell-orchestration/docs/manage-coordinate-care/embed-ehr-emr',
      },
      {
        title: 'Integrations with 3rd parties',
        path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-3rd-parties/overview-3rd-parties',
        submenu: [
          {
            title: 'Overview',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-3rd-parties/overview-3rd-parties',
          },
          {
            title: 'Healthie',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-3rd-parties/healthie',
          },
          {
            title: 'Athena Health',
            path: '/awell-orchestration/docs/manage-coordinate-care/integrations-with-3rd-parties/athena-health',
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
      {
        title: 'Sandbox to production promotion guide',
        path: '/awell-orchestration/docs/going-live/sandbox-to-production-promotion-guide',
      },
    ],
  },
]
