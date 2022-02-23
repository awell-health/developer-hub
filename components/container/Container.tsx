import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export const Layout = ({ children, className }: ContainerProps) => {
  return <div className={`w-full px-4 sm:px-8 ${className}`}>{children}</div>
}
