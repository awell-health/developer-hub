import Link from 'next/link'
import { useContext } from 'react'

import { nav } from '../../config/nav'
import { AppContext } from '../../contexts/app/AppContext'

export const MobileNav = () => {
  const { isMobileMainMenuOpen, toggleMobileMainMenu } = useContext(AppContext)

  if (!isMobileMainMenuOpen) return null

  return (
    <div
      className="fixed z-50 inset-0 lg:hidden"
      id="headlessui-dialog-11"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        id="headlessui-dialog-overlay-16"
        aria-hidden="true"
      ></div>
      <div className="fixed top-4 right-4 w-full max-w-xs bg-white rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
        <button
          type="button"
          onClick={() => toggleMobileMainMenu()}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          tabIndex={0}
        >
          <span className="sr-only">Close navigation</span>
          <svg
            viewBox="0 0 10 10"
            className="w-2.5 h-2.5 overflow-visible"
            aria-hidden="true"
          >
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
        <ul className="space-y-6">
          {nav.map((navItem, index) => (
            <li key={index}>
              <Link href={navItem.path}>
                <a
                  className="hover:text-sky-500 dark:hover:text-sky-400"
                  title={navItem.label}
                >
                  {navItem.label}
                </a>
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/nckhell/awell-developers"
              target="_blank"
              className="hover:text-sky-500 dark:hover:text-sky-400"
              rel="noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
