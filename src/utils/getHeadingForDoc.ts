import { apiMenu, docsMenu } from '../config/menus'

export const getHeadingForDoc = (slug: string): string => {
  const menus = [...apiMenu, ...docsMenu]

  const matchedMenuCategory = menus.find((menuSection) => {
    const subMenu = menuSection?.submenu || []

    return subMenu.some((subMenuItem) => subMenuItem.path.includes(slug))
  })

  if (matchedMenuCategory) return matchedMenuCategory?.title

  return ''
}
