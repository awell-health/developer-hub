import Link from 'next/link'
import { ReactNode } from 'react'

type CardProps = {
  title: string
  href: string
  icon?: string
  children: ReactNode
}

export const Card = ({ title, href, children }: CardProps) => {
  return (
    <Link
      href={href}
      className="block group relative rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-400 dark:hover:border-sky-400"
    >
      <h3 className="font-semibold text-slate-900 dark:text-slate-100 mb-1">
        {title}
      </h3>
      <div className="text-slate-600 dark:text-slate-400">{children}</div>
    </Link>
  )
}
