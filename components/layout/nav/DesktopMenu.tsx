import Link from 'next/link'

import { MenuItemType } from '../../../config/menu'

interface DesktopMenuProps {
  menu: MenuItemType[]
}

export const DesktopMenu = ({ menu }: DesktopMenuProps) => {
  return (
    <ul className="flex md:items-center space-y-6 md:space-y-0">
      {menu.map((menuItem, index) => (
        <li key={index} className="group">
          <Link href={menuItem.path ? menuItem.path : '#'}>
            <a
              title={menuItem.title}
              className="text-base h-16 text-gray-800 px-4 group-hover:text-blue-700 flex items-center"
            >
              {menuItem.title}
              {!menuItem.path && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 h-4 group-hover:rotate-180 ml-2 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </a>
          </Link>
          {menuItem.subMenu && (
            <div className="bg-white top-16 hidden absolute top-0 border border-gray-200 p-6 sm:px-8 rounded drop-shadow-sm group-hover:block">
              <ul>
                {menuItem.subMenu.map((subMenuItem, index) => (
                  <li key={index}>{subMenuItem.title}</li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
