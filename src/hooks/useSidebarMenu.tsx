import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '@/config/menus/awell-orchestration'
import { scoreDocsMenu } from '@/config/menus/awell-score'
import { AppContext } from '@/contexts/app/AppContext'
import { MenuType } from '@/types/menu.types'

export const useSidebarMenu = (): { menu: MenuType } => {
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

  return { menu }
}
