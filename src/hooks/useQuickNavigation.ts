import { apiMenu, docsMenu } from '../config/menus'
import { type QuickNavType } from '../types/menu.types'

export const useQuickNavigation = (
  currentPageSlug: string,
  menuCategory: 'docs' | 'api'
): QuickNavType => {
  const subMenus =
    menuCategory === 'docs'
      ? docsMenu.flatMap((mainMenuItem) => mainMenuItem.submenu || [])
      : apiMenu.flatMap((mainMenuItem) => mainMenuItem.submenu || [])

  const indexCurrentPage = subMenus.findIndex((subMenu) => {
    return subMenu.path.includes(currentPageSlug)
  })

  if (indexCurrentPage === -1) return { prev: undefined, next: undefined }

  const prevItem = subMenus[indexCurrentPage - 1]
  const nextItem = subMenus[indexCurrentPage + 1]

  return {
    prev: prevItem && {
      label: prevItem.title,
      url: prevItem.path,
    },
    next: nextItem && {
      label: nextItem.title,
      url: nextItem.path,
    },
  }
}
