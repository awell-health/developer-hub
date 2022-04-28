import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { apiMenu, docsMenu } from '../../../config/menus'
import { apiReferenceStartRoute, docsStartRoute } from '../../../config/routes'
import { AppContext } from '../../../contexts/app/AppContext'
import { MenuItemType } from '../../../types/menu.types'
import { isMenuItemActive } from '../../../utils/isMenuItemActive'
import { Badge } from '../../Badge'
import {
  CommunityIcon,
  DocumentationIcon,
  PlaygroundIcon,
  PlayIcon,
  StudioIcon,
} from '../atoms/icons'
import { MainMenuItem } from './atoms/MainMenuItem'

export const Menu = ({ menuItems = []}: { menuItems?: MenuItemType[] }) => {
  const router = useRouter()
  const { menu, setMenu } = useContext(AppContext)

  useEffect(() => {
    if (router.asPath.includes('api-reference')) {
      setMenu([...apiMenu, ...menuItems])
    } else {
      setMenu(docsMenu)
    }
  })

  const subLevelActiveClass =
    'text-sky-500 border-current font-semibold dark:text-sky-400'
  const subLevelInactiveClass =
    'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <ul>
      <li>
        <MainMenuItem
          route={docsStartRoute}
          active={router.pathname.includes('/docs') || router.pathname === '/'}
          label="Documentation"
          icon={DocumentationIcon}
        />
      </li>
      <li>
        <MainMenuItem
          route={apiReferenceStartRoute}
          active={router.pathname.includes('/api-reference')}
          label="API Reference"
          icon={PlaygroundIcon}
        />
      </li>
      <li>
        <MainMenuItem
          route="/playground"
          active={router.pathname.includes('/playground')}
          label="Playground"
          icon={PlayIcon}
          openInNewTab={true}
        />
      </li>
      <li>
        <MainMenuItem
          route="/support"
          active={router.pathname.includes('/support')}
          label="Support"
          icon={CommunityIcon}
        />
      </li>
      <li>
        <MainMenuItem
          route="/awell-studio-docs"
          active={router.pathname.includes('/awell-studio-docs')}
          label="Awell Studio Docs"
          icon={StudioIcon}
        />
      </li>
      {menu.map((menuItem, index) => (
        <li className="mt-12 lg:mt-8" key={index}>
          <h5 className="mb-8 font-semibold lg:mb-3 text-slate-900 dark:text-slate-200">
            {menuItem.title}
          </h5>
          {menuItem.submenu && (
            <ul className="space-y-6 border-l lg:space-y-2 border-slate-100 dark:border-slate-700 lg:dark:border-slate-800">
              {menuItem.submenu.map((subMenuItem, index) => (
                <li key={index}>
                  <Link href={subMenuItem.path}>
                    <a
                      title={subMenuItem.title}
                      target={subMenuItem.openInNewTab ? '_blank' : ''}
                      className={clsx(
                        'text-lg lg:text-sm lg:leading-6 flex justify-between border-l pl-4 -ml-px',
                        isMenuItemActive(
                          subMenuItem.path,
                          router.query.slug
                            ? router.query.slug
                            : router.pathname
                        )
                          ? subLevelActiveClass
                          : subLevelInactiveClass
                      )}
                    >
                      <span>{subMenuItem.title}</span>
                      <div className="flex items-center">
                        {subMenuItem.badge && (
                          <Badge size="sm" color={subMenuItem.badge.color}>
                            {subMenuItem.badge.label}
                          </Badge>
                        )}
                      </div>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
