import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/overview`,
      },
      {
        title: 'Core concepts',
        path: `/${Space.AWELL_ONTOLOGY}/docs/getting-started/core-concepts`,
      },
    ],
  },
  {
    title: 'Patient demographic data',
    path: `/${Space.AWELL_ONTOLOGY}/docs/patient-demographic-data/overview`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ONTOLOGY}/docs/patient-demographic-data/overview`,
      },
    ],
  },
  {
    title: 'Diagnostics data',
    path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/overview`,
    submenu: [
      {
        title: 'Overview',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/overview`,
      },
      {
        title: 'Observation',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/observation`,
      },
      {
        title: 'Questionnaire',
        path: `/${Space.AWELL_ONTOLOGY}/docs/diagnostics-data/questionnaire`,
      },
    ],
  },
]
