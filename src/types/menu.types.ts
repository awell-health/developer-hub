import { BadgeColorType } from '../components/Badge/badge.types'

export type MenuItemType = {
  title: string
  submenu?: {
    title: string
    path: string
    badge?: {
      label: string
      color?: BadgeColorType
    }
  }[]
}
