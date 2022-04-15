import { apiMenu, docsMenu } from '../config/menus'

export const useHeading = (slug: string): { heading: string } => {
  const menus = [...apiMenu, ...docsMenu]

  const matchedMenuCategory = menus.find((menuSection) => {
    const subMenu = menuSection?.submenu || []

    return subMenu.some((subMenuItem) => subMenuItem.path.includes(slug))
  })

  if (matchedMenuCategory) return { heading: matchedMenuCategory?.title }

  return { heading: '' }
}
