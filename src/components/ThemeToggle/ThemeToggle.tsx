import { useContext } from 'react'

import { AppContext } from '../../contexts/app/AppContext'
import { MoonIcon, SunIcon } from './icons'

export const ThemeToggle = () => {
  const { toggleTheme, theme } = useContext(AppContext)

  return (
    <>
      <span
        className="dark:hidden cursor-pointer"
        onClick={() => toggleTheme()}
      >
        <SunIcon
          className="w-6 h-6"
          selected={theme === 'light' ? true : false}
        />
      </span>
      <span
        className="hidden dark:inline cursor-pointer"
        onClick={() => toggleTheme()}
      >
        <MoonIcon
          className="w-6 h-6"
          selected={theme === 'dark' ? true : false}
        />
      </span>
    </>
  )
}
