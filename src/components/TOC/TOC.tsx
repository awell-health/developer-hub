import Link from 'next/link'

import { type TableOfContentsType } from '../../types/toc.types'

interface TOCProps {
  toc: TableOfContentsType
}

export const TOC = ({ toc }: TOCProps) => {
  if (toc.length === 0) return null

  return (
    <ul className="text-slate-700 text-sm leading-6">
      {toc.map((tocItem, index) => {
        switch (tocItem.level) {
          case 'h2': {
            return (
              <li key={index}>
                <Link href={tocItem.link}>
                  <a
                    title={tocItem.title}
                    className="block py-1 font-medium text-slate-900 dark:text-slate-300"
                  >
                    {tocItem.title}
                  </a>
                </Link>
              </li>
            )
          }
          case 'h3': {
            return (
              <li className="ml-4" key={index}>
                <Link href={tocItem.link}>
                  <a
                    title={tocItem.title}
                    className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <svg
                      width={3}
                      height={24}
                      viewBox="0 -9 3 24"
                      className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {tocItem.title}
                  </a>
                </Link>
              </li>
            )
          }
          case 'h4': {
            return (
              <li className="ml-8" key={index}>
                <Link href={tocItem.link}>
                  <a
                    title={tocItem.title}
                    className="group flex items-start py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                  >
                    <svg
                      width={3}
                      height={24}
                      viewBox="0 -9 3 24"
                      className="mr-2 text-slate-400 overflow-visible group-hover:text-slate-600 dark:text-slate-600 dark:group-hover:text-slate-500"
                    >
                      <path
                        d="M0 0L3 3L0 6"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                    {tocItem.title}
                  </a>
                </Link>
              </li>
            )
          }
        }
      })}
    </ul>
  )
}
