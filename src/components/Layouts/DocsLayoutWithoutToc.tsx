import { ReactNode } from 'react'

import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

interface LayoutProps {
  children: ReactNode
}

export const DocsLayoutWithoutToc = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8  mb-32">
          <Sidebar />
          <div className="lg:pl-[19.5rem]">
            <div className="max-w-3xl mx-auto relative z-20 pt-10 xl:max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
