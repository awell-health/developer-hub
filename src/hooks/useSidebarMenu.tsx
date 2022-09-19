import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import {
  scoreDeveloperToolsMenu,
  scoreDocsMenu,
} from '@/config/menus/awell-score'
import { AppContext } from '@/contexts/app/AppContext'
import { MenuItemType, MenuType } from '@/types/menu.types'

interface useSidebarMenuHook {
  menu: MenuType
  isChildActive: (menu: MenuItemType) => boolean
}

export const useSidebarMenu = (): useSidebarMenuHook => {
  const { menu, setMenu } = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes('awell-orchestration')) {
      if (router.asPath.includes('api-reference')) {
        setMenu(orchestrationApiMenu)
      } else if (router.asPath.includes('docs')) {
        setMenu(orchestrationDocsMenu)
      } else if (router.asPath.includes('developer-tools')) {
        setMenu(orchestrationDeveloperToolsMenu)
      } else {
        setMenu([])
      }
    } else {
      if (router.asPath.includes('awell-score')) {
        if (router.asPath.includes('docs')) {
          setMenu(scoreDocsMenu)
        } else if (router.asPath.includes('developer-tools')) {
          setMenu(scoreDeveloperToolsMenu)
        } else {
          setMenu([])
        }
      } else {
        setMenu([])
      }
    }
  })

  const isChildActive = (menuItem: MenuItemType) => {
    if (menuItem?.submenu) {
      const levelOneSubMenuItemsActive = menuItem.submenu.some((subMenuItem) =>
        router.asPath.includes(subMenuItem.path)
      )

      const levelTwoSubMenuItemsActive = menuItem.submenu.some(
        (subMenuItem) => {
          if (subMenuItem?.submenu) {
            return subMenuItem.submenu.some((subMenuItem) =>
              router.asPath.includes(subMenuItem.path)
            )
          }

          return false
        }
      )

      return levelOneSubMenuItemsActive || levelTwoSubMenuItemsActive
    }

    return false
  }

  return { menu, isChildActive }
}
