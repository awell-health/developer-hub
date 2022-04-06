import { BadgeColorType } from '../components/Badge/badge.types'

export type BadgeType = { label: string; color?: BadgeColorType }

export type SubmenuItemType = {
  title: string
  path: string
  badge?: BadgeType
}

export type MenuItemType = {
  title: string
  submenu?: SubmenuItemType[]
}

export type MenuType = MenuItemType[]
