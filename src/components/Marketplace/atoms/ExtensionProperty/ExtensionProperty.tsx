import { FC, ReactNode } from 'react'

interface ExtensionPropertyProps {
  label: string
  children: ReactNode
}

export const ExtensionProperty: FC<ExtensionPropertyProps> = ({
  label,
  children,
}) => {
  return (
    <dl>
      <dt className="font-semibold text-slate-900 dark:text-slate-200">
        {label}
      </dt>
      <dd className="text-slate-500 dark:text-slate-400">{children}</dd>
    </dl>
  )
}
