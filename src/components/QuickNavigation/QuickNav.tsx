import Link from 'next/link'

import { type QuickNavType } from '../../types/menu.types'

export const QuickNav = ({ prev, next }: QuickNavType) => {
  return (
    <div className="text-base leading-6 text-slate-700 font-semibold flex items-center dark:text-slate-200">
      {prev && (
        <Link href={prev.url}>
          <a
            className="group flex items-center hover:text-slate-900 dark:hover:text-white"
            title={prev.label}
            data-track-heap="quick-navigation-prev"
          >
            <svg
              viewBox="0 0 3 6"
              className="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            {prev.label}
          </a>
        </Link>
      )}
      {next && (
        <Link href={next.url}>
          <a
            className="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
            title={next.label}
            data-track-heap="quick-navigation-next"
          >
            {next.label}
            <svg
              viewBox="0 0 3 6"
              className="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </Link>
      )}
    </div>
  )
}
