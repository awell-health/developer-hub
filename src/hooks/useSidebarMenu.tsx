import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import { scoreDocsMenu } from '@/config/menus/awell-score'
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
        setMenu(scoreDocsMenu)
      } else {
        setMenu([])
      }
    }
  })

  const isChildActive = (menu: MenuItemType) => {
    if (menu?.submenu) {
      return menu.submenu.some((subMenuItem) =>
        router.asPath.includes(subMenuItem.path)
      )
    }

    return false
  }

  return { menu, isChildActive }
}
