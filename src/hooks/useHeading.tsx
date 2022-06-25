import { useRouter } from 'next/router'

import {
  orchestrationApiMenu,
  orchestrationDocsMenu,
} from '../config/menus/awell-orchestration'
import { scoreDocsMenu } from '../config/menus/awell-score'

export const useHeading = (): { heading: string } => {
  const router = useRouter()
  const menus = [
    ...orchestrationApiMenu,
    ...orchestrationDocsMenu,
    ...scoreDocsMenu,
  ]

  const matchedMenuCategory = menus.find((menuSection) => {
    const subMenu = menuSection?.submenu || []

    return subMenu.some((subMenuItem) =>
      subMenuItem.path.includes(router.asPath)
    )
  })

  if (matchedMenuCategory) return { heading: matchedMenuCategory?.title }

  return { heading: '' }
}
