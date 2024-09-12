import { Space } from '@/types/space.types'

import { type BadgeType, type MenuType } from '../../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  patient: { label: 'Patient', color: 'green' },
  pathway: { label: 'Pathway', color: 'purple' },
  tracks: { label: 'Tracks', color: 'yellow' },
  activity: { label: 'Activity', color: 'indigo' },
  datapoint: { label: 'Data Point', color: 'slate' },
  session: { label: 'HostedPages', color: 'red' },
  elements: { label: 'Elements', color: 'sky' },
  stakeholders: { label: 'Stakeholders', color: 'orange' },
}

export const apiMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview`,
    submenu: [
      {
        title: 'GraphQL API',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/graphql-api`,
      },
      {
        title: 'Domain model',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/domain-model`,
      },
      {
        title: 'Endpoints',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/endpoints`,
      },
      {
        title: 'Authorization',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/authorization`,
      },
      {
        title: 'Requests and responses',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/requests-and-responses`,
      },
      {
        title: 'Status codes and error responses',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/overview/status-codes-and-error-responses`,
      },
    ],
  },
  {
    title: 'Queries',
    path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries`,
    submenu: [
      {
        title: 'Get patient',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-patient`,
        badge: badges.patient,
      },
      {
        title: 'Get patients',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-patients`,
        badge: badges.patient,
      },
      {
        title: 'Search patient',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/search-patient`,
        badge: badges.patient,
      },
      {
        title: 'Get pathways',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-pathways`,
        badge: badges.pathway,
      },
      {
        title: 'Get published pathways',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-published-pathways`,
        badge: badges.pathway,
      },
      {
        title: 'Get patient pathways',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-patient-pathways`,
        badge: badges.pathway,
      },
      {
        title: 'Get pathway',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-pathway`,
        badge: badges.pathway,
      },
      {
        title: 'Get baseline info',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-baseline-info`,
        badge: badges.pathway,
      },
      {
        title: 'Get pathway data points',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-pathway-data-points`,
        badge: badges.pathway,
      },
      {
        title: 'Get pathway elements',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-pathway-elements`,
        badge: badges.pathway,
      },
      {
        title: 'Get scheduled steps',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-scheduled-steps`,
        badge: badges.pathway,
      },
      {
        title: 'Get audit logs',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-audit-logs`,
        badge: badges.pathway,
      },
      {
        title: 'Get ad hoc tracks',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-ad-hoc-tracks`,
        badge: badges.tracks,
      },
      {
        title: 'Get scheduled tracks',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-scheduled-tracks`,
        badge: badges.tracks,
      },
      {
        title: 'Get stakeholders',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-stakeholders`,
        badge: badges.stakeholders,
      },
      {
        title: 'Get pathway activities',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-pathway-activities`,
        badge: badges.activity,
      },
      {
        title: 'Search activities',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/search-activities`,
        badge: badges.activity,
      },
      {
        title: 'Get calculation results',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-calculation-results`,
        badge: badges.activity,
      },
      {
        title: 'Get form response',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-form-response`,
        badge: badges.activity,
      },
      {
        title: 'Get user pending activities',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-user-pending-activities`,
        badge: badges.activity,
      },
      {
        title: 'Get Hosted Pages link',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-hosted-pages-link`,
        badge: badges.session,
      },
      {
        title: 'Get API call',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-api-call`,
        badge: badges.elements,
      },
      {
        title: 'Get checklist',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-checklist`,
        badge: badges.elements,
      },
      {
        title: 'Get clinical note',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-clinical-note`,
        badge: badges.elements,
      },
      {
        title: 'Get EMR report',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-emr-report`,
        badge: badges.elements,
      },
      {
        title: 'Get form',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-form`,
        badge: badges.elements,
      },
      {
        title: 'Get all forms in a pathway',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-forms-in-pathway`,
        badge: badges.elements,
      },
      {
        title: 'Get message',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-message`,
        badge: badges.elements,
      },
      {
        title: 'Get data point definitions',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/queries/get-data-point-definitions`,
        badge: badges.elements,
      },
    ],
  },
  {
    title: 'Mutations',
    path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations`,
    submenu: [
      {
        title: 'Create patient',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/create-patient`,
        badge: badges.patient,
      },
      {
        title: 'Delete patient',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/delete-patient`,
        badge: badges.patient,
      },
      {
        title: 'Update patient',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/update-patient`,
        badge: badges.patient,
      },
      {
        title: 'Delete pathway',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/delete-pathway`,
        badge: badges.pathway,
      },
      {
        title: 'Start pathway',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/start-pathway`,
        badge: badges.pathway,
      },
      {
        title: 'Stop pathway',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/stop-pathway`,
        badge: badges.pathway,
      },
      {
        title: 'Update baseline info',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/update-baseline-info`,
        badge: badges.pathway,
      },
      {
        title: 'Add ad hoc track',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/add-ad-hoc-track`,
        badge: badges.tracks,
      },
      {
        title: 'Schedule a track',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/schedule-track`,
        badge: badges.tracks,
      },
      {
        title: 'Unschedule tracks',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/unschedule-tracks`,
        badge: badges.tracks,
      },
      {
        title: 'Stop track',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/stop-track`,
        badge: badges.tracks,
      },
      {
        title: 'Evaluate form rules',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/evaluate-form-rules`,
        badge: badges.activity,
      },
      {
        title: 'Mark message as read',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/mark-message-as-read`,
        badge: badges.activity,
      },
      {
        title: 'Submit checklist response',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/submit-checklist-response`,
        badge: badges.activity,
      },
      {
        title: 'Submit form response',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/submit-form-response`,
        badge: badges.activity,
      },
      {
        title: 'Resend EMR report',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/resend-emr-report`,
        badge: badges.activity,
      },
      {
        title: 'Start Hosted Pages session',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/start-hosted-pages-session`,
        badge: badges.session,
      },
      {
        title: 'Start pathway and Hosted Pages session',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/mutations/start-pathway-and-hosted-pages-session`,
        badge: badges.session,
      },
    ],
  },
  {
    title: 'Webhooks',
    path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks`,
    submenu: [
      {
        title: 'Pathway started',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/pathway-started`,
        badge: badges.pathway,
      },
      {
        title: 'Pathway completed',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/pathway-completed`,
        badge: badges.pathway,
      },
      {
        title: 'Activity created',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/activity-created`,
        badge: badges.activity,
      },
      {
        title: 'Activity completed',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/activity-completed`,
        badge: badges.activity,
      },
      {
        title: 'Form submitted',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/form-submitted`,
        badge: badges.activity,
      },
      {
        title: 'Reminder created',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/reminder-created`,
        badge: badges.activity,
      },
      {
        title: 'Data point collected',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/data-point-collected`,
        badge: badges.datapoint,
      },
      {
        title: 'Session started',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-started`,
        badge: badges.session,
      },
      {
        title: 'Session expired',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-expired`,
        badge: badges.session,
      },
      {
        title: 'Session completed',
        path: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-completed`,
        badge: badges.session,
      },
    ],
  },
]
