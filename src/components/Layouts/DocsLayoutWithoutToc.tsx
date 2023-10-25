import { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

interface LayoutProps {
  withSidebar?: boolean
  children: ReactNode
}

export const DocsLayoutWithoutToc = ({
  withSidebar = true,
  children,
}: LayoutProps) => {
  if (withSidebar) {
    return (
      <>
        <Header />
        <div className="container relative mx-auto flex">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="sticky top-[4.5rem] -ml-0.5 h-[calc(100vh-4.5rem)] overflow-y-auto py-16 pl-0.5">
              <div className="absolute top-16 bottom-0 right-0 hidden h-12 w-px bg-gradient-to-t from-slate-800 dark:block" />
              <div className="absolute top-28 bottom-0 right-0 hidden w-px bg-slate-800 dark:block" />
              <Sidebar />
            </div>
          </div>
          <div className="w-full lg:pl-16">
            <div className="min-w-0 max-w-7xl flex-auto mx-auto py-16">
              <div className="max-w-6xl">{children}</div>
            </div>
          </div>
        </div>
        <div className="px-4 z-30 relative">
          <Footer />
        </div>
      </>
    )
  }

  return (
    <>
      <Header />
      <div className="container relative mx-auto flex">
        <div className="w-full lg:pl-16">
          <div className="min-w-0 max-w-7xl flex-auto mx-auto py-16">
            <div className="max-w-6xl">{children}</div>
          </div>
        </div>
      </div>
    </>
  )
}
