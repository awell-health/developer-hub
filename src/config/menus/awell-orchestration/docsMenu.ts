import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-introduction`,
      },
      {
        title: 'Orchestration ontology',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-ontology`,
      },
      {
        title: 'Versioning',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/getting-started/orchestration-versioning`,
      },
    ],
  },
  {
    title: 'Trigger care flows',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/overview-trigger-care-flows`,
      },
      {
        title: 'Trigger types',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types`,
        submenu: [
          {
            title: 'Awell Hosted Pages Link',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/awell-hosted-pages-link`,
          },
          {
            title: 'Awell API',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/awell-api`,
          },
          {
            title: 'Incoming webhooks',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/incoming-webhooks`,
          },
          {
            title: 'File uploads',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/file-uploads`,
          },
          {
            title: 'ADT feeds',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/adt-feeds`,
          },
          {
            title: 'Awell Care',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/trigger-types/awell-care`,
          },
        ],
      },
    ],
  },
  {
    title: 'Interact with care flows',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows`,
    submenu: [
      {
        title: 'Awell Hosted Pages',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages`,
        submenu: [
          {
            title: 'Overview',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages/overview-hosted-pages`,
          },
          {
            title: 'How Hosted Pages works',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages/how-hosted-pages-works`,
          },
          {
            title: 'Sessions and Links',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages/sessions-and-links`,
          },
          {
            title: 'Built-in and customizable features',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages/built-in-and-customizable-features`,
          },
          {
            title: 'Redirect or embed',
            path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/awell-hosted-pages/redirect-or-embed`,
          },
        ],
      },
      {
        title: 'Build your own UI',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/interact-with-care-flows/build-your-own-ui`,
      },
    ],
  },
  {
    title: 'Get data and events out',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/data`,
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
        title: 'Data Repository',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/data-repository`,
      },
      {
        title: 'Healthcare interoperability',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/healthcare-interoperability`,
      },
    ],
  },
  {
    title: 'Going live',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/going-live`,
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
  {
    title: 'Miscellaneous',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/misc/`,
    submenu: [
      {
        title: 'Patient Demographics Query',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/misc/patient-demographics-query`,
      },
      {
        title: 'Patient Identifiers',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/misc/patient-identifiers`,
      },
    ],
  },
]
