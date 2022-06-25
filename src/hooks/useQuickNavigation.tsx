import {
  orchestrationApiMenu,
  orchestrationDocsMenu,
} from '../config/menus/awell-orchestration'
import { scoreDocsMenu } from '../config/menus/awell-score'
import { type QuickNavType } from '../types/menu.types'

export const useQuickNavigation = (currentPageSlug: string): QuickNavType => {
  const subMenus = [
    ...orchestrationDocsMenu.flatMap(
      (mainMenuItem) =>
        mainMenuItem.submenu?.map((submenuItem) => {
          return { ...submenuItem, space: 'awell-orchestration' }
        }) || []
    ),
    ...orchestrationApiMenu.flatMap(
      (mainMenuItem) =>
        mainMenuItem.submenu?.map((submenuItem) => {
          return { ...submenuItem, space: 'awell-orchestration' }
        }) || []
    ),
    ...scoreDocsMenu.flatMap(
      (mainMenuItem) =>
        mainMenuItem.submenu?.map((submenuItem) => {
          return { ...submenuItem, space: 'awell-score' }
        }) || []
    ),
  ]

  const indexCurrentPage = subMenus.findIndex((subMenu) => {
    return subMenu.path.includes(currentPageSlug)
  })

  if (indexCurrentPage === -1) return { prev: undefined, next: undefined }

  const filteredSubMenus = subMenus.filter(
    (submenu) => submenu.space === subMenus[indexCurrentPage].space
  )

  const indexCurrentPageInFilteredList = filteredSubMenus.findIndex(
    (subMenu) => {
      return subMenu.path.includes(currentPageSlug)
    }
  )

  const prevItem = filteredSubMenus[indexCurrentPageInFilteredList - 1]
  const nextItem = filteredSubMenus[indexCurrentPageInFilteredList + 1]

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
