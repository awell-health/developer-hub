import { type MenuItemType, BadgeType } from '../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  patient: { label: 'Patient', color: 'green' },
  pathway: { label: 'Pathway', color: 'purple' },
  activity: { label: 'Activity', color: 'indigo' },
}

export const apiMenu: MenuItemType[] = [
  {
    title: 'Overview',
    submenu: [
      {
        title: 'Endpoints',
        path: '/api-reference/overview/endpoints',
      },
      {
        title: 'Authorization',
        path: '/api-reference/overview/authorization',
      },
      {
        title: 'Schema',
        path: '/api-reference/overview/schema',
      },
    ],
  },
  {
    title: 'Queries',
    submenu: [
      {
        title: 'Get patient',
        path: '/api-reference/queries/get-patient',
        badge: badges.patient,
      },
      {
        title: 'Get patient pathways',
        path: '/api-reference/queries/get-patient-pathways',
        badge: badges.patient,
      },
      {
        title: 'Search patient',
        path: '/api-reference/queries/search-patient',
        badge: badges.patient,
      },
      {
        title: 'List patients',
        path: '/api-reference/queries/list-patients',
        badge: badges.patient,
      },
      {
        title: 'Get pathway',
        path: '/api-reference/queries/get-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Get published pathways',
        path: '/api-reference/queries/get-published-pathways',
        badge: badges.pathway,
      },
      {
        title: 'Get pathway activities',
        path: '/api-reference/queries/get-pathway-activities',
        badge: badges.activity,
      },
      {
        title: 'Get baseline info',
        path: '/api-reference/queries/get-baseline-info',
        badge: badges.activity,
      },
      {
        title: 'Get pending activities',
        path: '/api-reference/queries/get-pending-activities',
        badge: badges.activity,
      },
      {
        title: 'Get message',
        path: '/api-reference/queries/get-message',
        badge: badges.activity,
      },
      {
        title: 'Get form',
        path: '/api-reference/queries/get-form',
        badge: badges.activity,
      },
      {
        title: 'Get form response',
        path: '/api-reference/queries/get-form-response',
        badge: badges.activity,
      },
      {
        title: 'Get calculation results',
        path: '/api-reference/queries/get-calculation-results',
        badge: badges.activity,
      },
    ],
  },
  {
    title: 'Mutations',
    submenu: [
      {
        title: 'Create patient',
        path: '/api-reference/mutations/create-patient',
        badge: badges.patient,
      },
      {
        title: 'Update patient',
        path: '/api-reference/mutations/update-patient',
        badge: badges.patient,
      },
      {
        title: 'Delete patient',
        path: '/api-reference/mutations/delete-patient',
        badge: badges.patient,
      },
      {
        title: 'Start pathway',
        path: '/api-reference/mutations/start-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Stop pathway',
        path: '/api-reference/mutations/stop-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Delete pathway',
        path: '/api-reference/mutations/delete-pathway',
        badge: badges.pathway,
      },
      {
        title: 'Update baseline info',
        path: '/api-reference/mutations/update-baseline-info',
        badge: badges.pathway,
      },
      {
        title: 'Submit form response',
        path: '/api-reference/mutations/submit-form-response',
        badge: badges.activity,
      },
      {
        title: 'Evaluate form rules',
        path: '/api-reference/mutations/evaluate-form-rules',
        badge: badges.activity,
      },
      {
        title: 'Mark message as read',
        path: '/api-reference/mutations/mark-message-as-read',
        badge: badges.activity,
      },
    ],
  },
]
