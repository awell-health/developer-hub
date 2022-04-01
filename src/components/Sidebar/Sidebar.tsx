import { type MenuItemType } from '../../types/menu.types'
import { SearchButton } from './atoms/SearchButton'
import { Menu } from './Menu'

interface SideBarProps {
  menu: MenuItemType[]
}

export const Sidebar = ({ menu }: SideBarProps) => {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav id="nav" className="lg:text-sm lg:leading-6 relative">
        <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 bg-white dark:bg-slate-900" />
          <div className="bg-white dark:bg-slate-900 relative pointer-events-auto">
            <SearchButton />
          </div>
          <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900" />
        </div>
        <Menu menu={menu} />
      </nav>
    </aside>
  )
}
