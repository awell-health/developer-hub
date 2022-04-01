import { BadgeColorType } from '../../components/Badge/badge.types'
import { type MenuItemType } from '../../types/menu.types'

const badges: { [key in string]: { label: string; color: BadgeColorType } } = {
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
        title: 'List patients',
        path: '/api-reference/queries/get-patient',
        badge: badges.patient,
      },
      {
        title: 'Pathway',
        path: '/api-reference/queries/pathway',
        badge: badges.pathway,
      },
      {
        title: 'Pathway activities',
        path: '/api-reference/queries/pathway-activities',
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
    ],
  },
  {
    title: 'Subscriptions',
    submenu: [],
  },
]
