import { createContext, ReactNode, useEffect, useRef, useState } from 'react'

import { type ThemeSettingType, type ThemeType } from '../types/theme.types'
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect'

interface ThemeContextStateType {
  theme: ThemeType
  themeSetting: ThemeSettingType
  setThemeSetting: (theme: ThemeSettingType) => void
}

const initialState: ThemeContextStateType = {
  theme: 'light',
  themeSetting: 'system',
  setThemeSetting: () => null,
}

export const ThemeContext = createContext<ThemeContextStateType>(initialState)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeSetting, setThemeSetting] = useState<ThemeSettingType>(
    initialState.themeSetting
  )
  const [theme, setTheme] = useState<ThemeType>(initialState.theme)

  const initial = useRef(true)

  const update = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark', 'changing-theme')
      setTheme('dark')
    } else {
      document.documentElement.classList.remove('dark', 'changing-theme')
      setTheme('light')
    }
    window.setTimeout(() => {
      document.documentElement.classList.remove('changing-theme')
    })
  }

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme
    if (theme === 'light' || theme === 'dark') {
      setThemeSetting(theme)
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    if (themeSetting === 'system') {
      localStorage.removeItem('theme')
    } else if (themeSetting === 'light' || themeSetting === 'dark') {
      localStorage.theme = themeSetting
    }
    if (initial.current) {
      initial.current = false
    } else {
      update()
    }
  }, [themeSetting])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    if (mediaQuery?.addEventListener) {
      mediaQuery.addEventListener('change', update)
    } else {
      mediaQuery.addListener(update)
    }

    const onStorage = () => {
      update()
      const theme = localStorage.theme
      if (theme === 'light' || theme === 'dark') {
        setThemeSetting(theme)
      } else {
        setThemeSetting('system')
      }
    }
    window.addEventListener('storage', onStorage)

    return () => {
      if (mediaQuery?.removeEventListener) {
        mediaQuery.removeEventListener('change', update)
      } else {
        mediaQuery.removeListener(update)
      }

      window.removeEventListener('storage', onStorage)
    }
  }, [])

  console.log('Theme seting: ' + themeSetting)
  console.log('Theme: ' + theme)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeSetting,
        setThemeSetting,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
