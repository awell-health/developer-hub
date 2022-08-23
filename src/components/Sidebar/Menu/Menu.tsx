import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useSidebarMenu } from '@/hooks/useSidebarMenu'

import { isMenuItemActive } from '../../../utils/isMenuItemActive'
import { Badge } from '../../Badge'

export const Menu = () => {
  const router = useRouter()
  const { menu } = useSidebarMenu()

  const subLevelActiveClass =
    'text-sky-500 border-current font-semibold dark:text-sky-400'
  const subLevelInactiveClass =
    'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <ul>
      {menu.map((menuItem, index) => (
        <li className="mb-12 lg:mb-8" key={index}>
          <h5 className="mb-8 lg:mb-3 font-semibold text-base text-slate-900 dark:text-slate-200">
            {menuItem.title}
          </h5>
          {menuItem.submenu && (
            <ul className="space-y-2 lg:space-y-4 mt-2 lg:mt-4 border-l border-slate-200 dark:border-slate-700 lg:dark:border-slate-800">
              {menuItem.submenu.map((subMenuItem, index) => (
                <li key={index}>
                  <Link href={subMenuItem.path}>
                    <a
                      title={subMenuItem.title}
                      target={subMenuItem.openInNewTab ? '_blank' : ''}
                      className={clsx(
                        'text-lg lg:text-base lg:leading-6 flex justify-between block border-l pl-4 -ml-px',
                        isMenuItemActive(
                          subMenuItem.path,
                          router.pathname,
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
