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
        title: 'Awell Care',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/awell-care`,
      },
      {
        title: 'Sharing link',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/sharing-link`,
      },
      {
        title: 'Awell API',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/awell-api`,
      },
      {
        title: 'Incoming webhook',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/incoming-webhook`,
      },
      {
        title: 'FTP Connector',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/ftp-connector`,
      },
      {
        title: 'ADT feed',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/trigger-care-flows/adt-feed`,
      },
    ],
  },
  {
    title: 'Awell Hosted Pages',
    path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/overview-hosted-pages`,
      },
      {
        title: 'How Hosted Pages works',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/how-hosted-pages-works`,
      },
      {
        title: 'Sessions and Links',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/sessions-and-links`,
      },
      {
        title: 'Built-in and customizable features',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/built-in-and-customizable-features`,
      },
      {
        title: 'Redirect or embed',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/redirect-or-embed`,
      },
      // {
      //   title: 'Alternatives',
      //   path: `/${Space.AWELL_ORCHESTRATION}/docs/awell-hosted-pages/alternatives`,
      //   submenu: [
      //     {
      //       title: 'Awell Platform',
      //       path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/awell-platform-activities`,
      //     },
      //     {
      //       title: 'Build Your Own UI',
      //       path: `/${Space.AWELL_ORCHESTRATION}/docs/activities/build-your-own-ui-activities`,
      //     },
      //   ],
      // },
    ],
  },
  // {
  //   title: 'Operate and manage care',
  //   path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows`,
  //   submenu: [
  //     {
  //       title: 'Overview',
  //       path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/overview-care`,
  //     },
  //     {
  //       title: 'Awell Platform',
  //       path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/awell-platform-care`,
  //     },
  //     {
  //       title: 'Build Your Own UI',
  //       path: `/${Space.AWELL_ORCHESTRATION}/docs/operate-and-manage-care-flows/build-your-own-ui-care`,
  //     },
  //   ],
  // },
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
        title: 'Data repository',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/data-repository`,
      },
      {
        title: 'Kibana',
        path: `/${Space.AWELL_ORCHESTRATION}/docs/data/create-dashboards`,
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
    ],
  },
]
