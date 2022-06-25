import { Menu } from './Menu'

export const Sidebar = () => {
  return (
    <aside className="hidden lg:block fixed z-20 inset-0 top-[6.5rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
      <nav id="nav" className="lg:text-sm lg:leading-6 relative">
        <div className="sticky top-0 -ml-0.5 pointer-events-none">
          <div className="h-10 bg-white dark:bg-slate-900" />
        </div>
        <Menu />
      </nav>
    </aside>
  )
}
