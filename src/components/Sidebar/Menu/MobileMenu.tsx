import { useContext } from 'react'

import { apiMenu, docsMenu } from '../../../config/menus'
import { AppContext } from '../../../contexts/app/AppContext'
import { Menu } from './Menu'

export const MobileMenu = () => {
  const { isMobileSideMenuOpen, toggleMobileSideMenu } = useContext(AppContext)

  if (!isMobileSideMenuOpen) return null

  return (
    <div
      className="fixed z-50 inset-0 overflow-y-auto lg:hidden"
      id="headlessui-dialog-12"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
        id="headlessui-dialog-overlay-13"
        aria-hidden="true"
      />
      <div className="min-h-full relative bg-white w-80 max-w-[calc(100%-3rem)] p-6 dark:bg-slate-800">
        <button
          type="button"
          onClick={() => toggleMobileSideMenu()}
          className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
          tabIndex={0}
        >
          <span className="sr-only">Close navigation</span>
          <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible">
            <path
              d="M0 0L10 10M10 0L0 10"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
            />
          </svg>
        </button>
        <nav id="nav" className="lg:text-sm lg:leading-6 relative">
          <Menu menu={apiMenu} />
        </nav>
      </div>
    </div>
  )
}
