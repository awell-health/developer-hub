import { MenuItemType } from '../../types/menu.types'
import { SearchButton } from './atoms/SearchButton'
import { Menu } from './Menu'

export const Sidebar = ({ menuItems }: { menuItems?: MenuItemType[]}) => {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav id="nav" className="relative lg:text-sm lg:leading-6">
        <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 bg-white dark:bg-slate-900" />
          <div className="relative bg-white pointer-events-auto dark:bg-slate-900">
            <SearchButton />
          </div>
          <div className="h-8 bg-gradient-to-b from-white dark:from-slate-900" />
        </div>
        <Menu menuItems={menuItems} />
      </nav>
    </aside>
  )
}
