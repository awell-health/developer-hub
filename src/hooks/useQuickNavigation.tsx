import { type QuickNavType } from '../types/menu.types'
import { useMenus } from './useMenus'

export const useQuickNavigation = (currentPageSlug: string): QuickNavType => {
  const { menus } = useMenus()

  const indexCurrentPage = menus.findIndex((menuItem) => {
    return menuItem.path ? menuItem.path.includes(currentPageSlug) : -1
  })

  if (indexCurrentPage === -1) return { prev: undefined, next: undefined }

  const prevItem = menus[indexCurrentPage - 1]
  const nextItem = menus[indexCurrentPage + 1]

  return {
    prev: prevItem && {
      label: prevItem.title,
      url: prevItem?.path || '',
    },
    next: nextItem && {
      label: nextItem.title,
      url: nextItem?.path || '',
    },
  }
}
