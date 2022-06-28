import {
  orchestrationApiMenu,
  orchestrationDocsMenu,
} from '../config/menus/awell-orchestration'
import { BadgeType } from '../types/menu.types'

export const useBadge = (slug: string): { badge: BadgeType | undefined } => {
  const menus = [...orchestrationApiMenu, ...orchestrationDocsMenu]

  const matchedMenuCategory = menus.find((menuSection) => {
    const subMenu = menuSection?.submenu || []

    return subMenu.some((subMenuItem) => subMenuItem.path.includes(slug))
  })

  if (matchedMenuCategory && matchedMenuCategory.submenu)
    return {
      badge: matchedMenuCategory.submenu.find((subMenuItem) =>
        subMenuItem.path.includes(slug)
      )?.badge,
    }

  return { badge: undefined }
}
