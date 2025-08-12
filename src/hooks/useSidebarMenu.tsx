import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  extensionsApiMenu,
  extensionsDeveloperToolsMenu,
  extensionsDocsMenu,
} from '@/config/menus/awell-extensions'
import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import { scoreDocsMenu } from '@/config/menus/awell-score'
import { studioDocsMenu } from '@/config/menus/awell-studio'
import { naviDocsMenu } from '@/config/menus/navi'
import { AppContext } from '@/contexts/app/AppContext'
import {
  type LevelOneMenuType,
  type LevelTwoMenuType,
  type MenuType,
} from '@/types/menu.types'
import { Space } from '@/types/space.types'

interface useSidebarMenuHook {
  menu: MenuType
  isChildActive: (menu: LevelOneMenuType | LevelTwoMenuType) => boolean
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
      } else {
        setMenu([])
      }
    } else if (router.asPath.includes(Space.AWELL_EXTENSIONS)) {
      if (router.asPath.includes('api-reference')) {
        setMenu(extensionsApiMenu)
      } else if (router.asPath.includes('docs')) {
        setMenu(extensionsDocsMenu)
      } else if (router.asPath.includes('developer-tools')) {
        setMenu(extensionsDeveloperToolsMenu)
      } else {
        setMenu([])
      }
    } else if (router.asPath.includes(Space.AWELL_STUDIO)) {
      if (router.asPath.includes('docs')) {
        setMenu(studioDocsMenu)
      } else {
        setMenu([])
      }
    } else if (router.asPath.includes(Space.NAVI)) {
      // For Navi, we use a single consolidated docs menu across sections
      // so always show it on Navi pages (docs, tutorials, how-to, explanations, reference, home)
      setMenu(naviDocsMenu)
    } else {
      setMenu([])
    }
  })

  const isChildActive = (menuItem: LevelOneMenuType | LevelTwoMenuType) => {
    if (menuItem?.submenu) {
      const levelOneSubMenuItemsActive = menuItem.submenu.some((subMenuItem) =>
        router.asPath.includes(subMenuItem?.path ?? '')
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
