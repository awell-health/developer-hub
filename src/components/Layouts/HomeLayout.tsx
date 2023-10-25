import { ReactNode } from 'react'

import { Header } from '../Header'

interface LayoutProps {
  children: ReactNode
}

export const HomeLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
