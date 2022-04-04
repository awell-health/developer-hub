import { ReactNode } from 'react'

import { type MenuItemType } from '../../types/menu.types'
import { Header } from '../Header'
import { Sidebar } from '../Sidebar'

interface LayoutProps {
  children: ReactNode
  menu: MenuItemType[]
}

export const DocsLayoutWithoutToc = ({ menu, children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8  mb-32">
          <Sidebar menu={menu} />
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
