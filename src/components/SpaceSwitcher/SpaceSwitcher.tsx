import { Menu } from '@headlessui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useContext } from 'react'

import { spaces } from '@/config/spaces'
import { AppContext } from '@/contexts/app/AppContext'

export const SpaceSwitcher = () => {
  const { space } = useContext(AppContext)

  const currentSpaceLabel = space
    ? spaces.find((s) => s.path.includes(space))?.label || ''
    : 'Choose doc space'

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="text-xs leading-5 font-semibold bg-slate-400/10 px-2.5 py-0.5 rounded-full flex items-center space-x-2 hover:bg-slate-400/20 dark:highlight-white/5">
        {currentSpaceLabel}
        <svg
          width="6"
          height="3"
          className="ml-2 overflow-visible"
          aria-hidden="true"
        >
          <path
            d="M0 0L3 3L6 0"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </Menu.Button>
      <Menu.Items className="absolute top-full mt-1 py-2 w-52 rounded-lg bg-white shadow ring-1 ring-slate-900/5 text-sm leading-6 font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:highlight-white/5">
        {spaces
          .filter((space) => space.active !== false)
          .map((s) => (
            <Menu.Item key={s.path} disabled={s.path.includes(space ?? '')}>
              {() => (
                <Link
                  href={s.path}
                  className={clsx(
                    'w-full flex items-center justify-between px-3 py-1',
                    s.path.includes(space ?? 'no-check') &&
                      'text-blue-600 dark:text-sky-400'
                  )}
                >
                  {s.label}
                  {s.path.includes(space ?? 'no-check') && (
                    <svg width="24" height="24" fill="none" aria-hidden="true">
                      <path
                        d="m7.75 12.75 2.25 2.5 6.25-6.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </Link>
              )}
            </Menu.Item>
          ))}
      </Menu.Items>
    </Menu>
  )
}
