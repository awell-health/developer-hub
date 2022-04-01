import { Fragment } from 'react'

import { useTheme } from '../../hooks/useTheme'
import { MoonIcon, SunIcon } from './icons'

export const ThemeToggle = () => {
  const { theme, changeTheme } = useTheme()

  return (
    <>
      <span
        className="dark:hidden cursor-pointer"
        onClick={() => changeTheme()}
      >
        <SunIcon
          className="w-6 h-6"
          selected={theme === 'light' ? true : false}
        />
      </span>
      <span
        className="hidden dark:inline cursor-pointer"
        onClick={() => changeTheme()}
      >
        <MoonIcon
          className="w-6 h-6"
          selected={theme === 'dark' ? true : false}
        />
      </span>
    </>
  )
}
