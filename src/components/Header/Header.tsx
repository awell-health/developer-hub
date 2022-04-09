import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'

import awellLogo from '../../../public/awell-full-logo.svg'
import { nav } from '../../config/nav'
import { AppContext } from '../../contexts/app/AppContext'
import { useBreadcrumb } from '../../hooks/useBreadcrumb'
import { isMenuItemActive } from '../../utils/isMenuItemActive'
import { Badge } from '../Badge'
import { ThemeToggle } from '../ThemeToggle'

const MobileMainMenu = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="ml-2 -my-1 lg:hidden">
      <button
        type="button"
        onClick={() => onClick()}
        className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
      >
        <span className="sr-only">Navigation</span>
        <svg width={24} height={24} fill="none" aria-hidden="true">
          <path
            d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  )
}

export const Header = () => {
  const router = useRouter()
  const breadcrumb = useBreadcrumb(router.asPath)
  const { toggleMobileSideMenu, toggleMobileMainMenu, toggleIsSearching } =
    useContext(AppContext)

  return (
    <>
      <div className="sticky top-0 z-40 w-full backdrop-blur flex-none lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 bg-white supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75">
        <div className="container">
          <div className="py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
            <div className="relative flex items-center">
              <Link href="/">
                <a
                  className="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto"
                  title="Awell Health Developers"
                >
                  <span className="sr-only">Awell Health Developers</span>
                  <div className="w-28 leading-none	">
                    <Image src={awellLogo} alt="Awell Health" />
                  </div>
                </a>
              </Link>
              <Badge color="sky">Developers</Badge>
              <div className="relative hidden lg:flex items-center ml-auto">
                <nav className="text-sm leading-6 font-semibold text-slate-700 dark:text-slate-200">
                  <ul className="flex space-x-8">
                    {nav.map((navItem, index) => (
                      <li key={index}>
                        <Link href={navItem.path}>
                          <a
                            className={
                              isMenuItemActive(navItem.slug, router.pathname) ||
                              (router.pathname === '/' &&
                                navItem.slug === 'docs')
                                ? 'text-sky-500'
                                : 'hover:text-sky-500 dark:hover:text-sky-400'
                            }
                            title={navItem.label}
                          >
                            {navItem.label}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                  <label className="sr-only" id="headlessui-listbox-label-18">
                    Theme
                  </label>
                  <ThemeToggle />
                  <a
                    href="https://github.com/nckhell/awell-developers"
                    target="_blank"
                    className="ml-6 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300"
                    rel="noreferrer"
                    data-track-heap="open-github-repo"
                  >
                    <span className="sr-only">Awell Developers on GitHub</span>
                    <svg
                      viewBox="0 0 16 16"
                      className="w-5 h-5"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => toggleIsSearching()}
                className="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span className="sr-only">Search</span>
                <svg
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="m19 19-3.5-3.5" />
                  <circle cx={11} cy={11} r={6} />
                </svg>
              </button>
              <MobileMainMenu onClick={toggleMobileMainMenu} />
            </div>
          </div>
          <div className="flex items-center p-4 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
            <button
              type="button"
              onClick={() => toggleMobileSideMenu()}
              className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="sr-only">Navigation</span>
              <svg width={24} height={24}>
                <path
                  d="M5 6h14M5 12h14M5 18h14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            {breadcrumb && (
              <ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
                {breadcrumb.map((breadcrumbItem, index) => (
                  <li
                    key={index}
                    className={`flex items-center ${
                      breadcrumb.length - 1 === index
                        ? 'font-semibold text-slate-900 truncate dark:text-slate-200'
                        : ''
                    }`}
                  >
                    {breadcrumbItem.label}
                    {breadcrumb.length - 1 !== index && (
                      <svg
                        width={3}
                        height={6}
                        aria-hidden="true"
                        className="mx-3 overflow-visible text-slate-400"
                      >
                        <path
                          d="M0 0L3 3L0 6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
