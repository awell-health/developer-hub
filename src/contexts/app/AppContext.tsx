import React, { ReactNode, useState } from 'react'

import { type ThemeType } from '../../types/theme.types'

interface AppContextStateType {
  isMobileMenuOpen: boolean
  theme: ThemeType
  toggleTheme: () => void
  toggleMobileMenu: () => void
}

const initialState: AppContextStateType = {
  isMobileMenuOpen: false,
  theme: 'light',
  toggleTheme: () => null,
  toggleMobileMenu: () => null,
}

export const AppContext = React.createContext<AppContextStateType>(initialState)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(initialState.theme)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMenuOpen
  )

  const toggleTheme = () => {
    if (theme === 'light') {
      document.querySelector('html')?.classList?.add?.('dark')
      setTheme('dark')
    } else {
      document.querySelector('html')?.classList?.remove?.('dark')
      setTheme('light')
    }
  }

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  return (
    <AppContext.Provider
      value={{ theme, toggleTheme, isMobileMenuOpen, toggleMobileMenu }}
    >
      {children}
    </AppContext.Provider>
  )
}
