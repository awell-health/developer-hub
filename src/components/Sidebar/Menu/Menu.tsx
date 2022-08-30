import { Disclosure } from '@headlessui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'

import { useSidebarMenu } from '@/hooks/useSidebarMenu'

import { isMenuItemActive } from '../../../utils/isMenuItemActive'
import { Badge } from '../../Badge'

export const Menu = () => {
  const router = useRouter()
  const { menu, isChildActive } = useSidebarMenu()

  const subLevelActiveClass =
    'text-blue-600 border-current font-semibold dark:text-sky-400'
  const subLevelInactiveClass =
    'border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300'

  return (
    <>
      <div className="flex-grow flex flex-col">
        <nav className="flex-1 space-y-3" aria-label="Sidebar">
          {menu.map((menuItem, i) =>
            !menuItem.submenu ? (
              <div key={i}>
                <a
                  href={menuItem.path}
                  className={clsx(
                    isMenuItemActive(
                      menuItem?.path || '',
                      router.pathname,
                      router.query.slug ? router.query.slug : router.pathname
                    )
                      ? 'font-bold'
                      : 'font-semibold',
                    'text-slate-8000 dark:text-slate-200 group w-full flex items-center ml-2.5 pl-2 pr-2 text-base rounded-md'
                  )}
                >
                  {menuItem.title}
                </a>
              </div>
            ) : (
              <Disclosure
                as="div"
                defaultOpen={isChildActive(menuItem)}
                key={menuItem.title}
                className="space-y-1"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        isChildActive(menuItem) ? 'font-bold' : 'font-semibold',
                        'dark:text-slate-200 group w-full flex items-center pr-2 text-left text-base rounded-md'
                      )}
                    >
                      <svg
                        aria-hidden="true"
                        className={clsx(
                          open ? 'text-slate-400 rotate-90' : 'text-slate-400',
                          'mr-2 flex-shrink-0 h-2.5 w-2.5 transform group-hover:text-slate-400 transition-colors ease-in-out duration-150'
                        )}
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="m6.689 14.709 6.021-6.01a.986.986 0 0 0 0-1.397l-6.02-6.01C6.066.668 5 1.11 5 1.99v12.02c0 .88 1.066 1.32 1.689.699Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      {menuItem.title}
                    </Disclosure.Button>
                    {open && (
                      <Disclosure.Panel static className="pl-2.5 ml-2">
                        <ul className="space-y-2 lg:space-y-4 mt-2 lg:mt-4 border-l border-slate-200 dark:border-slate-700 lg:dark:border-slate-800">
                          {menuItem?.submenu &&
                            menuItem.submenu.map((subMenuItem) => (
                              <li key={subMenuItem.title}>
                                <a
                                  href={subMenuItem.path}
                                  className={clsx(
                                    isMenuItemActive(
                                      subMenuItem.path,
                                      router.pathname,
                                      router.query.slug
                                        ? router.query.slug
                                        : router.pathname
                                    )
                                      ? subLevelActiveClass
                                      : subLevelInactiveClass,
                                    'text-base flex justify-between block border-l pl-4 -ml-px'
                                  )}
                                >
                                  {subMenuItem.title}
                                  <div className="flex items-center">
                                    {subMenuItem.badge && (
                                      <Badge
                                        size="sm"
                                        color={subMenuItem.badge.color}
                                      >
                                        {subMenuItem.badge.label}
                                      </Badge>
                                    )}
                                  </div>
                                </a>
                              </li>
                            ))}
                        </ul>
                      </Disclosure.Panel>
                    )}
                  </>
                )}
              </Disclosure>
            )
          )}
        </nav>
      </div>
    </>
  )
}
