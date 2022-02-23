import type { MenuItemType } from '../../../config/menu'

const navStyles = 'text-xl font-bold py-3 block hover:text-pink-500 underline'

interface DesktopMenuProps {
  menu: MenuItemType[]
}

export const MobileMenu = ({ menu }: DesktopMenuProps) => {
  return (
    <ul className="font-mono font-bold text-sm py-4">
      {menu.map((menuItem, index) => (
        <li key={index}>
          <a href={menuItem.path} title={menuItem.title} className={navStyles}>
            <span className="md:flex md:h-full items-center group-hover:text-pink">
              {menuItem.title}
            </span>
          </a>
        </li>
      ))}
    </ul>
  )
}
