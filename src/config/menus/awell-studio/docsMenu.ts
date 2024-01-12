import { Space } from '@/types/space.types'

import { type MenuType, BadgeType } from '../../../types/menu.types'

const badges: { [key in string]: BadgeType } = {
  comingSoon: { label: 'Soon', color: 'sky' },
}

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
        title: 'Concepts',
        path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts`,
        submenu: [
          {
            title: 'Syncing to SCM',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/syncing-to-scm`,
          },
          {
            title: 'Components',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/components`,
          },
          {
            title: 'Protect care flows',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/protect-care-flows`,
            badge: badges.comingSoon,
          },
          {
            title: 'Test care flows',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/test-care-flows`,
            badge: badges.comingSoon,
          },
          {
            title: 'Deploy care flows',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/concepts/deploy-care-flows`,
            badge: badges.comingSoon,
          },
        ],
      },
      {
        title: 'Quickstarts',
        path: `/${Space.AWELL_STUDIO}/docs/source-control/quickstarts`,
        submenu: [
          {
            title: 'GitHub',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/quickstarts/github`,
          },
          {
            title: 'Gitlab',
            path: `/${Space.AWELL_STUDIO}/docs/source-control/quickstarts/gitlab`,
            badge: badges.comingSoon,
          },
        ],
      },
    ],
  },
  {
    title: 'Single Sign On (SSO)',
    path: `/${Space.AWELL_STUDIO}/docs/sso`,
    submenu: [
      {
        title: 'Introduction',
        path: `/${Space.AWELL_STUDIO}/docs/sso/introduction-sso`,
      },
      {
        title: 'Setting up SSO',
        path: `/${Space.AWELL_STUDIO}/docs/sso/setting-up-sso`,
      },
      {
        title: 'Identity providers',
        path: `/${Space.AWELL_STUDIO}/docs/sso/identity-providers`,
        submenu: [
          {
            title: 'Okta',
            path: `/${Space.AWELL_STUDIO}/docs/sso/identity-providers/okta`,
          },
          {
            title: 'Google',
            path: `/${Space.AWELL_STUDIO}/docs/sso/identity-providers/google`,
          },
        ],
      },
    ],
  },
]
