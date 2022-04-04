import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { apiReferenceStartRoute, docsStartRoute } from '../../../config/routes'
import { type MenuItemType } from '../../../types/menu.types'
import { isMenuItemActive } from '../../../utils/isMenuItemActive'
import { Badge } from '../../Badge'
import {
  CommunityIcon,
  DocumentationIcon,
  PlaygroundIcon,
  ResourcesIcon,
  StudioIcon,
} from '../atoms/icons'

interface MenuProps {
  menu: MenuItemType[]
}

export const Menu = ({ menu }: MenuProps) => {
  const router = useRouter()

  const topLevelActiveClass = 'text-sky-500 dark:text-sky-400'
  const topLevelInactiveClass =
    'text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-30'

  const subLevelActiveClass =
    'text-sky-500 border-current font-semibold dark:text-sky-400'
  const subLevelInactiveClass =
    'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <ul>
      <li>
        <Link href={docsStartRoute}>
          <a
            title="Documentation"
            className={clsx(
              'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold',
              router.pathname.includes('/docs')
                ? topLevelActiveClass
                : topLevelInactiveClass
            )}
          >
            <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500 dark:bg-sky-500 dark:highlight-white/10">
              <DocumentationIcon />
            </div>
            Documentation
          </a>
        </Link>
      </li>
      <li>
        <Link href={apiReferenceStartRoute}>
          <a
            title="API reference"
            className={clsx(
              'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold',
              router.pathname.includes('/api-reference')
                ? topLevelActiveClass
                : topLevelInactiveClass
            )}
          >
            <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-blue-200 dark:group-hover:bg-blue-500 dark:bg-slate-800 dark:highlight-white/5">
              <PlaygroundIcon />
            </div>
            API Reference
          </a>
        </Link>
      </li>
      <li>
        <Link href="/resources">
          <a
            title="Resources"
            className={clsx(
              'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold',
              router.pathname.includes('/resources')
                ? topLevelActiveClass
                : topLevelInactiveClass
            )}
          >
            <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-slate-800 dark:highlight-white/5">
              <ResourcesIcon />
            </div>
            Resources
          </a>
        </Link>
      </li>
      <li>
        <Link href="/support">
          <a
            title="Support"
            className={clsx(
              'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold',
              router.pathname.includes('/support')
                ? topLevelActiveClass
                : topLevelInactiveClass
            )}
          >
            <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-violet-200 dark:group-hover:bg-violet-500 dark:bg-slate-800 dark:highlight-white/5">
              <CommunityIcon />
            </div>
            Support
          </a>
        </Link>
      </li>
      <li>
        <Link href="/awell-studio-docs">
          <a
            title="Awell Studio docs"
            className={clsx(
              'group flex items-center lg:text-sm lg:leading-6 mb-4 font-semibold',
              router.pathname.includes('/awell-studio-docs')
                ? topLevelActiveClass
                : topLevelInactiveClass
            )}
          >
            <div className="mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-purple-200 dark:group-hover:bg-purple-400 dark:bg-slate-800 dark:highlight-white/5">
              <StudioIcon />
            </div>
            Awell Studio docs
          </a>
        </Link>
      </li>
      {menu.map((menuItem, index) => (
        <li className="mt-12 lg:mt-8" key={index}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">
            {menuItem.title}
          </h5>
          {menuItem.submenu && (
            <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
              {menuItem.submenu.map((subMenuItem, index) => (
                <li key={index}>
                  <Link href={subMenuItem.path}>
                    <a
                      title={subMenuItem.title}
                      className={clsx(
                        'flex justify-between block border-l pl-4 -ml-px',
                        isMenuItemActive(subMenuItem.path, router.query.slug)
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
