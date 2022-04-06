import { useRouter } from 'next/router'
import React, { ReactNode, useCallback, useEffect, useState } from 'react'

import { docsMenu } from '../../config/menus'
import { type MenuType } from '../../types/menu.types'

interface AppContextStateType {
  menu: MenuType
  isMobileSideMenuOpen: boolean
  isMobileMainMenuOpen: boolean
  isSearching: boolean
  setMenu: (menu: MenuType) => void
  toggleIsSearching: () => void
  toggleMobileMainMenu: () => void
  toggleMobileSideMenu: () => void
}

const initialState: AppContextStateType = {
  menu: docsMenu,
  isMobileSideMenuOpen: false,
  isMobileMainMenuOpen: false,
  isSearching: false,
  setMenu: () => null,
  toggleIsSearching: () => null,
  toggleMobileMainMenu: () => null,
  toggleMobileSideMenu: () => null,
}

export const AppContext = React.createContext<AppContextStateType>(initialState)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const router = useRouter()

  const [isMobileSideMenuOpen, setIsSideMobileMenuOpen] = useState<boolean>(
    initialState.isMobileSideMenuOpen
  )
  const [isMobileMainMenuOpen, setIsMainMobileMenuOpen] = useState<boolean>(
    initialState.isMobileMainMenuOpen
  )

  const [isSearching, setIsSearching] = useState<boolean>(
    initialState.isSearching
  )

  const [menu, setNewMenu] = useState<MenuType>(initialState.menu)

  const toggleMobileSideMenu = () =>
    setIsSideMobileMenuOpen(!isMobileSideMenuOpen)

  const toggleMobileMainMenu = () =>
    setIsMainMobileMenuOpen(!isMobileMainMenuOpen)

  const toggleIsSearching = () => setIsSearching(!isSearching)

  const setMenu = (menu: MenuType) => setNewMenu(menu)

  const hideMenu = useCallback(() => {
    setIsSideMobileMenuOpen(false)
    setIsMainMobileMenuOpen(false)
  }, [setIsSideMobileMenuOpen, setIsMainMobileMenuOpen])

  useEffect(() => {
    // subscribe
    router.events.on('routeChangeStart', hideMenu)

    // unsubscribe
    return () => router.events.off('routeChangeStart', hideMenu)
  }, [hideMenu, router.events])

  return (
    <AppContext.Provider
      value={{
        menu,
        setMenu,
        isSearching,
        toggleIsSearching,
        isMobileSideMenuOpen,
        toggleMobileSideMenu,
        toggleMobileMainMenu,
        isMobileMainMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
