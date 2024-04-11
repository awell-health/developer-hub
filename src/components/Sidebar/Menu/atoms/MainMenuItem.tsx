import clsx from 'clsx'
import Link from 'next/link'
import { ReactNode } from 'react'

interface MainMenuItemProps {
  route: string
  active: boolean
  label: string
  icon: ReactNode
  openInNewTab?: boolean
}
export const MainMenuItem = ({
  route,
  active,
  label,
  icon: Icon,
  openInNewTab,
}: MainMenuItemProps) => {
  return (
    <Link
      href={route}
      title={label}
      target={openInNewTab ? '_blank' : ''}
      className={clsx(
        'pb-2 lg:pb-0 text-lg lg:text-base group flex items-center lg:leading-6 mb-4 lg:mb-5 font-semibold',
        active
          ? 'text-sky-500 dark:text-sky-400'
          : 'text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-30'
      )}
    >
      <div
        className={clsx(
          `mr-4 rounded-md ring-1 ring-slate-900/5 shadow-sm group-hover:shadow group-hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:group-hover:shadow-none dark:group-hover:highlight-white/10 group-hover:shadow-sky-200 dark:group-hover:bg-sky-500`,
          active
            ? `dark:bg-sky-500`
            : 'dark:bg-slate-700 lg:dark:bg-slate-800 dark:highlight-white/5'
        )}
      >
        {/* @ts-expect-error not sure how to type this*/}
        <Icon active={active} />
      </div>
      {label}
    </Link>
  )
}
