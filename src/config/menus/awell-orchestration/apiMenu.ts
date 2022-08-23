import { type MenuItemType, BadgeType } from '../../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  patient: { label: 'Patient', color: 'green' },
  pathway: { label: 'Pathway', color: 'purple' },
  activity: { label: 'Activity', color: 'indigo' },
  datapoint: { label: 'Data Point', color: 'slate' },
  session: { label: 'Session', color: 'red' },
}

export const apiMenu: MenuItemType[] = [
  {
    title: 'Getting started',
    submenu: [
      {
        title: 'Endpoints',
        path: '/awell-orchestration/api-reference/overview/endpoints',
      },
      {
        title: 'Authorization',
        path: '/awell-orchestration/api-reference/overview/authorization',
      },
    ],
  },
  {
    title: 'Queries',
    submenu: [
      {
        title: 'Get patient',
        path: '/awell-orchestration/api-reference/queries/get-patient',
        badge: badges.patient,
      },
      {
        title: 'Get patients',
        path: '/awell-orchestration/api-reference/queries/get-patients',
        badge: badges.patient,
      },
      {
        title: 'Search patient',
        path: '/awell-orchestration/api-reference/queries/search-patient',
        badge: badges.patient,
      },
      {
        title: 'Get pathways',
        path: '/awell-orchestration/api-reference/queries/get-pathways',
        badge: badges.pathway,
      },
      {
        title: 'Get published pathways',
        path: '/awell-orchestration/api-reference/queries/get-published-pathways',
        badge: badges.pathway,
      },
      {
        title: 'Get patient pathways',
        path: '/awell-orchestration/api-reference/queries/get-patient-pathways',
        badge: badges.pathway,
      },
      {
        title: 'Get pathway',
        path: '/awell-orchestration/api-reference/queries/get-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Get baseline info',
        path: '/awell-orchestration/api-reference/queries/get-baseline-info',
        badge: badges.pathway,
      },
      {
        title: 'Get pathway elements',
        path: '/awell-orchestration/api-reference/queries/get-pathway-elements',
        badge: badges.pathway,
      },
      {
        title: 'Get pathway activities',
        path: '/awell-orchestration/api-reference/queries/get-pathway-activities',
        badge: badges.activity,
      },
      {
        title: 'Search activities',
        path: '/awell-orchestration/api-reference/queries/search-activities',
        badge: badges.activity,
      },
      {
        title: 'Get API call',
        path: '/awell-orchestration/api-reference/queries/get-api-call',
        badge: badges.activity,
      },
      {
        title: 'Get calculation results',
        path: '/awell-orchestration/api-reference/queries/get-calculation-results',
        badge: badges.activity,
      },
      {
        title: 'Get checklist',
        path: '/awell-orchestration/api-reference/queries/get-checklist',
        badge: badges.activity,
      },
      {
        title: 'Get EMR report',
        path: '/awell-orchestration/api-reference/queries/get-emr-report',
        badge: badges.activity,
      },
      {
        title: 'Get form',
        path: '/awell-orchestration/api-reference/queries/get-form',
        badge: badges.activity,
      },
      {
        title: 'Get form response',
        path: '/awell-orchestration/api-reference/queries/get-form-response',
        badge: badges.activity,
      },
      {
        title: 'Get message',
        path: '/awell-orchestration/api-reference/queries/get-message',
        badge: badges.activity,
      },
      {
        title: 'Get patient pending activities',
        path: '/awell-orchestration/api-reference/queries/get-patient-pending-activities',
        badge: badges.activity,
      },
      {
        title: 'Get data point definitions',
        path: '/awell-orchestration/api-reference/queries/get-data-point-definitions',
        badge: badges.datapoint,
      },
    ],
  },
  {
    title: 'Mutations',
    submenu: [
      {
        title: 'Create patient',
        path: '/awell-orchestration/api-reference/mutations/create-patient',
        badge: badges.patient,
      },
      {
        title: 'Delete patient',
        path: '/awell-orchestration/api-reference/mutations/delete-patient',
        badge: badges.patient,
      },
      {
        title: 'Update patient',
        path: '/awell-orchestration/api-reference/mutations/update-patient',
        badge: badges.patient,
      },
      {
        title: 'Delete pathway',
        path: '/awell-orchestration/api-reference/mutations/delete-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Start pathway',
        path: '/awell-orchestration/api-reference/mutations/start-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Stop pathway',
        path: '/awell-orchestration/api-reference/mutations/stop-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Start hosted pathway session',
        path: '/awell-orchestration/api-reference/mutations/start-hosted-pathway-session',
        badge: badges.pathway,
      },
      {
        title: 'Update baseline info',
        path: '/awell-orchestration/api-reference/mutations/update-baseline-info',
        badge: badges.pathway,
      },
      {
        title: 'Start hosted activity session',
        path: '/awell-orchestration/api-reference/mutations/start-hosted-activity-session',
        badge: badges.activity,
      },
      {
        title: 'Evaluate form rules',
        path: '/awell-orchestration/api-reference/mutations/evaluate-form-rules',
        badge: badges.activity,
      },
      {
        title: 'Mark message as read',
        path: '/awell-orchestration/api-reference/mutations/mark-message-as-read',
        badge: badges.activity,
      },
      {
        title: 'Submit checklist response',
        path: '/awell-orchestration/api-reference/mutations/submit-checklist-response',
        badge: badges.activity,
      },
      {
        title: 'Submit form response',
        path: '/awell-orchestration/api-reference/mutations/submit-form-response',
        badge: badges.activity,
      },
      {
        title: 'Resend EMR report',
        path: '/awell-orchestration/api-reference/mutations/resend-emr-report',
        badge: badges.activity,
      },
    ],
  },
  {
    title: 'Webhooks',
    submenu: [
      {
        title: 'Pathway started',
        path: '/awell-orchestration/api-reference/webhooks/pathway-started',
        badge: badges.pathway,
      },
      {
        title: 'Pathway completed',
        path: '/awell-orchestration/api-reference/webhooks/pathway-completed',
        badge: badges.pathway,
      },
      {
        title: 'Activity created',
        path: '/awell-orchestration/api-reference/webhooks/activity-created',
        badge: badges.activity,
      },
      {
        title: 'Activity completed',
        path: '/awell-orchestration/api-reference/webhooks/activity-completed',
        badge: badges.activity,
      },
      {
        title: 'Form submitted',
        path: '/awell-orchestration/api-reference/webhooks/form-submitted',
        badge: badges.activity,
      },
      {
        title: 'Reminder created',
        path: '/awell-orchestration/api-reference/webhooks/reminder-created',
        badge: badges.activity,
      },
      {
        title: 'Data point collected',
        path: '/awell-orchestration/api-reference/webhooks/data-point-collected',
        badge: badges.datapoint,
      },
      {
        title: 'Session started',
        path: '/awell-orchestration/api-reference/webhooks/session-started',
        badge: badges.session,
      },
      {
        title: 'Session expired',
        path: '/awell-orchestration/api-reference/webhooks/session-expired',
        badge: badges.session,
      },
      {
        title: 'Session completed',
        path: '/awell-orchestration/api-reference/webhooks/session-completed',
        badge: badges.session,
      },
    ],
  },
]
