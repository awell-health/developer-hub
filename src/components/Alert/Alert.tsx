import { ReactNode } from 'react'

import { type AlertType } from './alert.types'
import { Info, Warning } from './icons'

interface AlertProps {
  type: AlertType
  title: string
  children: ReactNode
}

export const Alert = ({ type, title, children }: AlertProps) => {
  if (type === 'info') {
    return (
      <div className="alert flex rounded-3xl p-6 bg-sky-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10">
        <Info />
        <div className="ml-4 flex-auto">
          <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
            {title}
          </p>
          <div className="prose mt-2.5 text-sky-800 [--tw-prose-background:theme(colors.sky.50)] prose-a:text-sky-900 prose-code:text-sky-900 dark:text-slate-300 dark:prose-code:text-slate-300">
            {children}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="alert my-8 flex rounded-3xl p-6 bg-amber-50 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10">
      <Warning />
      <div className="ml-4 flex-auto">
        <p className="m-0 font-display text-xl text-amber-900 dark:text-amber-500">
          {title}
        </p>
        <div className="prose mt-2.5 text-amber-800 [--tw-prose-underline:theme(colors.amber.400)] [--tw-prose-background:theme(colors.amber.50)] prose-a:text-amber-900 prose-code:text-amber-900 dark:text-slate-300 dark:[--tw-prose-underline:theme(colors.sky.700)] dark:prose-code:text-slate-300">
          {children}
        </div>
      </div>
    </div>
  )
}
