import { useRouter } from 'next/router'

import { useMenus } from './useMenus'

export const useHeading = (): { heading: string } => {
  const router = useRouter()
  const { menus } = useMenus()

  const matchedMenuCategory = menus.find((menuItem) => {
    return router.asPath.includes(menuItem.path || '')
  })

  if (matchedMenuCategory)
    return {
      heading: matchedMenuCategory?.parentTitle || matchedMenuCategory.title,
    }

  return { heading: '' }
}
