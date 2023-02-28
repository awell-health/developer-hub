import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import {
  pluginsApiMenu,
  pluginsDeveloperToolsMenu,
  pluginsDocsMenu,
} from '@/config/menus/awell-plugins'
import {
  scoreDeveloperToolsMenu,
  scoreDocsMenu,
} from '@/config/menus/awell-score'
import { AppContext } from '@/contexts/app/AppContext'
import { MenuItemType, MenuType } from '@/types/menu.types'
import { Space } from '@/types/space.types'

interface useSidebarMenuHook {
  menu: MenuType
  isChildActive: (menu: MenuItemType) => boolean
}

export const useSidebarMenu = (): useSidebarMenuHook => {
  const { menu, setMenu } = useContext(AppContext)
  const router = useRouter()

  useEffect(() => {
    if (router.asPath.includes(Space.AWELL_ORCHESTRATION)) {
      if (router.asPath.includes('api-reference')) {
        setMenu(orchestrationApiMenu)
      } else if (router.asPath.includes('docs')) {
        setMenu(orchestrationDocsMenu)
      } else if (router.asPath.includes('developer-tools')) {
        setMenu(orchestrationDeveloperToolsMenu)
      } else {
        setMenu([])
      }
    } else if (router.asPath.includes(Space.AWELL_SCORE)) {
      if (router.asPath.includes('docs')) {
        setMenu(scoreDocsMenu)
      } else if (router.asPath.includes('developer-tools')) {
        setMenu(scoreDeveloperToolsMenu)
      } else {
        setMenu([])
      }
    } else if (router.asPath.includes(Space.AWELL_PLUGINS)) {
      if (router.asPath.includes('api-reference')) {
        setMenu(pluginsApiMenu)
      } else if (router.asPath.includes('docs')) {
        setMenu(pluginsDocsMenu)
      } else if (router.asPath.includes('developer-tools')) {
        setMenu(pluginsDeveloperToolsMenu)
      } else {
        setMenu([])
      }
    } else {
      setMenu([])
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
