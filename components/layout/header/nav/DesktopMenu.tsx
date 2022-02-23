import type { MenuItemType } from '../../../../content/menu'
import { Tooltip } from '../../../tooltip'

const navStyles =
  'text-base font-bold inline-block h-20 px-8 hover:text-pink-500'

interface DesktopMenuProps {
  menu: MenuItemType[]
}

export const DesktopMenu = ({ menu }: DesktopMenuProps) => {
  return (
    <ul className="font-mono font-bold text-sm flex md:items-center space-y-6 md:space-y-0">
      {menu.map((menuItem, index) => (
        <li key={index}>
          <a href={menuItem.url} title={menuItem.text} className={navStyles}>
            <span className="text-lg md:flex md:h-full items-center group-hover:text-pink">
              {menuItem.text}
            </span>
          </a>
        </li>
      ))}
      <li className="md:ml-4">
        <Tooltip text="Check me on Github" direction="left">
          <a
            href="https://github.com/nckhell/"
            target="_blank"
            className="flex items-center mt-1 transform -rotate-6 hover:rotate-6"
            rel="noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              className="h-6 w-6"
            >
              <g transform="matrix(0.6666666666666666,0,0,0.6666666666666666,0,0)">
                <path
                  d="M12,.28A12,12,0,0,0,8.28,23.69l.29,0a1,1,0,0,0,1.06-1.06v-.21c0-.17,0-.4,0-1.09A.5.5,0,0,0,9.43,21a.5.5,0,0,0-.42-.1c-2.68.58-3.25-1.1-3.29-1.21A4.64,4.64,0,0,0,4,17.5a1.16,1.16,0,0,0-.15-.11.63.63,0,0,1,.38-.07,1.47,1.47,0,0,1,1.15.88,3,3,0,0,0,4,1.16A.5.5,0,0,0,9.67,19a2,2,0,0,1,.56-1.23.5.5,0,0,0-.27-.87c-2.37-.27-4.79-1.1-4.79-5.19A4,4,0,0,1,6.22,8.93a.5.5,0,0,0,.09-.53A3.52,3.52,0,0,1,6.32,6,5.54,5.54,0,0,1,8.84,7.15a.49.49,0,0,0,.42.07A10.61,10.61,0,0,1,12,6.85a10.47,10.47,0,0,1,2.75.37.49.49,0,0,0,.41-.07A5.59,5.59,0,0,1,17.68,6a3.57,3.57,0,0,1,0,2.38.5.5,0,0,0,.09.53,4,4,0,0,1,1.05,2.75c0,4.09-2.43,4.91-4.81,5.18a.5.5,0,0,0-.27.88,2.2,2.2,0,0,1,.61,1.74v3.18a1.06,1.06,0,0,0,.36.83,1.2,1.2,0,0,0,1.06.19A12,12,0,0,0,12,.28Z"
                  fill="currentColor"
                  stroke="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                ></path>
              </g>
            </svg>
          </a>
        </Tooltip>
      </li>
    </ul>
  )
}
