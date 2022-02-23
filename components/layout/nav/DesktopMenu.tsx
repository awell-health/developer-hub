import Link from 'next/link'

import type { MenuItemType } from '../../../config/menu'

interface DesktopMenuProps {
  menu: MenuItemType[]
}

export const DesktopMenu = ({ menu }: DesktopMenuProps) => {
  return (
    <ul className="flex md:items-center space-y-6 md:space-y-0">
      {menu.map((menuItem, index) => (
        <li key={index}>
          <Link href={menuItem.path ? menuItem.path : ''}>
            <a
              title={menuItem.title}
              className="text-base text-gray-800 font-semibold px-4 hover:text-blue-700 group flex items-center"
            >
              {menuItem.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 h-5 group-hover:rotate-180 ml-2 transition-transform"
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
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
