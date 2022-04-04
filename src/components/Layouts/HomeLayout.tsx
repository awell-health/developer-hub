import { ReactNode } from 'react'

// import { Footer } from '../Footer'
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
