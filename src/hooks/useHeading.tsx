import { useRouter } from 'next/router'

import {
  orchestrationApiMenu,
  orchestrationDeveloperToolsMenu,
  orchestrationDocsMenu,
} from '../config/menus/awell-orchestration'
import { scoreDocsMenu } from '../config/menus/awell-score'

export const useHeading = (): { heading: string } => {
  const router = useRouter()
  const menus = [
    ...orchestrationApiMenu,
    ...orchestrationDocsMenu,
    ...orchestrationDeveloperToolsMenu,
    ...scoreDocsMenu,
  ]

  const matchedMenuCategory = menus.find((menuSection) => {
    const subMenu = menuSection?.submenu || []

    return subMenu.some((subMenuItem) =>
      router.asPath.includes(subMenuItem.path)
    )
  })

  if (matchedMenuCategory) return { heading: matchedMenuCategory?.title }

  return { heading: '' }
}
