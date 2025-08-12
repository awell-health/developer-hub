import clsx from 'clsx'
import { ReactNode } from 'react'

type ColumnsProps = {
  cols?: number
  children: ReactNode
  className?: string
}

export const Columns = ({ cols = 2, children, className }: ColumnsProps) => {
  const gridColsClass =
    cols === 1
      ? 'grid-cols-1'
      : cols === 2
      ? 'grid-cols-1 md:grid-cols-2'
      : cols === 3
      ? 'grid-cols-1 md:grid-cols-3'
      : 'grid-cols-1 md:grid-cols-2'

  return (
    <div className={clsx('grid gap-6', gridColsClass, className)}>
      {children}
    </div>
  )
}
