import { Space } from '@/types/space.types'

import { type MenuType } from '../../../types/menu.types'

export const docsMenu: MenuType = [
  {
    title: 'Getting started',
    path: `/${Space.AWELL_STUDIO}/docs/getting-started`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_STUDIO}/docs/getting-started/studio-introduction`,
      },
      {
        title: 'Design ontology',
        path: `/${Space.AWELL_STUDIO}/docs/getting-started/design-ontology`,
      },
      {
        title: 'Versioning',
        path: `/${Space.AWELL_STUDIO}/docs/getting-started/versioning`,
      },
      {
        title: 'Help center',
        path: `/${Space.AWELL_STUDIO}/docs/getting-started/help-center`,
      },
    ],
  },
  {
    title: 'Source Control',
    path: `/${Space.AWELL_STUDIO}/docs/source-control`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_STUDIO}/docs/source-control/introduction`,
      },
      {
        title: 'Quickstarts',
        path: `/${Space.AWELL_STUDIO}/docs/source-control/quickstarts`,
        submenu: [
          {
            title: 'Github',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/quickstarts/github`,
          },
        ],
      },
      {
        title: 'Concepts',
        path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts`,
        submenu: [
          {
            title: 'Components',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/components`,
          },
        ],
      },
    ],
  },
]
