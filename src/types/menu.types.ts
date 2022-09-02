import { BadgeColorType } from '../components/Badge/badge.types'

export type NavType = {
  label: string
  path: string
  external?: boolean
}

export type BadgeType = { label: string; color?: BadgeColorType }

export type SubMenuType = {
  title: string
  path: string
  badge?: BadgeType
  openInNewTab?: boolean
}

export type SubmenuItemType = {
  title: string
  path: string
  badge?: BadgeType
  openInNewTab?: boolean
  submenu?: SubMenuType[]
}

export type MenuItemType = {
  title: string
  path?: string
  submenu?: SubmenuItemType[]
  openInNewTab?: boolean
  badge?: BadgeType
}

// ;[
//   {
//     title: 'hello',
//     path: '/hello',
//     submenu: [
//       {
//         title: 'hello',
//         path: '/hello',
//         submenu: [
//           {
//             title: 'hello',
//             path: '/hello',
//           },
//         ],
//       },
//     ],
//   },
// ]

export type MenuType = MenuItemType[]

export type QuickNavType = {
  prev?: {
    label: string
    url: string
  }
  next?: {
    label: string
    url: string
  }
}
